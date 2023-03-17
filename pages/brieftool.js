import { initFirebase } from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Head from "next/head";
import { Josefin_Sans } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Brief from "../images/Brief.jpg";
import Image from "next/image";
import { readInboxEmails } from "./api/gmail";
// call from parser
// call from formatter


const inter = Josefin_Sans({ subsets: ["latin"] });

const handleSubmit = () => {
  initFirebase();
  const auth = getAuth();
  auth.signOut();
};

const Login = ({ data }) => {
  // pass the data as a prop

  const [token, setToken] = React.useState("");
  const [loginState, setLoginState] = React.useState("");

  const ReadEmails(){
    // return summary data.
  }

  initFirebase();
  const auth = getAuth();
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    client_id:
      "915039922825-lkcgt4khka0ub8bl8pmfqrdvkrc6gkv7.apps.googleusercontent.com", // This is your OAuth 2.0 Client ID
  });
  provider.addScope("https://www.googleapis.com/auth/gmail.readonly");

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    setToken(result.user.accessToken);
    console.log(result.user);
    setLoginState("good");
  };

  console.log("token", token);

  //const result = signIn();

  const [user, loading] = useAuthState(auth);
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  if (!loginState) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button
          onClick={signIn}
          style={{
            fontSize: "4vw",
            fontWeight: "bold",
            padding: "1em 2em",
            color: "white",
            backgroundColor: "black",
            backgroundImage:
              "linear-gradient(45deg, #000000 0%, #555555 100%)",
            borderRadius: "0.5em",
            border: "none",
            boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
            fontFamily: "'Josefin Sans'",
          }}
        >
          Click to Start
        </button>
      </div>
    );
  }
  readInboxEmails
  readInboxEmails(token); //--------------------------------------------------- DOUBLE CHECK!
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ fontSize: "8vw" }}>Preparing Brief...</div>
      </div>
    );
  }
  if (user) {
    return <div className={inter.className} style={{ fontSize: '20px' }}>Welcome {user.displayName}
    <Link legacyBehavior href = '/'>
      <button onClick={() => handleSubmit()} className={styles.button}>Logout</button>
    </Link>

    <div className={inter.className}>
     <div style={local_styles.briefBorder}>
      <h1> {today} Brief </h1>
      <Carousel>
      {Object.keys(data).map((key, index) => (
       <div style={local_styles.interactionsText} key={index}>
        <h3 style={{color: '#ADD8E6', fontSize: '24px'}}>Message(s) From : <span style={{ color:'#66CCFF' }}>{key}</span></h3>
        <ul style={{fontSize: '20px'}}>
         {data[key].map((value, index) => (
          <li key={index}>{value}</li>
         ))}
        </ul>
        {data[key].some((value) => value.includes("meeting")) && (
         <button className={styles.brieftoolButton} style={{marginTop: '20px'}}>Join</button>
        )}
        {data[key].some((value) => value.includes("decide")) && (
         <button className={styles.brieftoolButton} style={{marginTop: '20px'}}>Yes</button>
        )}
        {data[key].some((value) => value.includes("decide")) && (
         <button className={styles.brieftoolButton} style={{margin: '20px 0 0 20px'}}>No</button>
        )}
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
  return <h1></h1>;
};

export async function getServerSideProps() {
  const res = {
    "John": ["Hello World decide!", "Goodbyeoodbyeoodbyeoodbyeoodbyeoodbyeoodbyeoodbyeoodbyeoodbye  oodbyeoodbyeoodbyeoodbye  World!"],
    "Jane": ["Hello World 1!"],
    "Judy": ["Hello World 2!", "Goodbye World meeting 2 bla bla bla bla bla hahahah!", "Hello World 3!"]
  };

  return { props: { data: res } };
}

export default Login;

// 000E2B
/* Brief tool styles */
const local_styles = {
  briefBorder: {
    position: "relative",
    textAlign: "center",
    padding: "40px 200px 40px 200px",
    border: "10px solid #66CCFF",
    backgroundColor: "#1A1A1A",
  },

  interactionsText: {
    width: "50%",
    lineHeight: "3rem",
    margin: "60px auto 60px auto",
    textAlign: "left",
  },
};
