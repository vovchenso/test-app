import { FC } from "react";
import {
  ConfigComponentEnum,
  ConfigStep,
} from "../../../../models/configuration";
import { Address } from "../form/address";
import { Birthday } from "../form/birthday";
import { AboutMe } from "../form/about-me";

const renderComponent = (step: ConfigStep) => {
  switch (step.component) {
    case ConfigComponentEnum.Address:
      return <Address />;
    case ConfigComponentEnum.Birthday:
      return <Birthday />;
    case ConfigComponentEnum.AboutMe:
      return <AboutMe />;
    default:
      return null;
  }
};

interface StepProps {
  stepConfig: ConfigStep[];
}

export const Step: FC<StepProps> = ({ stepConfig }) => {
  return <>{stepConfig.map(renderComponent)}</>;
};
