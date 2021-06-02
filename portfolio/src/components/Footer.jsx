import React from 'react';
import styles from './Footer.module.scss';
import {GrLinkedinOption} from 'react-icons/gr';
import {FaGithub, FaFreeCodeCamp} from 'react-icons/fa'

const Footer = () => {
    
        return (
            <section className={styles.container}>
                <div className={styles.elements}>
                    <div className={styles.icon}>
                        <GrLinkedinOption className={styles.size}/>
                    </div>
                    <div className={styles.icon}>
                        <FaGithub className={styles.size}/>
                    </div>
                    <div className={styles.icon}>
                        <FaFreeCodeCamp className={styles.size}/>
                    </div>
                </div>
            </section>
        );
    };



export default Footer;