import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
  args: {
    label: 'Default Button'
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button Primary',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button Secondary',
    variant: 'secondary',
  },
}

export const XLarge: Story = {
  args: {
    size: 'xlarge',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}


export const  Medium: Story = {
  args: {
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}