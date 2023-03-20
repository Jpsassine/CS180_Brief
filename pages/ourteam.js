/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Jack from "../images/jack.jpeg";
import JP from "../images/jp.jpeg";
import Vraj from "../images/vraj.jpeg";
import Matthew from "../images/matthew.jpeg";
import Gary from "../images/gary.png";

import { useEffect } from "react";

export default function AboutUs() {
  return (
    <>
      <div className={styles.teamdesc}>
        <Link legacyBehavior href="/">
          <button className={styles.bbutton}> Back </button>
        </Link>
      </div>
      <Head>
        <title>Meet Our Team </title>
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1>Our Team</h1>
          <div className={styles.ourTeam}>
            <div class="card" className={styles.card}>
              <Image
                className={styles.cardimg}
                class="card-image-top"
                src={Jack}
                alt="Jack"
              />
              <div class="card-title">Jack Huang</div>
              <div class="card-body">
                <p class="card-text">Google Auth Guy</p>
              </div>
            </div>
            <div class="card" className={styles.card}>
              <Image
                className={styles.cardimg}
                class="card-image-top"
                src={JP}
                alt="JP"
              />
              <div class="card-title">John-Paul Sassine</div>
              <div class="card-body">
                <p class="card-text">GPT-3 Himself.</p>
              </div>
            </div>
            <div class="card" className={styles.card}>
              <Image
                className={styles.cardimg}
                class="card-image-top"
                src={Vraj}
                alt="Vraj"
              />
              <div class="card-title">Vraj Patel</div>
              <div class="card-body">
                <p class="card-text">Frontender</p>
              </div>
            </div>
            <div class="card" className={styles.card}>
              <Image
                className={styles.cardimg}
                class="card-image-top"
                src={Matthew}
                alt="Matthew"
              />
              <div class="card-title">Matthew O'Grady</div>
              <div class="card-body">
                <p class="card-text">Frontender</p>
              </div>
            </div>
            <div class="card" className={styles.card}>
              <Image
                className={styles.cardimg}
                class="card-image-top"
                src={Gary}
                alt="Gary"
              />
              <div class="card-title">Gary Ou</div>
              <div class="card-body">
                <p class="card-text">Frontender</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
