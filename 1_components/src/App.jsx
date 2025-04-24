import React from 'react';
import './App.css';
import TextComponent from './components/TextComponent';
import { SecondText, ThirdText } from './components/OtherComponents';
import Counter from './components/Counter';
import ProductQuantity from './components/ProductQuantity';
import GithubUser from './components/GithubUser';
import Events from './components/Events';
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent';

function App() {
    return (
        <>
            <h2>Meu Componente CSS</h2>
            <MyCSSComponent />

            <h2>Eventos</h2>
            <Events />

            {/* contador */}
            <h1>Contador</h1>
            <Counter />
            <hr></hr>

            {/* controle de quantidade do produto */}
            <h2>Controle de quantidade do produto</h2>
            <ProductQuantity />
            <hr></hr>

            {/* github user */}
            <h2>Usuário do GitHub</h2>

            <GithubUser />

            <TextComponent
                text="Meu Primeiro Texto"
                descricao="Descricao do primeiro texto"
            />
            <TextComponent
                text="Meu Segundo Texto"
                descricao="Descricao do segundo texto"
            />
            <TextComponent
                text="Meu Terceiro Texto"
                descricao="Descricao do terceiro texto"
            />
            <SecondText />
            <ThirdText />
        </>
    );
}

export default App;
