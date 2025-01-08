import { FC, PropsWithChildren, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfigStep } from "../../../models/configuration";
import { WizardHeader } from "./wizard-header";
import { WizardContent } from "./wizard-content";
import { WizardButtons } from "./wizard-buttons";
import { getWizardValidationSchema } from "../config/validation-schema";
import { useDatMutation } from "../../../hooks/data/use-data-mutation";
import { OnboardingData } from "../../../models/data";

interface WizardFormProps {
  config: ConfigStep[];
}

export const WizardForm: FC<PropsWithChildren<WizardFormProps>> = ({
  config,
}) => {
  const { mutateAsync, isPending } = useDatMutation();
  const [activeStep, setActiveStep] = useState(0);

  const stepConfig = config.filter((step) => step.step === activeStep + 1);
  const validationSchema = getWizardValidationSchema(activeStep, config);

  const methods = useForm<OnboardingData>({
    shouldUnregister: false,
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const handleSubmit = async () => {
    const data = methods.getValues();
    await mutateAsync(data);
    // methods.reset();
    // setActiveStep(0);
  };

  const handleNext = async () => {
    const isStepValid = await methods.trigger();
    if (isStepValid) {
      if (activeStep === 2) {
        handleSubmit();
        return;
      }

      setActiveStep((prevActiveStep) =>
        prevActiveStep < 2 ? prevActiveStep + 1 : prevActiveStep
      );
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep
    );
  };

  return (
    <FormProvider {...methods}>
      <WizardHeader activeStep={activeStep} />
      <WizardContent activeStep={activeStep} stepConfig={stepConfig} />
      {!isPending && (
        <WizardButtons
          activeStep={activeStep}
          onClickBack={handleBack}
          onClickNext={handleNext}
        />
      )}
    </FormProvider>
  );
};
