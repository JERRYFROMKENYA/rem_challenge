import React, { useState, useEffect } from "react";
import { Card } from "@heroui/card";
import { Spinner } from "@heroui/spinner";

import { getSkipsByLocation } from "../api";
import { Skip } from "../types";
import { SkipCard } from "./SkipCard";
import { SelectionBanner } from "@/features/ui";

interface SkipSelectionProps {
  postcode: string;
  area?: string;
  onSkipSelected: (skip: Skip | null) => void;
}

export const SkipSelection: React.FC<SkipSelectionProps> = ({
  postcode,
  area = "",
  onSkipSelected,
}) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  // Log selected skip for debugging
  useEffect(() => {
    console.log("Current selected skip:", selectedSkip);
    if (selectedSkip) {
      onSkipSelected(selectedSkip);
    }
  }, [selectedSkip, onSkipSelected]);

  useEffect(() => {
    async function loadSkips() {
      try {
        setLoading(true);
        const skipsData = await getSkipsByLocation(postcode, area);
        setSkips(skipsData);
        setError("");
      } catch (err) {
        setError("Failed to load skip options. Please try again later.");
        console.error("Error loading skips:", err);
      } finally {
        setLoading(false);
      }
    }

    loadSkips();
  }, [postcode, area]);

  const handleSelectSkip = (skip: Skip) => {
    console.log("handleSelectSkip called with:", skip);

    // Toggle selection - if already selected, unselect it
    setSelectedSkip((prevSelected) =>
      prevSelected && prevSelected.id === skip.id ? null : skip
    );
  };

  const handleBack = () => {
    // Clear the selected skip
    setSelectedSkip(null);
    onSkipSelected(null);
  };

  const handleContinue = () => {
    // You can add navigation logic here
    console.log("Continue with selected skip:", selectedSkip);
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 flex justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <div className="p-4">
            <p className="text-center text-red-500">{error}</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-6 py-8 mb-24">
        <div className="text-center m-6">
          <h2 className="text-2xl font-bold mb-6">Get your skip size</h2>
          <p className="text-sm text-default-500 py-2">
            We have a range of skip sizes available for hire in your area. Please
            select the one that best suits your needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {skips.map((skip) => (
            <div key={skip.id} className="flex justify-center">
              <SkipCard
                skip={skip}
                selected={selectedSkip?.id === skip.id}
                onSelect={handleSelectSkip}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Selection Banner - only shown when a skip is selected */}
      {selectedSkip && (
        <SelectionBanner
          selectedSkip={selectedSkip}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      )}
    </>
  );
};
