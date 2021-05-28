import React from 'react';
import styles from './Home.module.scss';
import Photo from './Photo.jsx';

const Home = () => {
    return (
      <section className={styles.container}>
        <Photo/>
        <div className={styles.containerGrap}>
          <div className={styles.containerTitle}> 
            <h1>
              Hello
              <br/>
              I am Patsy
              <br/>
              Guerrero
            </h1>
          </div>
          <div className={styles.containerDescription}>
            <span>
              A Fullstack Developer Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Saepe ex cum similique vitae magni voluptatum
              sapiente quia iste, cumque sed eligendi nostrum blanditiis natus
              quae delectus! Voluptate nulla odio autem!
            </span>
          </div>
        </div>
      </section>
    );
};

export default Home;