import styles from '@/styles/Nav.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Nav() {

    const [isMenuActive, setIsMenuActive] = useState(false);

    useEffect(() => {
        const hamburger = document.querySelector(`.${styles.hamburger}`);
        const navMenu = document.querySelector(`.${styles.navmenu}`);
        const navLink = document.querySelectorAll(`.${styles.navlink}`);

        const mobileMenu = () => {
            setIsMenuActive(!isMenuActive);
        };

        const closeMenu = () => {
            setIsMenuActive(false);
        };

        hamburger!.addEventListener("click", mobileMenu);
        navLink.forEach((n) => n.addEventListener("click", closeMenu));

        return () => {
            hamburger!.removeEventListener("click", mobileMenu);
            navLink.forEach((n) => n.removeEventListener("click", closeMenu));
        };
    }, [isMenuActive]);

    return (
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                <div className='bg-[#FBFFF4] flex flex-row w-full p-5'>
                    <a href="/home">
                        <Image className={styles.space} src="/images/OddBall.png" alt="logo" width={150} height={150} />
                    </a>
                    <div className='absolute right-5 mb-5 max-[435px]:pt-1'>
                    <ul className='flex flex-row right-0'>
                        <li className={styles.signup}>
                            <a href="/sign-up" className={styles.navlink2}>Sign Up</a>
                        </li>
                        <li className={styles.premium}>
                            <a href="" >Premium</a>
                        </li>
                    </ul>
                    </div>                    
                </div>
                <div className='mt-4 '>
                    <ul className={`${styles.navmenu} ${isMenuActive ? styles.active : ''}`}>
                        <li className={styles.navitem}>
                            <a href="/live-games" className={styles.navlink}>Live Games</a>
                        </li>
                        <li className={styles.navitem}>
                            <a href="/news" className={styles.navlink}>Latest News</a>
                        </li>
                        <li className={styles.navitem}>
                            <a href="/season-stats" className={styles.navlink}>Season Stats</a>
                        </li>
                        <li className={styles.navitem}>
                            <a href="/about" className={styles.navlink}>About</a>
                        </li>
                    </ul>
                    <div className={`${styles.hamburger} ${isMenuActive ? styles.active : ''}`}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

