import { FC, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { ConfigComponentEnum } from "../../../models/configuration";
import { Select } from "../../../components/select";
import { useAdminContext } from "../providers/admin-provider";
import { LinkButton } from "../../../components/link-button";

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
`;

interface StepAddFormProps {
  step: number;
}

export const StepAddForm: FC<StepAddFormProps> = ({ step }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { items, showComponentSelector, setShowComponentSelector, addItem } =
    useAdminContext();

  const availableComponents = useMemo(() => {
    const usedComponents = items.map((item) => item.component);
    return Object.values(ConfigComponentEnum).filter(
      (component) => !usedComponents.includes(component)
    );
  }, [items]);

  if (!showComponentSelector && availableComponents.length > 0) {
    return (
      <LinkButton onClick={() => setShowComponentSelector(step)}>
        Add component
      </LinkButton>
    );
  }

  if (showComponentSelector === step) {
    return (
      <div>
        <Select options={availableComponents} ref={selectRef} />
        <Buttons>
          <LinkButton
            $type="secondary"
            onClick={() => setShowComponentSelector(undefined)}
          >
            Cancel
          </LinkButton>
          <LinkButton
            onClick={() =>
              addItem({
                step,
                component: selectRef.current?.value as ConfigComponentEnum,
              })
            }
          >
            Add
          </LinkButton>
        </Buttons>
      </div>
    );
  }

  return null;
};
