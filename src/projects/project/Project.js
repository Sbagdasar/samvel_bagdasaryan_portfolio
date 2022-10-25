import React from 'react';
import styles from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.bgImage} style={{backgroundImage:`url(${props.bgUrl}`}}>
                <a href={props.btnUrl} className={styles.watchBtn}>Watch</a>
            </div>
            <h3>{props.title}</h3>
            <span>{props.text}</span>
        </div>
    );
};
