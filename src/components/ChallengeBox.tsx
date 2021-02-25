import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const hasActiveChallenge = true;

    return(

        <div className={styles.challengeBoxContainer}>

            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    
                    <header>Ganhe 400px</header>
                    
                    <main>
                        <img src="icons/body.svg" alt="Body icon"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça 100 flexões!</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>Falhei :(</button>

                        <button type="button" className={styles.challengeSucceededButton}>Completei :)</button>
                    </footer>

                </div>
            ) : (
                <div className={styles.challengeNotActive}>

                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>

                </div>) }

        </div>
    )
}