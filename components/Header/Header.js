import React from 'react'
import styles from './Header.module.scss';
import Link from 'next/dist/client/link';

export default function Header({scrollbarWidth}) {
  return (
    <header>
        <div className={styles.header} style={{width: `calc(100% - ${scrollbarWidth}px)`}}>
            <Link href={'/'}>
              <div className={styles.logo}>
                  <img src="/images/brackets-curly.svg" alt="" />
                  <p>Le blog de Jean</p>
              </div>
            </Link>
            <ul>
              <li>
                <a href="">My page</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
        </div>
    </header>
  )
}
