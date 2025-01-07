import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/input";

export const Birthday: FC = () => {
  const { register, formState } = useFormContext();

  return (
    <Input
      label="Birthday"
      {...register("birthday")}
      error={formState.errors.birthday?.message?.toString()}
    />
  );
};
