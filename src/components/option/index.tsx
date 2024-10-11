import React, { FC } from "react"
import { chromeContext } from "../../global-styles"
import { Button } from "../button"

interface OptionProps {
  name: string
  isSelected: boolean
  weight: number
  onClick: () => void
}

export const Option: FC<OptionProps> = ({ isSelected, name, onClick }: OptionProps) => {
  const handleClick = () => {
    onClick();
  }

  const buttonStyles = isSelected ? { ...styles.button, ...styles.selected } : { ...styles.button }

  return (
    <Button name={name} onClick={handleClick} />
  )
}

const styles = {
  button: {
    alignItems: 'center',
    'box-sizing': 'border-box',
    border: 'none',
    display: 'flex',
    flex: '1 1 0px',
    justifyContent: 'center',
    padding: '8px',
    fontSize: '20px',
  },
  selected: {
    backgroundColor: chromeContext.accent
  }
}