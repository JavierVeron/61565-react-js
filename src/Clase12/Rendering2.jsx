const TextComponent1 = ({condicion}) => {
    return (
        <h2 style={{color:condicion ? "green" : "red"}} >Curso de React JS</h2>
    )
}

const TextComponent2 = ({condicion, condicion2}) => {
    return (
        <h2 className={condicion ? "text-success" : condicion2 ? "text-warning" : "text-danger"}>Curso de React JS</h2>
    )
}

const TextComponent3 = ({colorTexto, colorFondo}) => {
    return (
        <h2 className={`${colorTexto ? "text-success" : "text-danger"} ${colorFondo} p-3`}>Curso de React JS</h2>
    )
}

const Rendering2 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <TextComponent1 condicion={false} /> */}
                    {/* <TextComponent2 condicion={false} condicion2={false} /> */}
                    <TextComponent3 colorTexto={false} colorFondo={"bg-light"} />
                </div>
            </div>
        </div>
    )
}

export default Rendering2;