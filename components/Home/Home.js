import Header from '../Header/Header';
import styles from './Home.module.scss';
import Link from 'next/link';

import Typewriter from 'typewriter-effect';


export default function Home() {
  

  return (
    <>
        <>
            <div className={styles.hero}>
                <img src="/images/bg.jpg" alt="" />    
                  <blockquote>
                    <Typewriter
                        onInit={(typewriter) => {
                          typewriter.typeString('<p>“It is never too late to be what you might have been.”</p>')
                            .start();
                        }}

                        options={
                          {
                            cursor:null,
                            delay:60
                          }
                        }
                      />
                  </blockquote>
            </div>
            <section className={styles.content}>
                <div className={styles.presesntation}>
                  <div className={styles.presesntation__img}>
                    <img src="https://jean-mazouni-portfolio-2022.s3.eu-west-3.amazonaws.com/presentation_6d4e8dbb3f.png" alt="" />
                  </div>
                  <div className={styles.presesntation__text}>
                    <h2>Salut !</h2>
                    <p>
                      Moi c'est Jean , Un developpeur freelance de 21 ans basé à Lyon, passioné par les technologies du web et particulierement les technos orientées Front-End , j'ai crée ce blog dans le but de parteger mes connaissances et mes projets !
                      
                    </p>
                    <button>
                      <Link href='/blog'>
                        <a>Explore</a>
                      </Link>
                    </button>
                  </div>
                </div>
            </section>
        </>
    </>
    
  )
}
