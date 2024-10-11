import React, { FC } from "react"
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

  return (
    <div style={styles.buttonContainer}>
      <Button name={name} onClick={handleClick} isSelected={isSelected} type='secondary' />
    </div>
  )
}

const styles = {
  buttonContainer: {
    padding: '12px',
    maxWidth: '270px',
    width: '100%',
  }
}