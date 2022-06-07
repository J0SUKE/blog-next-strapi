import styles from './Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <h1>Bienvenu sur mon blog !</h1>
        </div>
        <div className={styles.hero__right}>
          <p>Salut moi c'est Jean ! développeur Web Front-End . Sur ce blog je vais poster des articles en lien avec le développement web (et peut-être d'autres sujets) , le but est surtout de m'exercer sur des technos comme Strapi et NextJS donc je me suis dit que ça pourrait être instructif de créer un blog !</p>
          <button className={styles.exploreBtn}><Link href={'/articles'}><a>Explorer</a></Link></button>
        </div>
        
      </div>
    </main>
  )
}
