import React from 'react';
import styles from './Download.module.scss';

const Download = ({ state }) => {
    return (
        <div className={styles.containerDownload}>
            <a href= {state? 'CV_PATSY_GUERRERO.pdf':'CV_PATSY_GUERRERO.pdf'} download>{state ? 'Download CV': 'Descargar CV'}</a>
        </div>
    );
}; 

export default Download;