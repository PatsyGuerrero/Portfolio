import React from 'react';
import styles from './Portfolio.module.scss';
import data from '../projects.json';



const Portfolio = () => {

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
                        <button> <a href={e.deploy} target="_blank" rel="noreferrer">DEMO </a> </button>
                        <button className={styles.repo}> <a href={e.github} target="_blank" rel="noreferrer">REPOSITORIO </a></button>
                    </div>
               </div>
              
                   {/* <img src={require(`./${e.img}`).default}  alt="no se encuentra"  /> */}

                   {/* {typeof `e.img` } */}
                { e.img !== ""?
                     <div className={styles.imagen}>
                    <img src={require(`../assets/img/${e.img}`).default}  alt="no se encuentra"  />
                    </div>: <div className={styles.imagen}>
                        <video controls>
                            <source src={require('../assets/img/codebakery_ecommerce.mp4').default} type="video/mp4"/>
                        </video>
                    
                    </div>
                
                
                    // <video width="100%" height="auto" controls >
                    //     <source src={e.video} type="video/mp4"/>
                    // </video>
                
                }
    
               
           </div>
           
           ))
           }
            
        </section>
    );
};

export default Portfolio;