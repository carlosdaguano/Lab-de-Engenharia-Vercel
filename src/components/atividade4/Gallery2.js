import React from "react";
import { sculptureList } from "./data/data";
import { useState } from "react";

const Gallery2 = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    
    function handleNextClick(){
        setIndex(index + 1);
    }
    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return(
        <div>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
            {showMore && <p>{sculpture.description}</p>}
            <br/>
            <img
                src={sculpture.url}
                alt={sculpture.alt}    
            />
            <p>{sculpture.description}</p>
        </div>
    );
}

export default Gallery2;