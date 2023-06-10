import React from "react";
import './css/atividades.css';
import { Link, Outlet } from "react-router-dom";

const Atividade6 = () => {
    return (
        <div className="atividade">
            <div className="opcoes">
                <Link to="/atividade6/calculadora" className="exercicio">Calculadora</Link><br/><br/>
                <Link to="/atividade6/jogoDaMemoria" className="exercicio">JogoDaMemoria</Link><br/><br/>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </div>
    );
}

export default Atividade6;