import React from 'react';
import { useState } from 'react';

function Button({count, onClick}){

    return(
        <button onClick={onClick}>
            Clicado {count} vezes
        </button>
    );
}

function Reset({onClick}){
    return(
        <button onClick={onClick}>
            Reset
        </button>
    )
}



function Contador(){
    const [countTotal, setCountTotal] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    function handleClick1(){
        setCountTotal(countTotal + 1);
        setCount1(count1 + 1);
    }
    
    function handleClick2(){
        setCountTotal(countTotal + 1);
        setCount2(count2 + 1);
    }
    function resetcounts(){
        setCountTotal(0);
        setCount1(0);
        setCount2(0);
    }

    return(
        <div>
            <h2>Contador</h2>
            <p>{countTotal}</p>
            <Button count={count1} onClick={handleClick1}/>
            <Button count={count2} onClick={handleClick2}/>
            <Reset onClick={resetcounts}/>

        </div>
    );
}

export default Contador;