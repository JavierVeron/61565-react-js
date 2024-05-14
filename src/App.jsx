import './App.css'
import Memo from './Clase12/Memo'
/* import Rendering from './Clase12/Rendering'; */
/* import Rendering2 from './Clase12/Rendering2'; */

function App() {
  const producto = {id:1, nombre:"Zapatillas Adizero Takumi Sen 10", imagen:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4291703c4a1749e2a7ab00aa9a61d5a9_9366/Zapatillas_Adizero_Takumi_Sen_10_Beige_IG8202_HM1.jpg", precio:258999, fecha:"14-05-2024"}

  return (
    <Memo item={producto} />
  )
}

export default App
