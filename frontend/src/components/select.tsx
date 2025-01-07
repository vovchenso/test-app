import { FC, JSX } from "react";
import { Error, InputProps, InputWrapper, StyledInput } from "./input";

type OwnTextareaProps = JSX.IntrinsicElements["select"];

interface SelectProps extends InputProps {
  options: string[];
}

export const Select: FC<SelectProps & OwnTextareaProps> = ({
  label,
  error,
  options,
  ref,
  ...props
}) => (
  <InputWrapper>
    {!!label && <label>{label}</label>}
    <StyledInput as="select" {...props} ref={ref}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledInput>
    {!!error && <Error>{error}</Error>}
  </InputWrapper>
);
