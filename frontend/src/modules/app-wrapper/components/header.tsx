import { FC } from "react";
import { NavLink } from "react-router";
import styled from "styled-components";
import { RouteEnum } from "../configs/router";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  column-gap: 16px;
  height: 50px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #e0e0e0;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-decoration: none;
  color: #333;

  &.active {
    color: #007bff;
    font-weight: 600;
  }
`;

const getClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? "active" : undefined;

export const Header: FC = () => (
  <HeaderWrapper>
    <StyledLink to={RouteEnum.Main} className={getClassName}>
      Home
    </StyledLink>
    <StyledLink to={RouteEnum.Admin} className={getClassName}>
      Admin
    </StyledLink>
    <StyledLink to={RouteEnum.Data} className={getClassName}>
      Data
    </StyledLink>
  </HeaderWrapper>
);
