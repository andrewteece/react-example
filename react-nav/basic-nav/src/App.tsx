import { Routes, Route } from 'react-router';
import './App.css';
import AboutMe from './AboutMe';
import Homepage from './Homepage';

function App() {
  return (
    <div>
      <nav>
        <a href='#'>Homepage</a>
        <a href='#'>About Me</a>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
