import { initFirebase } from "../firebase/firebaseApp"
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Head from 'next/head'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Brief from '../images/Brief.jpg'
import Image from 'next/image'

const inter = Josefin_Sans({ subsets: ['latin'] })

const handleSubmit = () => {
  initFirebase();
  const auth = getAuth();
  auth.signOut()
}

const Login = ({ data }) => { // pass the data as a prop
  initFirebase();
  const auth = getAuth();
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>
  }
  if (user) {
    return <div>Welcome {user.displayName}
    <Link legacyBehavior href = '/'>
      <button onClick={() => handleSubmit()}>Logout</button>
    </Link>

    <div className={inter.className}>
     <div style={local_styles.briefBorder}>
      <h1> Your daily summary </h1>
      <Carousel>
      {Object.keys(data).map((key, index) => (
        <div style={local_styles.interactionsText} key={index}>
          <h3>{key}</h3>
          <ul>
            {data[key].map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
      </Carousel>
     </div>
     <div className={styles.center}>
       <Image
         src= {Brief}
         alt="Brief Logo"
         width={375}
         height={265}
         priority
       />
     </div>
    </div>
    </div>
  }
  return (<h1></h1>)
}

export async function getServerSideProps() {
  const res = {
    "John": ["Hello World!", "Goodbye World!"],
    "Jane": ["Hello World 1!"],
    "Judy": ["Hello World 2!", "Goodbye World 2!", "Hello World 3!"]
  };

  return { props: { data: res } };
}

export default Login;

/* Brief tool styles */
const local_styles = {
  briefBorder: {
    position: 'relative',
    textAlign: 'center',
    padding: '40px 200px 40px 200px',
    border: '10px solid #66CCFF',
    backgroundColor: '#595957',
  },

  interactionsText: {
    width: '50%',
    margin: '60px auto 60px auto',
    textAlign: 'left',
  },
};
