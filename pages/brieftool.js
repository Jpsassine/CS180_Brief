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
    return (
      <div>
        <Head>
          <title>My Page</title>
        </Head>
        <div>Welcome {user.displayName}
          <Link legacyBehavior href='/'>
            <button onClick={() => handleSubmit()}>Logout</button>
          </Link>
          <div className={inter.className}>
            <div className={styles.briefTool}>
              <h1> Your daily summary </h1>
              {Object.entries(data).map(([key, value]) => ( // map over the data
                <div className={styles.interactionsText} key={key}>
                  <h3>{key}</h3>
                  <ul>
                    <li>{value}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (<h1></h1>)
}

export async function getServerSideProps() {
  const res = {
    "John": "Hello World!",
    "Jane": "Hello World 1!",
    "Judy": "Hello World 2!"
  };

  return { props: { data: res } };
}

export default Login;
