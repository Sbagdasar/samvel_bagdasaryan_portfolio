import React from 'react';
import styles from './Main.module.css'
import commonContainer from '../common/styles/CommonContainer.module.css'

export const Main = () => {
    return (
        <div className={`${styles.mainBlock} ${commonContainer.itemContainer}`}>
            <div className={commonContainer.container}>
                <div className={styles.description}>
                    <span>Hi  there</span>
                    <h1> I am Samvel Bagdasaryan</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};
