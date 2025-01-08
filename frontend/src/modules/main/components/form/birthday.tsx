import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/input";

export const Birthday: FC = () => {
  const { register, formState } = useFormContext();
  const maxDate = new Date().toISOString().split("T")[0];

  return (
    <Input
      label="Birthday"
      type="date"
      max={maxDate}
      {...register("birthday", { setValueAs: (value) => new Date(value) })}
      error={formState.errors.birthday?.message?.toString()}
    />
  );
};
