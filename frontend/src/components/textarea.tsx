import { FC, JSX } from "react";
import { Error, InputProps, InputWrapper, StyledInput } from "./input";

type OwnTextareaProps = JSX.IntrinsicElements["textarea"];

export const Textarea: FC<InputProps & OwnTextareaProps> = ({
  label,
  error,
  ref,
  ...props
}) => (
  <InputWrapper>
    {!!label && <label>{label}</label>}
    <StyledInput as="textarea" {...props} ref={ref} />
    {!!error && <Error>{error}</Error>}
  </InputWrapper>
);
