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

const Template = ({ buttonText, buttonType, buttonStyle, buttonDisabled }) => `
  <my-button button-text="${buttonText}" button-type="${buttonType}" button-style="${buttonStyle}" button-disabled="${buttonDisabled}"></my-button>`;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Default',
  buttonType: 'submit',
  buttonStyle: 'primary',
  buttonDisabled: 'false',
};
