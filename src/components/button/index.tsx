import React from 'react'
import './style.css'
import { chromeContext } from "../../global-styles"

interface ButtonProps {
  isSelected?: boolean,
  name: string,
  onClick: () => void,
  type: 'primary' | 'secondary' | 'tertiary'
}

export const Button = ({ isSelected = false, onClick, name, type }: ButtonProps) => {

  let buttonStyles = { ...styles.button, ...styles[type] };
  if (isSelected) {
    buttonStyles = { ...buttonStyles, ...styles.selected }
  }

  return (
    <button className='button' style={buttonStyles} onClick={onClick}>
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
    justifyContent: 'center',
    padding: '12px 24px',
    fontSize: '20px',
    borderRadius: '50px',
    width: '100%',
  },

  primary: {
    backgroundColor: chromeContext.accent
  },
  secondary: {
    backgroundColor: chromeContext.container
  },
  tertiary: {

  },
  selected: {
    backgroundColor: chromeContext.accent
  }
}