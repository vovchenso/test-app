import { FC } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import { Header } from "./header";

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageContent = styled.div`
  padding: 32px;
  display: flex;
  flex: 1;
`;

export const Layout: FC = () => (
  <LayoutWrapper>
    <Header />
    <PageContent>
      <Outlet />
    </PageContent>
  </LayoutWrapper>
);
