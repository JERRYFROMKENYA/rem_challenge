import React, { useEffect, useRef } from "react";

interface StepperProps {
  currentStep: number;
  steps: {
    name: string;
    icon: React.ReactNode;
  }[];
}

export const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef<HTMLDivElement>(null);

  // Effect to scroll to the active step when the component mounts or currentStep changes
  useEffect(() => {
    if (activeStepRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeElement = activeStepRef.current;

      // Calculate the scroll position to center the active step
      const containerWidth = container.offsetWidth;
      const activeElementLeft = activeElement.offsetLeft;
      const activeElementWidth = activeElement.offsetWidth;

      // Center the active element in the container
      const scrollPosition =
        activeElementLeft - containerWidth / 2 + activeElementWidth / 2;

      // Smooth scroll to the calculated position
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentStep]);

  return (
    <div className="w-full py-4 overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex justify-center items-center gap-3 md:gap-5 overflow-x-auto no-scrollbar px-4 md:px-8"
        style={{alignSelf: 'center'}}
      >
        {steps.map((step, index) => {
          // Determine state: completed, active, or pending
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <React.Fragment key={step.name}>
              {/* Step item */}
              <div
                ref={isActive ? activeStepRef : null}
                className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              >
                {/* Icon circle with appropriate styling based on state */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-colors ${
                    isCompleted
                      ? "bg-success text-white"
                      : isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-default-100 text-default-500"
                  }`}
                >
                  {step.icon}
                </div>
                {/* Step name */}
                <span className={`mt-2 text-xs sm:text-sm font-medium text-center max-w-[90px] transition-colors ${
                  isActive ? "text-primary" : "text-default-600"
                }`}>
                  {step.name}
                </span>
              </div>

              {/* Connector line - don't render after last step */}
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 h-4 px-2">
                  <hr
                    className={`w-14 md:w-20 h-0.5 transition-colors ${
                      isCompleted ? "bg-success" : "bg-default-300"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
