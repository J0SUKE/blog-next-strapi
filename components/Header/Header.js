import React from 'react'
import styles from './Header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header >
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <Link href={'/'}><a>Le blog de Jean</a></Link>
            </h1>
            <div>
                <ul>
                    <li><Link href={'/articles'}>Articles</Link></li>
                    <li><Link href={'/about/'}>About</Link></li>
                </ul>
            </div>
        </header>
    </header>
  )
}
