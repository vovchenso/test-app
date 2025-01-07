import { FC, useMemo } from "react";
import styled from "styled-components";
import { Button } from "../../../components/button";
import { StepView } from "./step-view";
import { useAdminContext } from "../providers/admin-provider";
import { useConfigMutation } from "../../../hooks/config/use-config-mutation";

const Sections = styled.div`
  display: flex;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #e0e0e0;
  margin: 0 16px;
`;

const Buttons = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
`;

export const FormBuilder: FC = () => {
  const { mutate, isPending } = useConfigMutation();
  const { items } = useAdminContext();

  const isValid = useMemo(() => {
    const step2Components = items.filter((item) => item.step === 2);
    const step3Components = items.filter((item) => item.step === 3);

    return step2Components.length > 0 && step3Components.length > 0;
  }, [items]);

  return (
    <div>
      <Sections>
        <StepView step={2} />
        <Divider />
        <StepView step={3} />
      </Sections>
      <Buttons>
        <Button disabled={!isValid || isPending} onClick={() => mutate(items)}>
          Save
        </Button>
      </Buttons>
    </div>
  );
};
