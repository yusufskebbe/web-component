export default {
  title: 'Components/Button',

  tags: ['autodocs'],
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click'],
    },
  },

  argTypes: {
    buttonText: {
      control: { type: 'text' },
    },
    buttonType: {
      control: { type: 'radio' },
      options: ['submit', 'button'],
    },
    buttonStyle: {
      control: { type: 'select' },
      options: ['primary', 'outlined', 'danger', 'success'],
    },
    buttonDisabled: {
      control: { type: 'boolean' },
    },
  },
};
const Template = argTypes => `
  <my-button button-text="${argTypes.buttonText}" button-type="${argTypes.buttonType}" button-style="${argTypes.buttonStyle}" button-disabled="${argTypes.buttonDisabled}"></my-button>`;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Button Text',
  buttonType: 'submit',
  buttonStyle: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  buttonText: 'Button Text',
  buttonType: 'submit',
  buttonStyle: 'danger',
};

export const Success = Template.bind({});
Success.args = {
  buttonText: 'Button Text',
  buttonType: 'submit',
  buttonStyle: 'success',
};
