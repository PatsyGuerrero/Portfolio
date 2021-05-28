import React from 'react';
import styles from './Experience.module.scss';
import Accordeon from './Accordion'
const Experience = () => {
    return (
        <section className={styles.container}>
            
                <div className={styles.iconos}>
                    Iconos
                </div>
                <div className={styles.elements}>
                    <h1>Experience</h1>
                    <div className={styles.line}></div>
                    <div className={styles.acordeon}> 
                        <Accordeon/>
                    </div>
                </div>
        </section>
    );
};

export default Experience;