import { z } from 'zod';
import { ConfigComponentEnum, ConfigStep } from '../../../models/configuration';

const initialStepValidationSchema = {
  email: z.string().email(),
  password: z.string().min(8),
};

const addressValidationSchema = {
  street: z.string().nonempty(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
  zip: z.string().length(5),
};

const birthdayValidationSchema = {
  birthday: z.date(),
};

const aboutMeValidationSchema = {
  aboutMe: z.string().nonempty(),
};

const getSchema = (type: ConfigComponentEnum) => {
  switch (type) {
    case ConfigComponentEnum.Address:
      return addressValidationSchema;
    case ConfigComponentEnum.Birthday:
      return birthdayValidationSchema;
    case ConfigComponentEnum.AboutMe:
      return aboutMeValidationSchema;
  }
}

export const getWizardValidationSchema = (activeStep: number, config: ConfigStep[]) => {
  if (activeStep === 0) {
    return z.object(initialStepValidationSchema);
  }

  const validationSchema = {};
  config.filter(step => step.step === activeStep + 1).forEach((step) => {
    const schema = getSchema(step.component);
    Object.assign(validationSchema, schema);
  });

  return z.object(validationSchema);
};
