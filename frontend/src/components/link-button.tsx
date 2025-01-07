import styled from "styled-components";

export const LinkButton = styled.a<{ $type?: "primary" | "secondary" }>`
  color: ${({ $type }) => ($type === "secondary" ? "#ff7b00" : "#007bff")};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;
