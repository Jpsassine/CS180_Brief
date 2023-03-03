import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ProfilePic from '../images/profilepic.png'


export default function AboutUs() {
  return (
    <>
    <Head>
        <title>Meet Our Team </title>
      </Head>
      <main className={styles.main}>

        < div className={styles.wrapper}>
            <h1>Our Team</h1>
            <div className={styles.ourTeam}>
                
                <div className={styles.member}>
                    <Image
                        src= {ProfilePic}
                        alt="Brief Logo"
                        width={250}
                        height={225}
                        priority
                    />
                    <h3>Vraj Patel</h3>
                    <p>vpate048@ucr.edu</p>
                    <p>SID: 862136991</p>
                </div>

                <div className={styles.member}>
                    <Image
                        src= {ProfilePic}
                        alt="Brief Logo"
                        width={250}
                        height={225}
                        priority
                    />
                    <h3>Jack Huang</h3>
                    <p>@ucr.edu</p>
                    <p>SID: </p>
                </div>

                <div className={styles.member}>
                    <Image
                        src= {ProfilePic}
                        alt="Brief Logo"
                        width={250}
                        height={225}
                        priority
                    />
                    <h3>JP </h3>
                    <p>@ucr.edu</p>
                    <p>SID: </p>
                </div>

                <div className={styles.member}>
                    <Image
                        src= {ProfilePic}
                        alt="Brief Logo"
                        width={250}
                        height={225}
                        priority
                    />
                    <h3>Matt </h3>
                    <p>@ucr.edu</p>
                    <p>SID: </p>
                </div>

                <div className={styles.member}>
                    <Image
                        src= {ProfilePic}
                        alt="Brief Logo"
                        width={250}
                        height={225}
                        priority
                    />
                    <h3>Gary </h3>
                    <p>@ucr.edu</p>
                    <p>SID: </p>
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