import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Productos = () => {
    const {productos, totalProductos, agregarProducto} = useContext(CartContext);

    return (
        <div className="container">
            <div className="row">
                <p className="text-end"><button className="btn bg-dark text-white">🛒 <b>{totalProductos()}</b></button></p>
                {
                    productos.map(item => (
                        <div key={item.id} className="col-md-3">
                            <div className="card border-0">
                                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p className="card-text"><b>${item.precio}</b></p>
                                    <a href="#" className="btn bg-dark text-white" onClick={() => {agregarProducto(item.id)}}>Agregar 🛒</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Productos;