import { React, createContext, useContext, useState } from "react"

// Sin Contexto
/* const Componente1 = ({modoOscuro}) => {
    return (
        <Componente2 modoOscuro={modoOscuro} />
    )
}

const Componente2 = ({modoOscuro}) => {
    return (
        <>
            <p>Es Modo Oscuro? <b>{modoOscuro ? "Sí" : "No"}</b></p>
        </>
    )
} */

// Con Contexto
const ThemeContext = createContext();

const Componente1 = () => {
    return (
        <Componente2 />
    )
}

const Componente2 = () => {
    const {modoOscuro} = useContext(ThemeContext);

    return (
        <>
            <p>Es Modo Oscuro? <b>{modoOscuro ? "Sí" : "No"}</b></p>
        </>
    )
}

const Componente3 = () => {
    const {modoOscuro, saludar} = useContext(ThemeContext);

    return (
        <>
            <p>Es Modo Oscuro? (Comp3) <b>{modoOscuro ? "Sí" : "No"}</b></p>
            <p><button className="btn btn-primary" onClick={saludar}>Saludar</button></p>
        </>
    )
}

const Contexto = () => {
    const [modoOscuro, setModoOscuro] = useState(true);
    const saludar = () => {
        alert("Hola Mundo!");
    }

    {/* <div className="container">
        <div className="row">
            <div className="col">
                <h1>Contexto</h1>
                <Componente1 modoOscuro={modoOscuro} />
            </div>
        </div>
    </div> */}
    return (
        <>
            <ThemeContext.Provider value={{modoOscuro, saludar}}>
                <Componente1 />
                <Componente3 />
            </ThemeContext.Provider>
        </>
    )
    
}

export default Contexto;