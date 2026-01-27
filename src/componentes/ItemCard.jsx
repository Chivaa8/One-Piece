import { Link } from "react-router-dom";

const ItemCard = ({ personaje }) => {
  return (
    <div className="item-card">
      <h3>🏴‍☠️ {personaje.nombre} 🏴‍☠️</h3>
      <p><strong>{personaje.descripcion}</strong></p>
      <p> Recompensa: {personaje.recompensa} Berries💰</p>
      <Link to={"/personajes/" + personaje.id} className="ver-mas">⚔️ Ver más</Link>
    </div>
  );
};


export default ItemCard;

