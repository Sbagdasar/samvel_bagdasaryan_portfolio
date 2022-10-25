import React from 'react';
import styles from './Skills.module.css'
import commonContainer from '../common/styles/CommonContainer.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={`${styles.skillsBlock} ${commonContainer.itemContainer}`}>
            <div className={`${commonContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'} text={"Lorem ipsum dolor sit amet, " +
                        "consectetur adipisicing elit. Aut deserunt dolorem doloremque " +
                        "earum illum incidunt minima officiis. Aliquid corporis cumque " +
                        "earum fugit hic, mollitia numquam officia perspiciatis repellat ut velit."}/>
                    <Skill title={'React'} text={"Lorem ipsum dolor sit amet, " +
                        "consectetur adipisicing elit. Aut deserunt dolorem doloremque " +
                        "earum illum incidunt minima officiis. Aliquid corporis cumque " +
                        "earum fugit hic, mollitia numquam officia perspiciatis repellat ut velit."}/>
                    <Skill title={'Html'} text={"Lorem ipsum dolor sit amet, " +
                        "consectetur adipisicing elit. Aut deserunt dolorem doloremque " +
                        "earum illum incidunt minima officiis. Aliquid corporis cumque " +
                        "earum fugit hic, mollitia numquam officia perspiciatis repellat ut velit."}/>
                </div>
            </div>
        </div>
    );
};

