import Head from 'next/head'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Josefin_Sans({ subsets: ['latin'] })

export default function BriefTool () {
  return (
    <div className={inter.className}>
     <div className={styles.briefTool}>
      <h1> Your daily summary </h1>
      <div className={styles.interactionsText}>
      <h3> Jack </h3>
      <ul>
       <li> Wants to know about homework due date </li>
       <li> Recently ran into Lisa </li>
      </ul>
      </div>
      <div className={styles.interactionsText}>
      <h3> John </h3>
      <ul>
       <li> Sent the reports in to Trevor </li>
       <li> Needs you to review the finance reports </li>
      </ul>
      </div>
      <div className={styles.interactionsText}>
      <h3> Karen </h3>
      <ul>
       <li> Wants to set up meeting on Thursday </li>
       <li> Add to calendar? Yes/No </li>
      </ul>
      </div>
     </div>
    </div>
  );
}
