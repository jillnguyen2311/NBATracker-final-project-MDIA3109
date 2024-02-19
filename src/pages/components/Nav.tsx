import styles from '../../styles/Nav.module.css'
import Image from 'next/image'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.NavContent}>
                <Image src="/images/OddBall.png" alt="logo" width={150} height={150} />
                <a href="#">Player Odds</a>
                <a href="#">Live Games</a>
                <a href="#">Latest News</a>
                <a href="#">Player Stats</a>
                <a href="#">Season Stats</a>
            </div>
        </nav>
    )
}

