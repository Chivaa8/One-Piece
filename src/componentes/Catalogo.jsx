import { useContext, useEffect } from "react";
import { TemaContext } from "../contextos/TemaContext";
import ItemCard from "./ItemCard";

const Catalogo = () => {
  const { personajes, get } = useContext(TemaContext);

  //  personajes del servidor al cargar el componente
  useEffect(() => {
    get();
  }, []);

  return (
    <div className="container">
      <h1>Catálogo 📜</h1>
      
      <div className="catalog-grid">
        {personajes.length > 0 ? (
          personajes.map((personaje) => (
            <ItemCard key={personaje.id} personaje={personaje} />
          ))
        ) : (
          <p>No hay personajes disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
