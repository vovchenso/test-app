import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/input";

export const Address: FC = () => {
  const { register, formState } = useFormContext();

  return (
    <>
      <Input
        label="Street"
        {...register("street")}
        error={formState.errors.street?.message?.toString()}
      />
      <Input
        label="City"
        {...register("city")}
        error={formState.errors.city?.message?.toString()}
      />
      <Input
        label="State"
        {...register("state")}
        error={formState.errors.state?.message?.toString()}
      />
      <Input
        label="Zip"
        {...register("zip")}
        error={formState.errors.zip?.message?.toString()}
      />
    </>
  );
};
