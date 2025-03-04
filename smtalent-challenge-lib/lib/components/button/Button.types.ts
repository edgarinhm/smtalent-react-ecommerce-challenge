import { ButtonHTMLAttributes } from 'react'

interface ButtonVariants extends React.ComponentProps<'button'> {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  label?: string
  variant?: 'primary' | 'secondary'
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants
