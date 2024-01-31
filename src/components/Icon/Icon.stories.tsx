import { GitHub } from '../../../public/svg/GitHub';

import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './layout';

export default {
  component: Icon,
  argTypes: {
    size: {
      name: 'Size',
      description: 'Set size for icon',
      type: { name: 'string' },
      control: { type: 'inline-radio' },
      options: ['S', 'M', 'L'],
    },
    color: {
      name: 'Color',
      description: 'Set color for icon',
      type: { name: 'string' },
      control: { type: 'select' },
      options: ['dark', 'light', 'success', 'error', 'alert'],
    },
    opacity: {
      name: 'Opacity',
      description: 'Set opacity for icon',
      type: { name: 'number' },
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    Svg: {
      control: { type: false },
      description: 'Set svg image for icon',
    },
  },
} as Meta<typeof Icon>;

export const Primary: StoryObj<typeof Icon> = {
  render: (props) => <Icon {...props} Svg={<GitHub />} />,
  args: {
    size: 'M',
    color: 'dark',
    opacity: 1,
  },
};
