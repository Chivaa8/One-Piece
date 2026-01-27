import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>🏴‍☠️ ¡Bienvenido a la Aventura de One Piece! 🏴‍☠️</h1>
            <p>
                Explora los personajes más emblemáticos del universo de One Piece.  
                Descubre sus historias, tripulaciones y recompensas.  
            </p>

            <p>
                ¡Imagina que solo puedes escoger 5 cartas para formar el equipo más poderoso!  
                Escoge sabiamente entre piratas, marines y revolucionarios,  
                y crea la tripulación definitiva para conquistar los mares. 🌊⚔️  
            </p>

            <Link to="/catalogo" className="explore-btn">📜 Ver Catálogo</Link>
        </div>
    );
};

export default Home;
