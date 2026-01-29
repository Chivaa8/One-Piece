# 🏴‍☠️ One Piece App – Catálogo Interactivo de Personajes (React)

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-6-purple)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-funcional-brightgreen)

---

## 📖 Descripción

Aplicación web **desarrollada con React y Vite** inspirada en el universo de **One Piece**, que permite gestionar un **catálogo interactivo de personajes**.

La aplicación implementa un **CRUD completo** conectado a una API REST simulada mediante **json-server**, permitiendo visualizar, añadir, editar, reservar y eliminar personajes de forma dinámica.

---

## ⚙️ Funcionalidades

- 📜 Visualización del catálogo de personajes
- 🔍 Vista detallada de cada personaje
- ➕ Creación de nuevos personajes
- ✏️ Edición de personajes existentes
- 🗑️ Eliminación de personajes
- 🟡 Sistema de reserva (bloquea edición y borrado)
- 🧭 Navegación con React Router
- 🌍 Gestión de estado global con Context API

---

## 🛠️ Tecnologías utilizadas

- React
- Vite
- React Router
- Context API
- json-server

---

## 🧩 Estructura del proyecto
```

one-piece-react/
│
├── src/
│ ├── componentes/ # Componentes reutilizables
│ ├── paginas/ # Vistas principales (detalle)
│ ├── contextos/ # Context API
│ └── datos/ # Datos locales
│
├── db.json # Base de datos local (json-server)
├── package.json
└── README.md
```

## 🚀 Ejecución

### 1️⃣ Instala los paquetes necesarios:
```bash
npm install

```

### 2️⃣ Ejecutar la aplicación (IMPORTANTE)

Es necesario ejecutar dos procesos en paralelo.

## 🟢 Terminal 1 — Frontend (React)
```
npm run dev
```

📍 Aplicación disponible en:
http://localhost:5173

## 🟣 Terminal 2 — Backend (json-server)
```
npx json-server --watch db.json --port 4000
```


📍 API REST disponible en:
http://localhost:4000/data

### 📡 Endpoints disponibles

GET /data → Obtener todos los personajes

GET /data/:id → Obtener un personaje por ID

POST /data → Crear personaje

PUT /data/:id → Actualizar personaje

DELETE /data/:id → Eliminar personaje

### 🧠 Notas

Los personajes reservados no pueden ser modificados ni eliminados.

Si el backend no está en ejecución, las acciones de creación, edición o borrado no funcionarán.

El uso de json-server es exclusivamente con fines educativos.

### 👤 Autor

Desarrollado por **Oriol Chiva Hidalgo**
### 📧 Contacto: oriolchiva8@gmail.com / oriol.chiva.hidalgo@gmail.com

© 2026 – Proyecto educativo desarrollado con React bajo licencia MIT.
