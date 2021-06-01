import React, { useState } from 'react';
import styles from './Navbar.module.scss'


const Navbar = () => {
    let sections = ['Home', 'About', 'Skills', 'Experience', 'Contact', 'Portfolio']
    , redes = [
        {name: 'Li.', link: 'https://www.linkedin.com/in/franciscotov/'}, 
        {name: 'Git.', link: 'https://github.com/franciscotov'}
    ];

    const [active, setActive] = useState(false);

    const eventHandler = (e, index) => {
        e.preventDefault();
        //setActive(index);
        active? setActive(false):setActive(true); 
    }
    return (
        <div className={styles.nav}>
            <div className={styles.containerName}><p>Francisco Tovar</p></div>
            <div className={styles.containerAcor}>
                <button
                    onClick={(e) => eventHandler(e)}
                    className={active ? 'active' : 'inactive'}
                    aria-expanded={active ? 'true' : 'false'}
                    // aria-controls={'sect-' + indexCount(index)}
                    aria-disabled={active? 'true' : 'false'}
                    // tabIndex={indexCount(index)}
                >
                    <span className={styles.titlewrapper}>
                        <span className={active ? styles.plus : styles.minus}></span>
                    </span>
                </button>
                {/* <div className={active ? styles.open: styles.close} className={styles.socialMenu}> */}
                <div  className={active ? styles.open: styles.close}>
                    {redes.map((ele,i) =>{
                        return <div className={styles.red}><a href={ele.link} target='_blank' rel="noreferrer">{ele.name}</a></div>
                    })}
                </div>
                <div className={styles.menuHolder}>
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