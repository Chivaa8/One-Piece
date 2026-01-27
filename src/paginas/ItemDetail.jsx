import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TemaContext } from "../contextos/TemaContext";

const ItemDetail = () => {
    const { id } = useParams();
    const { personajes, setPersonajes } = useContext(TemaContext);
    const navegar = useNavigate();

    const [personaje, setPersonaje] = useState(null);
    const [cargando, setCargando] = useState(true);

    // cargar personaje cuando el arrayeste ok
    useEffect(() => {
        if (personajes.length > 0) {
            const encontrado = personajes.find(p => p.id.toString() === id);
            if (encontrado) {
                setPersonaje(encontrado);
            }
            setCargando(false);
        }
    }, [personajes, id]);

    // redirigir si no existe personaje
    useEffect(() => {
        if (!cargando && !personaje) {
            navegar("/catalogo");
        }
    }, [cargando, personaje, navegar]);

    // delete personaje
    const eliminarPersonaje = () => {
        if (personaje.reservado) return;

        fetch("http://localhost:4000/data/" + id, {
            method: "DELETE"
        })
            .then(() => {
                const actualizados = personajes.filter(p => p.id !== personaje.id);
                setPersonajes(actualizados);
                navegar("/catalogo"); // redirección inmediata tras borrar
            })
            .catch(err => console.error("Error al eliminar:", err));
    };

    // editar
    const editarPersonaje = () => {
        navegar("/edit/" + personaje.id);
    };

    // reservar/quitar reserva
    const usarReserva = () => {
        const actualizado = { ...personaje, reservado: !personaje.reservado };

        fetch("http://localhost:4000/data/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(actualizado),
        })
            .then(res => res.json())
            .then(data => {
                const nuevos = personajes.map(p =>
                    p.id === personaje.id ? data : p
                );
                setPersonajes(nuevos);
                setPersonaje(data);
            })
            .catch(err => console.error("Error al actualizar reserva:", err));
    };

    if (cargando) return <p>Cargando personaje...</p>;
    if (!personaje) return null;

    return (
        <div className="detalle-container">
            <h1 className="detalle-titulo">🏴‍☠️ {personaje.nombre} 🏴‍☠️</h1>
            <div className="detalle-content">
                <img src={'/imagenes/' + personaje.imagen} alt={personaje.nombre} className="detalle-img" />
                <div className="detalle-info">
                    <p><strong>Tripulación:</strong> {personaje.tripulacion}</p>
                    <p><strong>Recompensa:</strong> 💰 {personaje.recompensa} Berries</p>
                    <p><strong>Descripción:</strong> {personaje.descripcion}</p>
                    <p><strong>Rol:</strong> {personaje.rol}</p>
                    <p><strong>Recompensa activa:</strong> {personaje.recompensaActiva}</p>
                    <p><strong>Wanted:</strong> {personaje.cartelWanted ? "Sí" : "No"}</p>
                    <p><strong>Reservado:</strong> {personaje.reservado ? "🟡 Sí" : "⚪ No"}</p>
                </div>
            </div>

            <div className="detalle-botones">
                <button
                    className="modificar-btn"
                    onClick={editarPersonaje}
                    disabled={personaje.reservado}
                >
                    ✏️ Modificar
                </button>
                <button
                    className="eliminar-btn"
                    onClick={eliminarPersonaje}
                    disabled={personaje.reservado}
                >
                    🗑️ Eliminar
                </button>
                <button
                    className="reservar-btn"
                    onClick={usarReserva}
                >
                    {personaje.reservado ? "❌ Quitar Reserva" : "🟡 Reservar"}
                </button>
            </div>
        </div>
    );
};

export default ItemDetail;