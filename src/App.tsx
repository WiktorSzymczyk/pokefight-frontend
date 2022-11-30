import './App.css';
import AllCards from './components/AllCards.js'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
    <div className="App bg-[#fff9c3] p-20 justify-center">
      <input className="p-2 rounded" placeholder="search the pokemon" />
      <button className="p-2 bg-[#222222] text-white">Search</button>
      <AllCards />
    </div>
    </>
  );
}

export default App;
