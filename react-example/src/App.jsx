import { useState } from 'react';
import Heading from './components/Heading';
import './App.css';

function App() {
  const [word, setWord] = useState('Eat');

  // setWord('Drink)

  return (
    <>
      <div className='App'>
        <Heading message={word + ` at Little Lemon`} />
      </div>
    </>
  );
}

export default App;
