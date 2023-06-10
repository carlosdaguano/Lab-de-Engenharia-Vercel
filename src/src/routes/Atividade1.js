import React from "react";
import './css/atividades.css';
import { Link, Outlet } from "react-router-dom";

const Atividade1 = () => {
    return (
        <div className="atividade">
            <div className="opcoes">
                <Link to="/atividade1/relogio" className="exercicio">Relógio</Link><br/><br/>
                <Link to="/atividade1/letreiro" className="exercicio">Letreiro</Link>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </div>
    );
}

export default Atividade1;