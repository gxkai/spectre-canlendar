/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Navbar from './Navbar.vue';

storiesOf('Navbar', module)
  .add('plain', () => ({
    components: { Navbar },
    template: '<Navbar ></Navbar>'
  }))
