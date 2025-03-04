import { ButtonHTMLAttributes } from 'react'

interface ButtonVariants extends React.ComponentProps<'button'> {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  label?: string
  color?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined'
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants
