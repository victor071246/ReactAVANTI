import React from 'react';

import styles from './MyCSSComponent.module.css';

const MyCSSComponent = () => {
    const cssInline = {
        color: '#F00',
        fontSize: '20px',
        backgroundColor: '#000',
    };

    return (
        <>
            <h1 className={styles.title}>Meu título</h1>
            <p style={cssInline}>Meu Parágrafo</p>
        </>
    );
};

export default MyCSSComponent;
