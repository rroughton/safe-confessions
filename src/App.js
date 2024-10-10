import './App.css';
import { Question } from './components/question';

const DEFAULT_OPTIONS = [
  "Want",
  "I'd like to try",
  "I'd do it if you wanted to",
  "I'd try it if you wanted to",
  "Don't want",
  "Don't know"
]

const QUESTIONS = [
  {}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Confess!!
        { 
          QUESTIONS.map((question) => {
            return <Question title='Bite ass' options={DEFAULT_OPTIONS}/>
        })
        }
      </header>     
    </div>
  );
}

export default App;
