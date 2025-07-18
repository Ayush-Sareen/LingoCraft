import { Routes, Route } from 'react-router-dom';
import Translator from './pages/Translator';
import RandomString from './pages/RandomString';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Translator />} />
        <Route path="/random" element={<RandomString />} />
      </Routes>
    </div>
  );
}

export default App;
