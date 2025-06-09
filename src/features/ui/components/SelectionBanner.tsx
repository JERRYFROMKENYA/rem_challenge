import React from "react";
import { Button } from "@heroui/button";

import { Skip } from "@/features/skips/types";

interface SelectionBannerProps {
  selectedSkip: Skip;
  onBack: () => void;
  onContinue: () => void;
}

export const SelectionBanner: React.FC<SelectionBannerProps> = ({
  selectedSkip,
  onBack,
  onContinue,
}) => {
  // Calculate price after VAT
  const priceWithVat = selectedSkip.price_before_vat;
  // * (1 + selectedSkip.vat / 100);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background shadow-lg z-50 border-t border-divider">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Skip information */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-50 rounded-md flex items-center justify-center">
              <span className="font-bold text-lg text-primary">
                {selectedSkip.size}Y
              </span>
            </div>
            <div>
              <p className="font-medium text-foreground">
                {selectedSkip.size} Yard Skip
              </p>
              <div className="flex gap-4">
                <p className="text-sm text-default-500">
                  {selectedSkip.hire_period_days} day hire
                </p>
                <p className="font-bold text-foreground">
                  £{priceWithVat.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <Button
              className="flex-1 md:flex-none px-6 py-2"
              variant="flat"
              onClick={onBack}
            >
              Back
            </Button>
            <Button
              className="flex-1 md:flex-none px-6 py-2"
              color="primary"
              onClick={onContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
