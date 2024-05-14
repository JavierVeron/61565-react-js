import { useEffect, useState } from "react";

const Rendering = ({condicion}) => {
    const [visible, setVisible] = useState(true);

    // Rendering Condicional
    /* useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    }, []); 

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {visible ? <h2 className="text-danger">Curso de JavaScript</h2> : <h3 className="text-success">Curso de React JS</h3>}
                </div>
            </div>
        </div>
    ) */


    // Rendering Condicional #1 (uso de la estructura de control IF)
    /* if (condicion === true) {
        return (
            <h3 className="text-warning bg-black p-3">Condición está en TRUE</h3>
        )
    }

    return (
        <h3 className="text-danger bg-black p-3">Condición está en FALSE</h3>
    ) */


    // Rendering Condicional #2 (uso del operador AND)
    /* return (
        <>
            {condicion && <h3 className="text-warning bg-black p-3">Condición está en TRUE</h3>}
            {!condicion && <h3 className="text-danger bg-black p-3">Condición está en FALSE</h3>}
        </>
    ) */


    // Rendering Condicional #3 (uso del Operador Ternario)
    return (
        <>
            {/* {condicion ? <h3 className="text-warning bg-black p-3">Condición está en TRUE</h3> : <h3 className="text-danger bg-black p-3">Condición está en FALSE</h3>} */}
            {/* {<h3 className="text-warning bg-black p-3">{condicion ? "Condición está en TRUE" : "Condición está en FALSE"}</h3>} */}
            {<h3 className="text-warning bg-black p-3">Condición está en {condicion ? "TRUE" : "FALSE"}</h3>}
        </>
    )



}

export default Rendering;