import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    const { pathname } = useRouter();
    return (
        <header className={styles.header}>
            <Link href='/' className={pathname === '/' ? styles.active : ''}>Home</Link>
            <Link href='/about' className={pathname === '/about' ? styles.active : ''}>About</Link>
        </header>
    )
};

export default Header;