import React from 'react';

const Events = () => {
    const handleGreetings = (name) => {
        alert(`Olá ${name}`);
    };

    return (
        <>
            <button onClick={() => alert('clicado')}>Alert</button>
            <button onClick={() => handleGreetings('João')}>
                Alert chamado da função
            </button>
        </>
    );
};

export default Events;
