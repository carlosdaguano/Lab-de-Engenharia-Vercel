import React from "react";
import './css/atividades.css';
import { Link, Outlet } from "react-router-dom";

const Atividade2 = () => {
    return (
        <div className="atividade">
            <div className="opcoes">
                <Link to="/atividade2/contador" className="exercicio">Contador</Link><br/><br/>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </div>
    );
}

export default Atividade2;