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

const Template = () => `
  <my-button >My button 1</my-button>`;

//{ buttonText, buttonType, buttonStyle, buttonDisabled } template function parametere
//button-text="${buttonText}" button-type="${buttonType}" button-style="${buttonStyle}" button-disabled="${buttonDisabled}" button properties

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Default',
  buttonType: 'submit',
  buttonStyle: 'primary',
  buttonDisabled: 'false',
};
