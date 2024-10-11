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
    name: "No",
    weight: 3
  },
  {
    name: "I don't know",
    weight: 4
  }
]

const QUESTIONS = ['Kiss', 'Go on a date', 'Snuggle', 'Sex',];

function App() {

  const [form, setForm] = useState({})
  return (
    <div className="App" style={styles.app}>
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
        <Button name='submit' />
      </section>
    </div>
  );
}

const styles = {
  app: {
    boxSizing: 'border-box',
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'center'
  },
  formSubmission: {
    width: '300px'
  },
  header: {
    backgroundColor: chromeContext.accent,
    color: chromeContext.foreground,
    fontSize: '40px'
  },
  questionsContainer: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 0px',
    gap: '24px'
  }
}

export default App;
