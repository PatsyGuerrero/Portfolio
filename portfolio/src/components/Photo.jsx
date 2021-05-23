import React from 'react';
import Download from './Download';
import styles from './Photo.module.scss';

const Photo = () => {
    return (
        <>
        <div className={styles.container}>
            Photo
        </div>
        <Download/>
        </>
    );
};

export default Photo;