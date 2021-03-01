import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/62268811?s=460&u=6bb167b41479787fe8718d7e5e1b9f4b892ba3c7&v=4" alt="Caio Lima"/>

            <div>
                <strong>Caio Lima</strong>
                <p>
                    <img src="icons/level.svg" alt="level icon"/>
                    Level {level} 
                </p>
            </div>
        </div>
    )
}