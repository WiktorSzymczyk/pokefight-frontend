import './App.css';
import AllCards from './components/AllCards.js';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Pokemon from './components/Pokemon';
import Fight from './components/Fight';
import Search from './components/Search';

function App() {
  return (
    <>
      <Navbar />
    <div className="App bg-[#fff9c3] p-20 justify-center">
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path="/pokemon" element={<AllCards />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/fight" element={<Fight />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
