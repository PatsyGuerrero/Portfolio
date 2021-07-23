import React from 'react';
import Download from './Download';
import styles from './Photo.module.scss';
import img from "../assets/img/patsy.jpg";

const Photo = ({ state }) => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <img src={img} alt="" className={styles.photo}  width="25vw" height="40vw"/>
                    <Download state={state} />
            </div>
        </div>
        </>
    );
};

export default Photo;