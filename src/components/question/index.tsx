import React, { useState } from 'react'
import { Option } from '../option'

interface QuesitonProps {
  title: string
  options: Option[]
}

interface Option {
  name: string
  weight: number
}

export const Question = ({title, options}: QuesitonProps) => {
  const [currentlySelectedOption, setCurrentlySelectedOption] = useState(99999)

  return (
    <div>
      <header>
        {title}
      </header>
      <section style={styles.optionsContainer}>
        {options.map((option, index) => {
          return (
            <Option isSelected={index===currentlySelectedOption} onClick={()=>setCurrentlySelectedOption(index)} {...option}/>
          )
        })}
      </section>
    </div>
  )  
}

const styles = {
  optionsContainer: {
    display: 'flex',
  }
}