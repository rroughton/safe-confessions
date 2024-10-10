import React, { FC } from "react"

interface OptionProps {
  isSelected: boolean
  onClick: () => void
}

export const Option: FC<OptionProps> = ({isSelected, onClick}: OptionProps) => {
  const handleClick = () => {
    onClick();
  }

  return (
    <div onClick={handleClick}>
      {isSelected}
    </div>
  )
}