export enum ConfigComponentEnum {
  AboutMe = "AboutMe",
  Address = "Address",
  Birthday = "Birthday",
}

export interface ConfigStep {
  step: number;
  component: ConfigComponentEnum;
}