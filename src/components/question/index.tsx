import React, { useContext, useState } from 'react'
import { Option } from '../option'
import { chromeContext } from '../../global-styles'
import { FormContext } from '../../App'

interface QuesitonProps {
  title: string
  options: Option[]
}

export interface Option {
  name: string
  weight: number
}

export const Question = ({ title, options }: QuesitonProps) => {
  const {
    form,
    setForm
  } = useContext(FormContext);
  const [currentlySelectedOption, setCurrentlySelectedOption] = useState(99999)

  return (
    <div style={styles.questionContainer}>
      <header style={styles.header}>
        {title}
      </header>
      <section style={styles.optionsContainer}>
        {options.map((option) => {
          return (
            <Option
              isSelected={option.weight === currentlySelectedOption}
              onClick={() => {
                setCurrentlySelectedOption(option.weight);
                setForm({
                  ...form,
                  [title]: option.weight
                });
              }}
              {...option}
            />
          )
        })}
      </section>
    </div>
  )
}

const styles = {
  optionsContainer: {
    display: 'flex',
    width: '100%',
    'flex-wrap': 'wrap',
  },

  header: {
    display: 'flex',
    fontSize: '24px',
    color: chromeContext.foreground
  },

  questionContainer: {
    alignItems: 'center',
    border: `3px solid ${chromeContext.background}`,
    'box-sizing': 'border-box',
    background: chromeContext.background,
    display: 'flex',
    "flex-direction": 'column',
    gap: '16px',
    padding: '24px 12px',
    width: '100%'
  }
}