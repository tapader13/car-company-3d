import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
function App() {
  return (
    <>
      <div className=' bg-backgroundImage'>
        <Hero />
        <Highlights />
        <Contact />
      </div>
    </>
  );
}

export default App;
