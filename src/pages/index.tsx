import { useEffect, useState } from "react";
import { useTheme } from "@heroui/use-theme";

import DefaultLayout from "@/layouts/default";
import { SkipSelection } from "@/features/skips";
import { Skip } from "@/features/skips/types";
import { StepperWithIcons } from "@/features/navigation/components/StepperWithIcons";

export default function SkipSelectionPage() {
  // const { postcode, area } = useParams();
  const { setTheme } = useTheme();
  const [, setSelectedSkip] = useState<Skip | null>(null);

  useEffect(() => {
    setTheme("system");
  });

  const handleSkipSelected = (skip: Skip | null) => {
    setSelectedSkip(skip);
  };

  return (
    <DefaultLayout>
      {/* Step indicator - now with "Select Skip" always active */}
      <div className="container max-w-screen-lg mx-auto px-4">
        <StepperWithIcons />
      </div>

      <SkipSelection
        area={"Lowestoft"}
        postcode={"NR32"}
        onSkipSelected={handleSkipSelected}
      />
    </DefaultLayout>
  );
}
