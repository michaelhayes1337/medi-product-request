interface IFormInput {
  name: string;
  number: string;
  email: string;
  message: string;
}
/* eslint-disable */
export enum InputIdentifier {
  TEXTFIELD = "textfield",
  DATEPICKER = "datepicker",
  RADIOBOX = "radiobutton",
  CHECKBOX = "checkbox",
}
/* eslint-enable */

export type Input = {
  guid: string;
  name: string;
  type: InputIdentifier;
  label: string;
  placeholderText?: string;
  isChecked?: boolean;
  multi?: boolean;
  multiSize?: number;
  rules: {};
};

const letstry: Input[] = [
  // textfield single line
  {
    guid: "1",
    name: "number",
    type: InputIdentifier.TEXTFIELD,
    label: "Your number here",
    placeholderText: "Please enter your number",
    rules: {
      required: { value: true, message: "Please enter a number" },
      minLength: {
        value: 10,
        message: "Enter a valid number",
      },
      maxLength: {
        value: 10,
        message: "Enter a valid number",
      },
      pattern: {
        value: /\d{10}/,
        message: "Invalid contact number format",
      },
    },
  },
  // textfield multi line
  {
    guid: "1",
    name: "message",
    type: InputIdentifier.TEXTFIELD,
    label: "Your message here",
    placeholderText: "Please enter your message",
    multi: true,
    multiSize: 5,
    rules: {
      required: { value: true, message: "Please enter a message" },
      minLength: {
        value: 10,
        message: "message short",
      },
      maxLength: {
        value: 30,
        message: "message long",
      },
    },
  },
];

export default letstry;
