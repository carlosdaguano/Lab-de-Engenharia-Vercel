import React from 'react';

const Button = ({ onClick, children}) => {
    return(
        <button onClick={e =>{
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

const estilo = {
    theme: {
        padding: '5px',
        backgroundColor: 'black',
        color: 'white'
    }
}
const Toolbar = () => {
    return(
        <div className='Toolbar' style={estilo.theme} onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <h1>Toolbar</h1>
            <Button onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading')}>
                Upload Image
            </Button>
        </div>
    );
}

export default Toolbar;