import Head from 'next/head'
import Image from 'next/image'
import { Inter, Linden_Hill } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Brief from '../images/Brief.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Brief: AI Summarizer</title>
        <meta name="description" content="Summarize Your Daily Messages" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        <Link legacyBehavior href = '/login'>
            <a>
              Log In
            </a>
          </Link>
        </div>
      
        <div className={styles.center}>
          <Image
            src= {Brief}
            alt="Brief Logo"
            width={500}
            height={350}
            priority
          />
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link legacyBehavior href='/ourteam'>
            <a>
              <h2 className={inter.className}>
                Our Team 
              </h2>
              <p className={styles.description}>
                Meet the Squad!
              </p>
            </a>
            </Link>
            </div>

        
          <div className={styles.card}>
            <Link legacyBehavior href='/about'>
            <a>
              <h2 className={inter.className}>
                About Us 
              </h2>
              <p className={styles.description}>
                Learn more about our company and values.
              </p>
            </a>
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}


