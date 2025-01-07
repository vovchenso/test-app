import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/input";

export const InitialStep: FC = () => {
  const { formState, register } = useFormContext();

  return (
    <>
      <Input
        label="Email"
        {...register("email")}
        error={formState.errors.email?.message?.toString()}
      />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={formState.errors.password?.message?.toString()}
      />
    </>
  );
};
