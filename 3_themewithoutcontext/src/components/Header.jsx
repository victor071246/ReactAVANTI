import React from 'react';

const Header = ({ theme, toggletheme }) => {
    return (
        <header>
            <h1>App Theme: {theme}</h1>
            <button onClick={toggletheme}>Toggle Theme</button>
        </header>
    );
};

export default Header;
