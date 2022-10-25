import React from 'react';
import styles from './Contacts.module.css'
import commonContainer from "../common/styles/CommonContainer.module.css";
export const Contacts = () => {
    return (
        <div className={`${styles.contacts} ${commonContainer.itemContainer}`}>
            <div className={`${commonContainer.container} ${styles.remoteContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form action="" className={styles.formStyle}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <a href="" className={styles.sendBtn}>Send</a>
            </div>
        </div>
    );
};
