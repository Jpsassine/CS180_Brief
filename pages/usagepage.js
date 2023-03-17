import Head from 'next/head'
import Image from 'next/image'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import NavBar from '../components/Navbar'

const inter = Josefin_Sans({ subsets: ['latin'] })

export default function UsagePage() {
  return (
    <>
      <Head>
        <title>About Brief</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>
            <h1 className={inter.className}>
              How to use Brief
            </h1>
        </div>

        <div className={styles.grid}>
          <a
            className={styles.card}
          >
            <h2 className={inter.className}>
                <b>Step 1</b>
            </h2>
            <p className={inter.className}>
                Click the login button on the top left of the home page and sign in with your Google account.
           </p>
          </a>

          <a
            className={styles.card}
          >
            <h2 className={inter.className}>
                Step 2
            </h2>
            <p className={inter.className}>
                When you receive a email or text message, Brief will summarize the messsage and display the summarization at the top of of the homescreen under "Your daily summary". 
            </p>
          </a>

          <a
            className={styles.card}
          >
            <h2 className={inter.className}>
              Step 3
            </h2>
            <p className={inter.className}>
                Based on the context of the message, Brief can prompt the user to add events to their calendar or respond to Yes/No questions.
            </p>
          </a>
          
        </div>
      </main>
    </>
  )
}