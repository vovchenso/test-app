import { FC } from "react";
import styled from "styled-components";
import { useConfigQuery } from "../../hooks/config/use-config-query";
import { FormBuilder } from "./components/form-builder";
import { AdminProvider } from "./providers/admin-provider";
import { Spinner } from "../../components/spinner";

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
`;

export const AdminPage: FC = () => {
  const { data, isFetching, isError } = useConfigQuery();

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <AdminPageWrapper>
      <AdminProvider config={data || []}>
        <FormBuilder />
      </AdminProvider>
    </AdminPageWrapper>
  );
};
