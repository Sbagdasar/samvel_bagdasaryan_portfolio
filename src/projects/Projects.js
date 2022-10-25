import React from 'react';
import styles from './Projects.module.css'
import commonContainer from "../common/styles/CommonContainer.module.css";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={`${styles.projects} ${commonContainer.itemContainer}`}>
            <div className={`${commonContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projectItems}>
                    <Project title={'Counter'}
                             text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at error exercitationem maxime nulla, quas sit? Accusantium animi autem deleniti eos itaque nesciunt, quo repellat rerum ullam. Excepturi, hic impedit?"}
                            bgUrl={''}
                             btnUrl={''}
                    />
                    <Project title={'Social network'}
                             text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at error exercitationem maxime nulla, quas sit? Accusantium animi autem deleniti eos itaque nesciunt, quo repellat rerum ullam. Excepturi, hic impedit?"}
                            bgUrl={''}
                             btnUrl={''}
                    />
                </div>
            </div>
        </div>
    );
};
