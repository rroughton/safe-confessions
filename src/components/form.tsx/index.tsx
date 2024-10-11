import React from "react"
import { chromeContext } from "../../global-styles"
import { Option, Question } from "../question"
import { Button } from "../button"

interface FormProps {
  questions: string[],
  options: Option[]
}

export const Form = ({ questions, options }: FormProps) => {
  const handleSubmit = () => { };

  return (
    <div style={styles.form}>
      <header style={styles.header}>
        Confess!!
      </header>
      <section style={styles.questionsContainer}>
        {
          questions.map((question) => {
            return <Question title={question} options={options} />
          })
        }
      </section>
      <section style={styles.formSubmission}>
        <Button name='Submit' onClick={handleSubmit} type='primary' />
      </section>
    </div>
  )
}

const styles = {
  app: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  form: {
    'box-sizing': 'border-box',
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1500px'
  },
  formSubmission: {
    width: '100%',
    maxWidth: '300px'
  },
  header: {
    backgroundColor: chromeContext.accent,
    color: chromeContext.foreground,
    fontSize: '40px',
    width: '100%',
  },
  questionsContainer: {
    'box-sizing': 'border-box',
    display: 'flex',
    'flex-direction': 'column',
    padding: '16px 0px',
    gap: '24px',
    width: '100%'
  }
}