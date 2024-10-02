import React, { Fragment, ReactNode, useState } from "react";
import { useImmer } from "use-immer";

interface Props<T> {
  steps: string[];
  stepFilters?: ((data: T) => string | void)[];
  initData: T;
}

const useStepper = <T,>({ steps, stepFilters, initData }: Props<T>) => {
  const [step, setStep] = useState(0);
  const [data, updateData] = useImmer<T>(initData);

  const setFilteredStep = (changeStep: (current: number) => number) => {
    setStep((prevStep) => {
      let currentStep = changeStep(prevStep);
      if (stepFilters) {
        for (const stepFilter of stepFilters) {
          const noVisit = steps.findIndex((step) => step === stepFilter(data));

          if (noVisit > -1 && currentStep === noVisit) {
            currentStep = changeStep(currentStep);
          }
        }
      }
      return currentStep;
    });
  };

  const prev = () => {
    setFilteredStep((current) => current - 1);
  };

  const next = () => {
    setFilteredStep((current) => current + 1);
  };

  const Stepper = ({ children }: { children: ReactNode }) => {
    return (
      <>
        {React.Children.toArray(children).find(
          (child) =>
            React.isValidElement(child) && child.props.name === steps[step]
        )}
      </>
    );
  };

  const Step = ({ name, children }: { name: string; children: ReactNode }) => {
    return <Fragment key={name}>{children}</Fragment>;
  };

  Stepper.Step = Step;

  const currentStep = steps[step];
  const isFirst = step === 0;
  const isLast = step === steps.length - 1;
  return {
    isFirst,
    isLast,
    currentStep,
    data,
    prev,
    next,
    updateData,
    Stepper,
  };
};

export { useStepper };
