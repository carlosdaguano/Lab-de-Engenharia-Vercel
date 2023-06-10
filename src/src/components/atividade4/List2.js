import React from "react";
import { useState } from "react";

let initialArtistis = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Limidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' }
];

const List2 = () => {
    const [artists, setArtists] = useState(initialArtistis);

    return (
        <div>
            <h1>Inspiring Sculptors:</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}{' '}
                        <button onClick={() => {
                            setArtists(artists.filter((a) => a.id !== artist.id))
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List2;