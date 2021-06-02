import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { GrLinkedinOption } from 'react-icons/gr';
import {FaGithub} from 'react-icons/fa';
import {FaFreeCodeCamp} from 'react-icons/fa'

const icon = (ic) => {
    return () => ic;
}

const Navbar = () => {
    let sections = ['Home', 'About', 'Skills', 'Experience', 'Contact', 'Portfolio']
    , redes = [
        {name: icon(<GrLinkedinOption></GrLinkedinOption>), link: 'https://www.linkedin.com/in/franciscotov/'}, 
        {name: icon(<FaGithub></FaGithub>), link: 'https://github.com/franciscotov'},
        {name: icon(<FaFreeCodeCamp></FaFreeCodeCamp>), link: 'https://www.freecodecamp.org/franciscotov'},
        // {name: 'Free', link: 'https://www.freecodecamp.org/franciscotov'},
        // {name: 'Free', link: 'https://www.freecodecamp.org/franciscotov'}
    ],
    name = 'Francisco Tovar';

    const [active, setActive] = useState(false);

    const eventHandler = (e, index) => {
        e.preventDefault();
        //setActive(index);
        active? setActive(false):setActive(true); 
    }
    return (
        <div className={styles.nav}>
            <div className={styles.containerName}><p>{name}</p></div>
            <div className={styles.containerMenu}>
                <div className={styles.containerButton}>
                    <button
                        onClick={(e) => eventHandler(e)}
                        className={active ? `${styles.active}` : `${styles.inactive}`}
                        aria-expanded={active ? 'true' : 'false'}
                        // aria-controls={'sect-' + indexCount(index)}
                        aria-disabled={active? 'true' : 'false'}
                        // tabIndex={indexCount(index)}
                    >
                        <span className={styles.titlewrapper}>
                            <span className={active ? styles.plus : styles.minus}></span>
                        </span>
                    </button>
                </div>
                {/* <div className={active ? styles.open: styles.close} className={styles.socialMenu}> */}
                {/* <div  className={styles.containerAcor}> */}
                <div className={active ? `${styles.containerAcor} ${styles.open}` : styles.containerAcor}>
                    {redes.map((ele, i) => {
                        return <div className={styles.red}><a className={styles.icon} href={ele.link} target='_blank' rel="noreferrer">{ele.name()}</a></div>
                    })}
                </div>
                <div className={active ? `${styles.menuHolderActive} ${styles.menuHolder}` : `${styles.menuHolder}`}>
                    <nav className={styles.headerMenu}>
                        <ul className={styles.menu1}>
                            {sections.map((ele,i) =>{
                                return <li className={styles.divSection}><a href={`#${ele}`}>{ele}</a></li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;