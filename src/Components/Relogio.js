import { useState, useEffect } from 'react';

function Relogio() {
    const [horario, setHorario] = useState('');

    useEffect(() => {
        function getHorario(){
            setHorario(new Date().toLocaleTimeString());
        }
        const intervalo = setInterval(getHorario, 1000);
    
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div>
            <h1>{horario}</h1>
        </div>
    );
}

export default Relogio;