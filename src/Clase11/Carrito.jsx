import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
    const {carrito, totalProductos} = useContext(CartContext);

    return (
        <div className="container">
            <div className="row">
                <h1>Mi Carrito</h1>
                {
                    carrito.map(item => (
                        <p key={item.id}><img src={item.imagen} alt={item.nombre} width={64} /> {item.nombre} <b>${item.precio}</b></p>
                    ))
                }
                <p className="text-center">Total Productos: <b>{totalProductos()}</b></p>
            </div>
        </div>
    )
}

export default Carrito;