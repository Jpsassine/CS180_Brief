import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const inter = Josefin_Sans({ subsets: ['latin'] })

export default function AboutUs() {
  return (
    <>
    <Link legacyBehavior href = '/'>
      <button className={styles.bbutton}> Back </button>
    </Link>
    <div className={styles.center}>
          <h1 className={inter.className}>
            About Brief
          </h1>
      </div>
      <div className={inter.className}>
        <Carousel className={styles.car}>
            <div>
            <h2>Motivation</h2>
            <p className={styles.aboutp}>
          Throughout our lives in the professional world, it is common to receive tens or hundreds of emails, text messages, and direct messages per day on multiple platforms. Many of these messages will contain spam or simple formalities, with little to no valuable information, while others may contain very relevant information to the recipient. 
          In an attempt to deal with this mass influx of information, many people resort to tools such as email filtering services that help filter through spam while isolating the most critical messages. However, this solution can only be so effective at saving time. A busy person may still take weeks to view and respond to an email, even with the assistance of these services. Brief aims to take information filtering to the next level by filtering through the messages themselves, highlighting important points, and even providing AI generated responses.</p>
            </div>
            <div>
            <h2>Our Solution</h2>
            <p className={styles.aboutp}>
          Brief is a web based application providing a clean dashboard interface allowing busy people to have a summary of their daily communications and respond with prepared AI responses. 
          Essentially, a user would log into their account and see a single document with a list of people who have contacted them that day and a summary of what the person said. This summary is made using ChatGPT API and then through the web app the user can choose from a small selection of reactions
          (e.g. ‘Yes, let’s confirm the deal’, ‘no, that won't be possible’, ‘i am not sure right now’) and based on what the user chooses the LLM will create a much longer beautified response to send back to the person. </p>
            </div>
            <div>
            <h2>Our Value</h2>
            <p className={styles.aboutp}>
          This will provide value for a busy user through horizontal integration & 
          compatibility with messaging streams. For example, the broad vision is for Brief to get access to social media account DMs, email accounts(personal, professional), and SMS. Then from all of these different streams and apps it curates the daily briefing. With a respect for time, Brief focuses on the email integration
          first and foremost which will be done through the user making an account on our website and linking their email accounts they wish to have as communication feeds for Brief to monitor.             </p>
            </div>
        </Carousel>
      </div>
    </>
  )
}
