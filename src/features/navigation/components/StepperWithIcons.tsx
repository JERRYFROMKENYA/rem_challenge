import React from "react";

import { Stepper } from "./Stepper";

export const StepperWithIcons: React.FC = () => {
  // The Skip Selection step (index 1) is always active
  const currentStep = 2;

  const steps = [
    {
      name: "Postcode",
      icon: (
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      name: "Waste Type",
      icon: (
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      ),
    },
    {
      name: "Select Skip",
      icon: (
        <svg
          height="18"
          width="18"
          viewBox="0 0 548.799 548.799"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M548.799,0H0v548.799h548.799V0z M514.652,277.205c0,0,22.054,49.744-17.604,72.174c0,0-15.245,15.263-64.737,10.648 l-48.565-84.196l97.137-56.426L514.652,277.205z M344.966,30.585c0,0,25.612,0.737,53.957,46.405l30.857,52.286l21.817-11.781 l-22.613,49.431l-22.58,49.453l-53.721-8.219l-53.752-8.225l31.533-17.042L276.361,82.721c0,0-20.738-47.155-58.575-51.971 L344.966,30.585z M93.152,454.826L28.682,345.244c0,0-12.335-22.463,12.711-70.006l29.462-53.101l-21.2-12.843l54.085-5.542 l54.088-5.53l20.083,50.505l20.125,50.514l-30.646-18.596l-59.033,97.373C108.358,378.014,78.162,419.789,93.152,454.826z M229.619,491.182l-66.977-1.11c0,0-53.957-6.882-52.598-52.448c0,0-5.129-20.958,24.489-60.876l97.177,2.093L229.619,491.182z M213.276,184.576l-95.814-58.654l34.844-57.194c0,0,33.253-43.039,71.843-18.828c0,0,20.686,6.193,40.138,51.935L213.276,184.576 z M462.88,465.704c0,0-12.824,22.155-66.472,25.396l-60.695,2.292v24.819l-32.755-43.391l-32.772-43.382l32.772-43.372 l32.755-43.382v35.863h113.878c0,0,51.347,4.144,73.562-26.843L462.88,465.704z"
          />
        </svg>
      ),
    },
    {
      name: "Permit Check",
      icon: (
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 12l2 2 4-4" />
          <path d="M12 2H2v10h3.1c.4 0 .7.1 1 .3L9 14v-2H2v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-4" />
        </svg>
      ),
    },
    {
      name: "Choose Date",
      icon: (
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      name: "Payment",
      icon: (
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="14" rx="2" width="20" x="2" y="5" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      ),
    },
  ];

  return <Stepper currentStep={currentStep} steps={steps} />;
};
