import React from 'react';
import styles from './Portfolio.module.scss';
import data from '../projects.json';
import logo from '../assets/img/dribble.jpg'; 



const Portfolio = () => {

    let url='../assets/img/dribble.jpg';

    return (
        <section className={styles.container}>
           <div className={styles.elements}>
                <h1>Portfolio</h1>
                <div className={styles.line}></div>
           </div>
           { data.map((e, key) => (
           <div key={key} className={styles.cart}>
               <div className={styles.info}>
                   <div className={styles.texto}>
                        <h2>{e.name}</h2>
                        <span>{e.description}</span>
                    </div>
                    <div className={styles.botones}>
                        <button> DEMO </button>
                        <button className={styles.repo}> REPOSITORIO </button>
                    </div>
               </div>
               <div className={styles.imagen}>
                   {/* <img src={require(`./${e.img}`).default}  alt="no se encuentra"  /> */}

                   {/* {typeof `e.img` } */}
                   
                   <img src={require(url).default}  alt="no se encuentra"  />
                   
               </div>
           </div>
           
           ))
           }
            
        </section>
    );
};

export default Portfolio;