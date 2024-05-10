import './App.css'
import Carrito from './Clase11/Carrito';
import Productos from './Clase11/Productos';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Productos />
      <Carrito />
    </CartContextProvider>
  )
}

export default App
