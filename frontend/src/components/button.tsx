import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004b9a;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #333;
    cursor: default;
  }
`;
