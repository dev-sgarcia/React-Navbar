import "./navbar.css";

function Navbar() {
    return (
        //  Se asigna el nombre del componente a la etiqueta
        <navbar className="navbar">
            <h2>
                <strong>Jazmín Florería</strong>
            </h2>
            
            <ul id="lista">
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>


        </navbar>
    )
}

export default Navbar;