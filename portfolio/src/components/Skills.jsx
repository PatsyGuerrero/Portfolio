import React from 'react';
import styles from './Skills.module.scss'
const Skills = () => {
    let skills = [{name: 'Web Development', percentage: 60}, {name: 'Electonics', percentage: 70}]
    return (
        <section className={styles.container}>
            <div className={styles.containerGrap}>
                <div className={styles.containerTitle}> 
                    <h2>Skills</h2>
                </div>
                <div className={styles.vl}></div>
                {/* <div className={styles.containerFirstDescription}>
                    <span className={styles.fristDescription}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit. Maiores vel voluptatem debitis. Molestiae, ad earum nam tenetur eum,
                    blanditiis libero quae voluptatem id, laboriosam voluptatum nemo. Error dignissimos 
                    recusandae atque. 
                    </span>
                </div>
                <div className={styles.containerSecondDescription}>
                    <span className={styles.secondDescription}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit. Maiores vel voluptatem debitis. Molestiae, ad earum nam tenetur eum,
                    blanditiis libero quae voluptatem id, laboriosam voluptatum nemo. Error dignissimos 
                    recusandae atque. 
                    </span>
                </div> */}
                <div className={styles.containerSkills}>
                    {skills.map((ele) => {
                        return <div width = '100%' className={styles.containerSkill}>
                            <div className={styles.containerVar}>
                                <span className={styles.skillName}>{ele.name.toLocaleUpperCase()}</span>
                                <div style={{width: `${ele.percentage}%`}} className={styles.skillPercentage}>{ele.name.toLocaleUpperCase()}</div>
                                <div style={{width: `${100 - ele.percentage}%`}} className={styles.line}></div>
                            </div>
                            <span className={styles.percentage}>{`${ele.percentage}%`}</span>
                        </div>
                    })}
                </div>
            </div>
            
        </section>
    );
};

export default Skills;