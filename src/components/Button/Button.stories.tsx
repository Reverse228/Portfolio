import { GitHub } from '../../../public/svg/GitHub';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './layout';

export default {
  component: Button,
  argTypes: {
    label: {
      name: 'Label',
      type: { name: 'string' },
      description: 'Set label for button. It is required props',
      control: { type: 'text' },
    },
    color: {
      name: 'Color',
      description: 'Set color for icon',
      type: { name: 'string' },
      control: { type: 'select' },
      options: ['dark', 'success'],
    },
    iconPosition: {
      name: 'Icon Position',
      description: 'Can set icon before or behind text',
      type: { name: 'string' },
      control: { type: 'inline-radio' },
      options: ['start', 'end'],
    },
  },
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  render: (props) => <Button {...props} icon={<GitHub />} />,
  args: {
    label: 'Submit',
    color: 'dark',
    disabled: false,
    iconPosition: 'start',
  },
};

export const PrimaryWithoutButton: StoryObj<typeof Button> = {
  render: (props) => <Button {...props} />,
  args: {
    label: 'Submit',
    color: 'dark',
    disabled: false,
    iconPosition: 'start',
  },
};
