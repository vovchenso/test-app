import { FC, JSX } from "react";
import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    margin-bottom: 4px;
  }
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Error = styled.span`
  margin-top: 2px;
  color: #dc3545;
  font-size: 14px;
`;

type OwnInputProps = JSX.IntrinsicElements["input"];

export interface InputProps {
  label?: string;
  error?: string;
}

export const Input: FC<InputProps & OwnInputProps> = ({
  label,
  error,
  ref,
  ...props
}) => (
  <InputWrapper>
    {!!label && <label>{label}</label>}
    <StyledInput {...props} ref={ref} />
    {!!error && <Error>{error}</Error>}
  </InputWrapper>
);
