import { initFirebase } from "../firebase/firebaseApp"
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Head from 'next/head'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Josefin_Sans({ subsets: ['latin'] })

const handleSubmit = () => {
  initFirebase();
  const auth = getAuth();
  auth.signOut()
}

const Login = () => {
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
    </div>
  }
  return (<h1></h1>)
}

export default Login;