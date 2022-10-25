import React from 'react';
import styles from './Remote.module.css'
import commonContainer from "../common/styles/CommonContainer.module.css";

export const Remote = () => {
    return (
        <div className={`${styles.remote} ${commonContainer.itemContainer}`}>
            <div className={`${commonContainer.container} ${styles.remoteContainer}`}>
                <h2 className={styles.title}>Considering options for remote work</h2>
                <a href="" className={styles.hireBtn}>Hire me</a>
            </div>
        </div>
    );
};
