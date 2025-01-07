import { FC } from "react";
import styled, { css } from "styled-components";

const WizardHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  column-gap: 24px;
`;

const WizardStep = styled.div<{ $isActive?: boolean; $isCompleted?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f0f0f0;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: #007bff;
      color: #fff;
    `}

  ${({ $isCompleted }) =>
    $isCompleted &&
    css`
      background-color: #28a745;
      color: #fff;
    `}
`;

interface WizardHeaderProps {
  activeStep: number;
}

export const WizardHeader: FC<WizardHeaderProps> = ({ activeStep }) => (
  <WizardHeaderWrapper>
    <WizardStep $isActive={activeStep === 0} $isCompleted={activeStep > 0}>
      1
    </WizardStep>
    <WizardStep $isActive={activeStep === 1} $isCompleted={activeStep > 1}>
      2
    </WizardStep>
    <WizardStep $isActive={activeStep === 2}>3</WizardStep>
  </WizardHeaderWrapper>
);
