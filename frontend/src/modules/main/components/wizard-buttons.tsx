import { FC } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../../components/button";

const WizardButtonsWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

interface WizardButtonsProps {
  activeStep: number;
  onClickBack?: () => void;
  onClickNext?: () => void;
}

export const WizardButtons: FC<WizardButtonsProps> = ({
  activeStep,
  onClickBack,
  onClickNext,
}) => {
  return (
    <WizardButtonsWrapper>
      <Button disabled={activeStep === 0} onClick={onClickBack}>
        Back
      </Button>
      <Button onClick={onClickNext}>
        {activeStep === 2 ? "Submit" : "Next"}
      </Button>
    </WizardButtonsWrapper>
  );
};
