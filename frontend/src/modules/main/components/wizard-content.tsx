import { FC } from "react";
import styled from "styled-components";
import { InitialStep } from "./steps/initial-step";
import { Step } from "./steps/step";
import { ConfigStep } from "../../../models/configuration";

const WizardContentWrapper = styled.div`
  margin-top: 40px;
`;

interface WizardContentProps {
  activeStep: number;
  stepConfig: ConfigStep[];
}

export const WizardContent: FC<WizardContentProps> = ({
  activeStep,
  stepConfig,
}) => (
  <WizardContentWrapper>
    {activeStep === 0 ? <InitialStep /> : <Step stepConfig={stepConfig} />}
  </WizardContentWrapper>
);
