export default {
  title: 'Components/Text',

  tags: ['autodocs'],
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click'],
    },
  },
};

export const Template = () => `
  <my-text>
    text is here
  </my-text>
`;
