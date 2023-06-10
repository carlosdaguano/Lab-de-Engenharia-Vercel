import React from "react";
import './css/atividades.css';
import { Link, Outlet } from "react-router-dom";

const Atividade3 = () => {
    return (
        <div className="atividade">
            <div className="opcoes">
                <Link to="/atividade3/gallery1" className="exercicio">Gallery</Link><br/><br/>
                <Link to="/atividade3/todoList" className="exercicio">TodoList</Link>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </div>
    );
}

export default Atividade3;