import { Routes, Route, Link } from 'react-router';
import './App.css';
import AboutMe from './AboutMe';
import Homepage from './Homepage';
import Contact from './Contact';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Homepage</Link>
        <Link to='/about'>About Me</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
