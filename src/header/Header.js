import React from 'react';
import styles from './Header.module.css'
import {Nav} from "../nav/Nav";
import commonContainer from '../common/styles/CommonContainer.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={commonContainer.container}>
                <Nav/>
            </div>
        </div>
    );
};
