/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Timeline from './Timeline.vue';

storiesOf('Timeline', module)
  .add('plain', () => ({
    components: { Timeline },
    template: '<Timeline ></Timeline>'
  }))
