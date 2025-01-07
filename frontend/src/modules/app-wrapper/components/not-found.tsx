import { FC } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const NotFoundWrapper = styled.main`
  display: grid;
  place-items: center;
`;

export const NotFound: FC = () => (
  <NotFoundWrapper>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </NotFoundWrapper>
);
