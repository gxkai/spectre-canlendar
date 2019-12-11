/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Calendar from './Calendar.vue';

storiesOf('Calendar', module)
  .add('plain', () => ({
    components: { Calendar },
    template: '<Calendar ></Calendar>'
  }))
