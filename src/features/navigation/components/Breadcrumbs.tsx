import React from "react";

export interface BreadcrumbsProps {
  steps: string[];
  current: number;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ steps, current }) => {
  return (
    <nav className="mb-4" aria-label="Breadcrumb">
      <ol className="flex space-x-2 text-sm">
        {steps.map((step, idx) => (
          <li key={step} className={idx === current ? "font-bold text-blue-600" : "text-gray-400"}>
            {step}
            {idx < steps.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
