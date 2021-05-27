import React from 'react';
import Download from './Download';
import styles from './Photo.module.scss'; 

const Photo = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <div className={styles.photo}>Photo</div>
            </div>
            <Download className={styles.download}/>
        </div>
        </>
    );
};

export default Photo;