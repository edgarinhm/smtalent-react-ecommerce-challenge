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
    children: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button Primary',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    color: 'secondary',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Button Outlined',
    color: 'primary',
    variant: 'outlined'
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button Disabled',
    disabled: true,
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