import React, { createContext, useState } from 'react';
import './App.css';
import { Option } from './components/question';
import { Form } from './components/form.tsx';

const DEFAULT_OPTIONS: Option[] = [
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

const QUESTIONS: string[] = ['Kiss', 'Go on a date', 'Snuggle', 'Sex', 'Make out', 'Oral', 'Hold hands'];

const INITIAL_FORM: { [key: string]: number | null } = {};
QUESTIONS.map(question => INITIAL_FORM[question] = null)
export const FormContext = createContext({ form: INITIAL_FORM, setForm: (form: { [key: string]: number | null }) => { } });

function App() {
  const [form, setForm] = useState(INITIAL_FORM);

  console.log(form)

  return (
    <div className="App" style={styles.app}>
      <FormContext.Provider value={{ form, setForm }}>
        <Form questions={QUESTIONS} options={DEFAULT_OPTIONS} />
      </FormContext.Provider>
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  }
}

export default App;
