import { FC, useState } from "react";
import styled from "styled-components";
import { ConfigComponentEnum, ConfigStep } from "../../../models/configuration";
import { LinkButton } from "../../../components/link-button";
import { StepAddForm } from "./step-add-form";
import { useAdminContext } from "../providers/admin-provider";

const Section = styled.div`
  flex: 1;

  > h5 {
    text-align: center;
    margin-bottom: 32px;
  }
`;

const ComponentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ComponentName = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: 500;
`;

interface StepViewProps {
  step: number;
}

export const StepView: FC<StepViewProps> = ({ step }) => {
  const { items, deleteItem, showComponentSelector, setShowComponentSelector } =
    useAdminContext();

  return (
    <Section>
      <h5>Step {step}</h5>
      {items
        .filter((item) => item.step === step)
        .map((item) => (
          <ComponentRow key={item.component}>
            <ComponentName>{item.component}</ComponentName>
            <LinkButton onClick={() => deleteItem(item)}>Delete</LinkButton>
          </ComponentRow>
        ))}
      <StepAddForm step={step} />
    </Section>
  );
};
