import { initFirebase } from "../firebase/firebaseApp"
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";

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
    </div>
  }

  return (
    <h1></h1>
  );
}

export default Login;
