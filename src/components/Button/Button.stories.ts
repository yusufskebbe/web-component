//

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { Components } from '../../components';

const meta: Meta = {
  title: 'Components/Button',
  parameters: {
    layout: 'fullscreen',
  },
  render: (args: Components.MyButton) => html`<my-button>Anıl button</my-button>`,
};
//button-text="${args.buttonText}" button-type="${args.buttonType}" button-style="${args.buttonStyle}" button-disabled="${args.buttonDisabled}"
export default meta;

type Story = StoryObj<Components.MyButton>;

export const MyButton: Story = {
  args: {
    buttonText: 'Anıl Buton',
    buttonType: 'submit',
    buttonStyle: 'danger',
    buttonDisabled: false,
  },
};

//export default {
//   title: 'Components/Button',

//   tags: ['autodocs'],
//   parameters: {
//     actions: {
//       argTypesRegex: '^on.*',
//       handles: ['click'],
//     },
//   },

//   argTypes: {
//     buttonType: {
//       control: { type: 'radio' },
//       options: ['submit', 'button'],
//     },
//     buttonStyle: {
//       control: { type: 'select' },
//       options: ['primary', 'outlined', 'danger', 'success'],
//     },
//     buttonDisabled: {
//       control: { type: 'boolean' },
//     },
//   },
// };

// const Template = ({ buttonText, buttonType, buttonStyle, buttonDisabled }) => `
//   <my-button button-text="${buttonText}" button-type="${buttonType}" button-style="${buttonStyle}" button-disabled="${buttonDisabled}"></my-button>`;

// export const Default = Template.bind({});
// Default.args = {
//   buttonText: 'Default',
//   buttonType: 'submit',
//   buttonStyle: 'primary',
//   buttonDisabled: 'false',
// };
