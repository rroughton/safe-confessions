import { useState } from 'react';
import './App.css';
import { Question } from './components/question';
import { chromeContext } from './global-styles';
import { Button } from './components/button';

const DEFAULT_OPTIONS = [
  {
    name: "Yes",
    weight: 1
  },
  {
    name: "If you want to",
    weight: 2
  },
  {
    name: "Need to work up to",
    weight: 3,
  },
  {
    name: "No",
    weight: 4
  },
  {
    name: "I don't know",
    weight: 5
  }
]

const QUESTIONS = ['Kiss', 'Go on a date', 'Snuggle', 'Sex', 'Make out', 'Oral', 'Hold hands'];

function App() {

  const [form, setForm] = useState({})
  return (
    <div className="App" style={styles.app}>
      <div style={styles.form}>
        <header style={styles.header}>
          Confess!!
        </header>
        <section style={styles.questionsContainer}>
          {
            QUESTIONS.map((question) => {
              return <Question title={question} options={DEFAULT_OPTIONS} />
            })
          }
        </section>
        <section style={styles.formSubmission}>
          <Button name='Submit' />
        </section>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  form: {
    boxSizing: 'border-box',
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
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 0px',
    gap: '24px',
    width: '100%'
  }
}

export default App;
