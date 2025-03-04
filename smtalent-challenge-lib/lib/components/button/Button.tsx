import { ButtonProps } from './Button.types'
import styles from './Button.module.css'
import clsx from 'clsx';
export function Button({  size = 'medium', label, type = 'button', ...props }: Readonly<ButtonProps>) {
  const style = clsx(
    styles.button, 
    props.className,
    props.variant && styles[`button--${props.variant}`],
    props.style && styles[`button--${props.style}`],{
    [styles[`button--${size}`]]: size,
  });
  

  return (
    <button
      type={type}
      className={style}
      {...props}
    >
      {label}
    </button>
  )
}