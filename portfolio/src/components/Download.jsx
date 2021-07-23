import React from 'react';
import styles from './Download.module.scss';

const Download = () => {
    return (
        <div className={styles.containerDownload}>
            <a require href={require(`./PATSY_GUERRERO.pdf`).default} download  >Download CV</a>
        </div>
    );
};

export default Download;