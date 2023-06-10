import React from "react";
import './css/navegation.css'
import { Link } from "react-router-dom";

const Navegation = () => {
    return (
        <div className="navegation">
            <div className="logo"><span className="logo-text">Lab. Engenharia</span></div>
            <div className="menu">
                <Link to="/" className="items-menu">Home</Link>
                <Link to="/atividade1" className="items-menu">Atividade 1</Link>
                <Link to="/atividade2" className="items-menu">Atividade 2</Link>
                <Link to="/atividade3" className="items-menu">Atividade 3</Link>
                <Link to="/atividade4" className="items-menu">Atividade 4</Link>
                <Link to="/atividade5" className="items-menu">Atividade 5</Link>
                <Link to="/atividade6" className="items-menu">Atividade 6</Link>
            </div>
            <div className="contact">
                <a href="https://github.com/carlosdaguano/Lab-de-Engenharia-Vercel">GitHub</a>
            </div>
        </div>
    );
}

export default Navegation