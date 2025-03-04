import { ButtonProps } from './Button.types'
import styles from './Button.module.css'
import clsx from 'clsx';
export function Button({  color = "primary", size = 'medium', type = 'button', label, ...props }: Readonly<ButtonProps>) {
  const style = clsx(
    styles.button, 
    props.className, {
        [styles[`button--${color}`]]: color,
        [styles[`button--${size}`]]: size,
    },
    props.variant && styles[`button--${props.variant}`]
    );

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