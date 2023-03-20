/* eslint-disable react-hooks/exhaustive-deps */
import { initFirebase } from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { Josefin_Sans } from "@next/font/google";
import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import briefstyles from "../styles/Brief.module.css";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Brief from "../images/Brief.jpg";
import Image from "next/image";

const inter = Josefin_Sans({ subsets: ["latin"] });

const handleSubmit = () => {
  initFirebase();
  const auth = getAuth();
  auth.signOut();
};

const Login = ({ data }) => {
  // pass the data as a prop

  const { createUserToMessageMap } = require("./api/format");
  const { performParse } = require("./api/parser");

  const [token, setToken] = React.useState("");
  const [loginState, setLoginState] = React.useState("");
  const [fetching, setFetching] = React.useState("");

  const ReadEmails = async () => {
    try {
      const inputMap = performParse("EMAIL");
      console.log("inputMap", inputMap);
      const userToSummaryMap = await createUserToMessageMap(inputMap);
      console.log("userToSummaryMap", userToSummaryMap);
      setFetching("done");
    } catch (error) {
      console.error(error);
      setFetching("failed");
    }
  };

  React.useEffect(() => {
    ReadEmails();
  }, []);

  initFirebase();
  const auth = getAuth();
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID  });
  provider.addScope("https://www.googleapis.com/auth/gmail.readonly");

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    setToken(result.user.accessToken);
    console.log(result.user);
    setLoginState("good");
  };

  const [user, loading] = useAuthState(auth);
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  if (!loginState) {
    return (
      <div className={briefstyles.top}>
        <button onClick={signIn} className={briefstyles.topb}>
          Click to Start
        </button>
      </div>
    );
  }

  if (loading || fetching != "done") {
    return (
      <div className={briefstyles.topl}>
        <div style={{ fontSize: "8vw" }}>Preparing Brief...</div>
      </div>
    );
  }
  if (user) {
    return (
      <div className={inter.className} style={{ fontSize: "20px" }}>
        Welcome {user.displayName}
        <Link legacyBehavior href="/">
          <button onClick={() => handleSubmit()} className={styles.button}>
            Logout
          </button>
        </Link>
        <div className={inter.className}>
          <div style={local_styles.briefBorder}>
            <h1> {today} Brief </h1>
            <Carousel>
              {Object.keys(data).map((key, index) => (
                <div style={local_styles.interactionsText} key={index}>
                  <h3 style={{ color: "#ADD8E6", fontSize: "24px" }}>
                    Message(s) From :{" "}
                    <span style={{ color: "#66CCFF" }}>{key}</span>
                  </h3>
                  <ul style={{ fontSize: "20px" }}>
                    {data[key].map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                  {data[key].some((value) => value.includes("meeting")) && (
                    <button
                      className={styles.brieftoolButton}
                      style={{ marginTop: "20px" }}
                    >
                      Join
                    </button>
                  )}
                  {data[key].some((value) => value.includes("decide")) && (
                    <button
                      className={styles.brieftoolButton}
                      style={{ marginTop: "20px" }}
                    >
                      Yes
                    </button>
                  )}
                  {data[key].some((value) => value.includes("decide")) && (
                    <button
                      className={styles.brieftoolButton}
                      style={{ margin: "20px 0 0 20px" }}
                    >
                      No
                    </button>
                  )}
                </div>
              ))}
            </Carousel>
          </div>
          <div className={styles.center}>
            <Image
              src={Brief}
              alt="Brief Logo"
              width={375}
              height={265}
              priority
            />
          </div>
        </div>
      </div>
    );
  }
  return <h1></h1>;
};

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
