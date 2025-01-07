import { FC } from "react";
import { Link, useRouteError } from "react-router";
import styled from "styled-components";

const ErrorWrapper = styled.main`
  display: grid;
  place-items: center;
`;

export const ErrorBoundary: FC = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <ErrorWrapper>
      <h1>Something went wrong!</h1>
      <Link to="/">Go Home</Link>
    </ErrorWrapper>
  );
};
