import React from "react";
import './css/atividades.css';
import { Link, Outlet } from "react-router-dom";

const Atividade5 = () => {
    return (
        <div className="atividade">
            <div className="opcoes">
                <Link to="/atividade5/formQuiz" className="exercicio">FormQuiz</Link><br/><br/>
                <Link to="/atividade5/formTicket" className="exercicio">FormTicket</Link><br/><br/>
                <Link to="/atividade5/accordion" className="exercicio">Accordion</Link><br/><br/>
                <Link to="/atividade5/messeger" className="exercicio">Messeger</Link><br/><br/>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </div>
    );
}

export default Atividade5;