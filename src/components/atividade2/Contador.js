import React from 'react';
import { useState } from 'react';

function Button({ operation, onClick }) {

    if (operation === "+") {
        return (
            <button onClick={onClick}>+</button>
        );
    } else if (operation === "-") {
        return (
            <button onClick={onClick}>-</button>
        )
    }
}

function Reset({ onClick }) {
    return (
        <button onClick={onClick}>
            Reset
        </button>
    )
}



function Contador() {
    const [countTotal, setCountTotal] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    function handleClick1Add() {
        setCountTotal(countTotal + 1);
        setCount1(count1 + 1);
    }
    function handleClick1Sub() {
        setCountTotal(countTotal - 1);
        setCount1(count1 - 1);
    }

    function handleClick2Add() {
        setCountTotal(countTotal + 1);
        setCount2(count2 + 1);
    }

    function handleClick2Sub() {
        setCountTotal(countTotal - 1);
        setCount2(count2 - 1);
    }
    function resetcounts() {
        setCountTotal(0);
        setCount1(0);
        setCount2(0);
    }

    return (
        <div>
            <h2>Contador</h2>
            <p>{countTotal}</p>
            <div>
                <h1>Valor 1:{count1}</h1>
                <Button operation={"+"} onClick={handleClick1Add} />
                <Button operation={"-"} onClick={handleClick1Sub} />
            </div>
            <div>
                <h1>Valor 2:{count2}</h1>
                <Button operation={"+"} onClick={handleClick2Add} />
                <Button operation={"-"} onClick={handleClick2Sub} />
            </div>


            <Reset onClick={resetcounts} />

        </div>
    );
}

export default Contador;