import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Instructors from './pages/Instructors';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-[#FAF5EF] min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/instructors' element={<Instructors />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
        <Footer />
    </div>
  );
}

export default App;
