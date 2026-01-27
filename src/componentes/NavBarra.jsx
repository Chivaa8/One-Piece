import { Link, useLocation } from "react-router-dom";

const NavBarra = () => {
    const ubicacionActual = useLocation();

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img
                    src="https://ih1.redbubble.net/image.1555353370.3952/st,small,507x507-pad,600x600,f8f8f8.jpg"
                    alt="logo bandera"
                    className="logo"
                />
            </div>

            <ul className="nav-links">
                <li><Link to="/">🏴 Inicio</Link></li>
                <li><Link to="/catalogo">📜 Catálogo</Link></li>
                <li><Link to="/about">☠️ Sobre Nosotros</Link></li>
            </ul>

            {ubicacionActual.pathname === "/catalogo" && (
                <Link to="/add" className="floating-btn">➕</Link>
            )}
        </nav>
    );
};

export default NavBarra;
