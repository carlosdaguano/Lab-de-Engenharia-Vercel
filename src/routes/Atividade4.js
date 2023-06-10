import React from "react";
import './css/atividades.css';
import { Link, Outlet } from "react-router-dom";

const Atividade4 = () => {
    return (
        <div className="atividade">
            <div className="opcoes">
                <Link to="/atividade4/toolbar" className="exercicio">Toolbar</Link><br/><br/>
                <Link to="/atividade4/gallery2" className="exercicio">Gallery</Link><br/><br/>
                <Link to="/atividade4/counter" className="exercicio">Counter</Link><br/><br/>
                <Link to="/atividade4/form1" className="exercicio">Form1</Link><br/><br/>
                <Link to="/atividade4/movingDot" className="exercicio">MovingDot</Link><br/><br/>
                <Link to="/atividade4/form2" className="exercicio">Form2</Link><br/><br/>
                <Link to="/atividade4/form3" className="exercicio">Form3</Link><br/><br/>
                <Link to="/atividade4/list1" className="exercicio">List1</Link><br/><br/>
                <Link to="/atividade4/list2" className="exercicio">List2</Link><br/><br/>
                <Link to="/atividade4/shapeEditor" className="exercicio">ShapeEditor</Link><br/><br/>
                <Link to="/atividade4/counterList" className="exercicio">CounterList</Link><br/><br/>
                <Link to="/atividade4/list3" className="exercicio">List3</Link><br/><br/>
                <Link to="/atividade4/list4" className="exercicio">List4</Link><br/><br/>
                <Link to="/atividade4/bucketList" className="exercicio">BucketList</Link><br/><br/>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </div>
    );
}

export default Atividade4;