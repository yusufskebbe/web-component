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
    text is here I change it now 
  </my-text>
`;
