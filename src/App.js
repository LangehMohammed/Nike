import './main.css'
import Lenis from 'lenis'
import { useRef, useEffect} from 'react'
import Nav from "./Componets/Navigation/Nav";


function App() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Nav/>
    </>
  );
}

export default App;
