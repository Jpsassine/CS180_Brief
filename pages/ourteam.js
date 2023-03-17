import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Jack from '../images/jack.jpeg'
import JP from '../images/jp.jpeg'
import Vraj from '../images/vraj.jpeg'
import Matthew from '../images/matthew.jpeg'
import Gary from '../images/gary.png'

import { useEffect } from "react";

export default function AboutUs() {
  return (
    <>
    <Head>
        <title>Meet Our Team </title>
      </Head>
      <main className={styles.main}>
        < div className={styles.wrapper}>
        <div className={styles.teamdesc}>
        <Link legacyBehavior href = '/'>
            <button className={styles.bbutton}> Back </button>
          </Link>
          </div>
            <h1>Our Team</h1>
            <div className={styles.ourTeam}>
                <div class="card" className={styles.card}>
                    <Image className={styles.cardimg} class="card-image-top" src={Jack}/>
                    <div class="card-title">Jack Huang</div>
                    <div class="card-body">
                        <p class="card-text">Google Auth Guy</p>
                    </div>
                </div>
                <div class="card" className={styles.card}>
                    <Image className={styles.cardimg} class="card-image-top" src={JP}/>
                    <div class="card-title">John-Paul Sassine</div>
                    <div class="card-body">
                        <p class="card-text">GPT-3 Himself.</p>
                    </div>
                </div>
                <div class="card" className={styles.card}>
                    <Image className={styles.cardimg} class="card-image-top" src={Vraj}/>
                    <div class="card-title">Vraj Patel</div>
                    <div class="card-body">
                        <p class="card-text">Frontender</p>
                    </div>
                </div>
                <div class="card" className={styles.card}>
                    <Image className={styles.cardimg} class="card-image-top" src={Matthew}/>
                    <div class="card-title">Matthew O'Grady</div>
                    <div class="card-body">
                        <p class="card-text">Frontender</p>
                    </div>
                </div>
                <div class="card" className={styles.card}>
                    <Image className={styles.cardimg} class="card-image-top" src={Gary}/>
                    <div class="card-title">Gary Ou</div>
                    <div class="card-body">
                        <p class="card-text">Frontender</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}


  /* <div className={styles.center}>
            <h1 className={inter.className}>
              Meet Our Team
            </h1>
        </div> */