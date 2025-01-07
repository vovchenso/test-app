import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../../../../components/textarea";

export const AboutMe: FC = () => {
  const { register, formState } = useFormContext();

  return (
    <Textarea
      label="About me"
      {...register("aboutMe")}
      error={formState.errors.aboutMe?.message?.toString()}
      rows={5}
    />
  );
};
