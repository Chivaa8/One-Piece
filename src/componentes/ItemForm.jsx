import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TemaContext } from "../contextos/TemaContext";

const ItemForm = () => {
    const { post, get } = useContext(TemaContext);
    const navegar = useNavigate();

    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        descripcion: "",
        tripulacion: "",
        recompensa: "",
        imagen: "shanks.jpg",
        rol: "Pirata",
        recompensaActiva: "No",
        cartelWanted: false,
        reservado: false,
    });

    const opcionesImagenes = [
        "ace.jpg", "almirante.jpg", "buggy.jpg", "chopper.jpg",
        "ciego.jpg", "dragon.jpg", "kaido.jpg", "karas.jpg", "Katakuri.jpg",
        "kizaru.jpg", "law.jpg", "luffy.jpg", "roger.jpg", "sabo.jpg",
        "sanji.jpg", "shanks.jpg", "teach.jpg", "zoro.jpg", "akainu.jpg"
    ];

    const cambiarCampo = (event) => {
        const nombreCampo = event.target.name;
        const valorCampo = event.target.value;
        setDatosFormulario({ ...datosFormulario, [nombreCampo]: valorCampo });
    };

    const cambiarRecompensaActiva = (event) => {
        const valorSeleccionado = event.target.value;
        setDatosFormulario({ ...datosFormulario, recompensaActiva: valorSeleccionado });
    };

    const cambiarCartelWanted = (event) => {
        const estaMarcado = event.target.checked;
        setDatosFormulario({ ...datosFormulario, cartelWanted: estaMarcado });
    };

    const enviarFormulario = (event) => {
        event.preventDefault();
        const nuevoPersonaje = {
           // id: personajes.length + 1, esta línia ya no hace falta porque json-server pone los ID automaticamente 
            ...datosFormulario,
            reservado: false
        };
        post(nuevoPersonaje); // usamos la nueva funcion
        get();
        navegar("/catalogo");

    };

    return (
        <div className="form-container">
            <h2>➕ Agregar Nuevo Personaje</h2>
            <form onSubmit={enviarFormulario}>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={datosFormulario.nombre} onChange={cambiarCampo} required />

                <label>Descripción:</label>
                <textarea name="descripcion" value={datosFormulario.descripcion} onChange={cambiarCampo} required />

                <label>Tripulación:</label>
                <input type="text" name="tripulacion" value={datosFormulario.tripulacion} onChange={cambiarCampo} required />

                <label>Recompensa (Berries):</label>
                <input type="number" name="recompensa" value={datosFormulario.recompensa} onChange={cambiarCampo} required />

                <label>Selecciona una imagen:</label>
                <select name="imagen" value={datosFormulario.imagen} onChange={cambiarCampo}>
                    {opcionesImagenes.map((img) => {
                        const nombreSinExtension = img.replace(".jpg", "");
                        const primeraLetraMayus = nombreSinExtension.charAt(0).toUpperCase();
                        const restoDelNombre = nombreSinExtension.slice(1);
                        const nombreFinal = primeraLetraMayus + restoDelNombre;

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

                <button type="submit">💾 Guardar Personaje</button>
            </form>
        </div>
    );
};

export default ItemForm;