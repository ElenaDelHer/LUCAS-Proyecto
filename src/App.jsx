import { useState } from 'react'
import Boton1 from "./assets/componentes/Boton1";
import Boton2 from './assets/componentes/Boton2';
import Boton3 from './assets/componentes/Boton3';
import Boton4 from './assets/componentes/Boton4';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Boton1/>
   <Boton2/>
   <Boton3/>
   <Boton4/>
    </>
  )
}

export default App
