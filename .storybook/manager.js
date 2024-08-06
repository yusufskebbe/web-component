import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Paytr Components',
    brandUrl: 'https://www.paytr.com/',
    brandImage: '/paytr_logo.png',
    brandTarget: '_self',
  }),
});
