import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TemaContext } from "../contextos/TemaContext";

const EditForm = () => {
    const { id } = useParams();
    const { personajes, setPersonajes } = useContext(TemaContext);
    const navegar = useNavigate();
    const [redirigir, setRedirigir] = useState(false);

    const personaje = personajes.find(p => p.id.toString() === id);

    const [datosFormulario, setDatosFormulario] = useState({
        nombre: personaje?.nombre || "",
        descripcion: personaje?.descripcion || "",
        tripulacion: personaje?.tripulacion || "",
        recompensa: personaje?.recompensa || "",
        imagen: personaje?.imagen || "shanks.jpg",
        rol: personaje?.rol || "Pirata",
        recompensaActiva: personaje?.recompensaActiva || "No",
        cartelWanted: personaje?.cartelWanted || false,
        reservado: personaje?.reservado || false,
    });

    const opcionesImagenes = [
        "ace.jpg", "almirante.jpg", "buggy.jpg", "chopper.jpg",
        "ciego.jpg", "dragon.jpg", "kaido.jpg", "karas.jpg", "Katakuri.jpg",
        "kizaru.jpg", "law.jpg", "luffy.jpg", "roger.jpg", "sabo.jpg",
        "sanji.jpg", "shanks.jpg", "teach.jpg", "zoro.jpg", "akainu.jpg"
    ];

    const cambiarCampo = (event) => {
        const { name, value } = event.target;
        setDatosFormulario(prev => ({ ...prev, [name]: value }));
    };

    const cambiarRecompensaActiva = (event) => {
        setDatosFormulario(prev => ({
            ...prev,
            recompensaActiva: event.target.value
        }));
    };

    const cambiarCartelWanted = (event) => {
        setDatosFormulario(prev => ({
            ...prev,
            cartelWanted: event.target.checked
        }));
    };

    const enviarFormulario = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/data/" + id, {  
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosFormulario),
    })
        .then(res => res.json())
        .then(data => {
            setPersonajes(prev =>
                prev.map(p => p.id === data.id ? data : p)
            );
            setRedirigir(true); 
        })
        .catch(err => console.error("Error al editar:", err));
};


    useEffect(() => {
        if (redirigir) {
            
            const timer = setTimeout(() => {
                navegar("/catalogo");
            }, 100); 
            return () => clearTimeout(timer);
        }
    }, [redirigir, navegar]);

    return (
        <div className="form-container">
            <h2>✏️ Editar Personaje</h2>
            <form onSubmit={enviarFormulario}>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={datosFormulario.nombre} onChange={cambiarCampo} />

                <label>Descripción:</label>
                <textarea name="descripcion" value={datosFormulario.descripcion} onChange={cambiarCampo}></textarea>

                <label>Tripulación:</label>
                <input type="text" name="tripulacion" value={datosFormulario.tripulacion} onChange={cambiarCampo} />

                <label>Recompensa (Berries):</label>
                <input type="number" name="recompensa" value={datosFormulario.recompensa} onChange={cambiarCampo} />

                <label>Selecciona una imagen:</label>
                <select name="imagen" value={datosFormulario.imagen} onChange={cambiarCampo}>
                    {opcionesImagenes.map((img) => {
                        const nombreSinExtension = img.replace(".jpg", "");
                        const nombreFinal = nombreSinExtension.charAt(0).toUpperCase() + nombreSinExtension.slice(1);
                        return (
                            <option key={img} value={img}>
                                {nombreFinal}
                            </option>
                        );
                    })}
                </select>

                <label>Rol:</label>
                <select name="rol" value={datosFormulario.rol} onChange={cambiarCampo}>
                    <option value="Pirata">🏴‍☠️ Pirata</option>
                    <option value="Marine">⚓ Marine</option>
                    <option value="Revolucionario">🔥 Revolucionario</option>
                </select>

                <label>¿Sigue con recompensa activa?</label>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="recompensaActiva"
                            value="Sí"
                            checked={datosFormulario.recompensaActiva === "Sí"}
                            onChange={cambiarRecompensaActiva}
                        />
                        ✅ Sí
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="recompensaActiva"
                            value="No"
                            checked={datosFormulario.recompensaActiva === "No"}
                            onChange={cambiarRecompensaActiva}
                        />
                        ❌ No
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        name="cartelWanted"
                        checked={datosFormulario.cartelWanted}
                        onChange={cambiarCartelWanted}
                    />
                    <label>🚨 Tiene cartel de "WANTED"</label>
                </div>

                <button type="submit">💾 Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditForm;