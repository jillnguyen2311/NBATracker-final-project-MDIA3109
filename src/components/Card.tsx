import styles from '@/styles/Card.module.css'

export default function Card() {
    return (
        <div className={styles.Card}>
            <div className={styles.odds}>
                <div ></div>
                <div className={styles.t1}>ODD's</div>
                <div></div>
            </div>

            <div className={styles.teamLogo}>
                <div></div>
                <div className={styles.t1}>V.S</div>
                <div></div>
            </div>

            <div className={styles.teamNames}>
                <div className={styles.t2}>TOR</div>
                <div></div>
                <div className={styles.t2}>DA</div>
            </div>
        </div>
    )
}