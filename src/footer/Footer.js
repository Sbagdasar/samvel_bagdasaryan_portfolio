import React from 'react';
import styles from './Footer.module.css'
import commonContainer from "../common/styles/CommonContainer.module.css";

export const Footer = () => {
    return (
        <div className={`${styles.footerBlock} ${commonContainer.itemContainer}`}>
            <div className={`${commonContainer.container} ${styles.footerContainer}`}>
                <h2 className="title">Samvel Bagdasaryan</h2>
                <div className={styles.socNetworkBtns}>
                    <a href={''} className={styles.socNetworkBtnItem}></a>
                    <a href={''} className={styles.socNetworkBtnItem}></a>
                    <a href={''} className={styles.socNetworkBtnItem}></a>
                    <a href={''} className={styles.socNetworkBtnItem}></a>
                </div>
                <h3>&#169;2022 All rights reserved</h3>
            </div>
        </div>
    );
};
