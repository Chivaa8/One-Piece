import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TemaProvider } from "./contextos/TemaProvider";
import NavBarra from "./componentes/NavBarra";
import Home from "./componentes/Home";  
import Catalogo from "./componentes/Catalogo";  
import ItemDetail from "./paginas/ItemDetail";
import ItemForm from "./componentes/ItemForm";
import EditForm from "./componentes/EditForm";
import About from "./componentes/About";
import './App.css';

function App() {
    return (
        <Router>
            <TemaProvider>
                <NavBarra />
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/catalogo" element={<Catalogo />} /> 
                    <Route path="/personajes/:id" element={<ItemDetail />} />
                    <Route path="/add" element={<ItemForm />} />
                    <Route path="/edit/:id" element={<EditForm />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </TemaProvider>
        </Router>
    );
}

export default App;
