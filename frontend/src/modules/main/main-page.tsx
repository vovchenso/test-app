import { FC } from "react";
import styled from "styled-components";
import { WizardForm } from "./components/wizard-form";
import { useConfigQuery } from "../../hooks/config/use-config-query";
import { Spinner } from "../../components/spinner";

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
`;

export const MainPage: FC = () => {
  const { data, isFetching, isError } = useConfigQuery();

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <MainPageWrapper>
      <WizardForm config={data || []}></WizardForm>
    </MainPageWrapper>
  );
};
