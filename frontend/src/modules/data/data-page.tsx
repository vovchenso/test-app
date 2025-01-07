import { FC } from "react";
import styled from "styled-components";
import { DataTable } from "./components/data-table";
import { Spinner } from "../../components/spinner";
import { useDataQuery } from "../../hooks/data/use-data-query";

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
`;

export const DataPage: FC = () => {
  const { data, isFetching, isError } = useDataQuery();

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <MainPageWrapper>
      <DataTable data={data || []}></DataTable>
    </MainPageWrapper>
  );
};
