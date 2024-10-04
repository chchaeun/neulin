import React, { ReactNode } from "react";

interface StepperProps {
  children: ReactNode;
  currentStep: string;
}

interface StepProps {
  name: string;
  children: ReactNode;
  className?: string;
}

const Stepper = ({ children, currentStep }: StepperProps) => {
  return (
    <>
      {React.Children.toArray(children).find(
        (child) =>
          React.isValidElement(child) && child.props.name === currentStep
      )}
    </>
  );
};

const Step = ({ name, children, className }: StepProps) => {
  return (
    <div className={className} key={name}>
      {children}
    </div>
  );
};

Stepper.Step = Step;

export default Stepper;
