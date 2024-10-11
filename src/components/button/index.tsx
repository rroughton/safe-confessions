import React, { ButtonHTMLAttributes } from 'react'
import { chromeContext } from "../../global-styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string,
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  const { onClick, name } = props;
  return (
    <button style={styles.button} {...props}>
      {name}
    </button>
  )
}

const styles = {
  button: {
    backgroundColor: chromeContext.container,
    'box-sizing': 'border-box',
    color: chromeContext.foreground,
    alignItems: 'center',
    border: 'none',
    display: 'flex',
    flex: '1 1 0px',
    justifyContent: 'center',
    padding: '12px 24px',
    fontSize: '20px',
    borderRadius: '50px'
  }
}