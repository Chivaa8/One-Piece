import { useState } from "react";
import personajesData from "../datos/JSON.json";
import { TemaContext } from "./TemaContext";

export const TemaProvider = ({ children }) => {
    const [personajes, setPersonajes] = useState(personajesData.data);


   const get = () => {
  fetch("http://localhost:4000/data")
    .then((r) => r.json())
    .then((jsonData) => {
      console.log("GET /data:", jsonData);
      setPersonajes(jsonData);
    })
    .catch((e) => console.error("Error get:", e));
};


    const post = (dada) => {
        fetch("http://localhost:4000/data", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dada),
        })
            .then((response) => response.json())
            .then((data) => console.log("Succes: ", data))
            .catch((error) => console.error("Error: ", error))

    };

    const put = (dada, id) => {
        fetch("http://localhost:4000/data/" + id,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dada),
        })
            .then((response) => response.json())
            .then((data) => console.log("Succes: ", data))
            .catch((error) => console.error("Error: ", error));
    }

        const remove = (dada, id) => {
        fetch("http://localhost:4000/data/" + id,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dada),
        })
            .then((response) => response.json())
            .then((data) => console.log("Succes: ", data))
            .catch((error) => console.error("Error: ", error));
    }

    return (
        <TemaContext.Provider value={{ personajes, setPersonajes, get, post, put, remove }}>
            {children}
        </TemaContext.Provider>
    );
};