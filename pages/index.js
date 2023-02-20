import Head from 'next/head'
import Image from 'next/image'
import { Inter, Linden_Hill } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Brief: AI Summarizer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by connecting Your Accounts
          </p>
        </div>

        <div className={styles.center}>
          {
          <h1> Brief: AI Message Summarizer</h1>
          }
        </div>

        <div className={styles.grid}>
          <Link legacyBehavior href='/about'>
          {/* <a>About Us</a> */}
          <a>
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Brief!
            </p>
          </a>
          </Link>

          {/* <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a> */}
        </div>
      </main>
    </>
  )
}
