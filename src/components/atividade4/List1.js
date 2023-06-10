import React from "react";
import { useState } from "react";

let nextId = 0;

const List1 = () => {
    const [name, setName] = useState('');
    const [artists] = useState([]);

    function handleAddClick() {
        setTimeout(() => {
            artists.push({
                id: nextId++,
                name: name
            })
        })
    }

    return (
        <div>
            <h1>Inspiring Sculptors</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleAddClick}>Add</button>
            <ul>
                {artists.map(artists => (
                    <li key={artists.id}>{artists.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default List1;