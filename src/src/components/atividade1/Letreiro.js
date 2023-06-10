import { useState, useEffect } from 'react';

function Letreiro() {
    const [letreiro, setLetreiro] = useState('');
    
    useEffect(() => {
        const mensagem = "Venha Estudar na FATEC!!!";
        let index = 1;
        let subMensagem = "";
        
        setInterval(() => {
            subMensagem = mensagem.substring(0, index);
            index++;
            if(index > mensagem.length + 5)
                index = 1;
            setLetreiro(subMensagem);    
        }, 100);

    }, []);
    
    return (
        <div>
            <h1>Letreiro</h1>
            <h1>{letreiro}</h1>
        </div>
    )
}

export default Letreiro;