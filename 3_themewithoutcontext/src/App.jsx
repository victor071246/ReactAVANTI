import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <div className={`app ${theme}`}>
                <Header theme={theme} toggletheme={toggleTheme} />
                <Content theme={theme} />
            </div>
        </>
    );
}

export default App;
