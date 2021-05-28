import React from 'react';
import Download from './Download';
import styles from './Photo.module.scss';


const Photo = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <div className={styles.photo}>Photoiiiii</div>
            </div>
            <Download />
        </div>
        </>
    );
};

export default Photo;