import Link from 'next/link'
import { initFirebase } from "../firebase/firebaseApp"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  initFirebase();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    return <div>Loading...</div>
  }
  if (user) {
    return <div>Welcome {user.displayName}</div>
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  }
  return (
    <div>
      <h2> Login to your account! </h2>
      <form>
        <input type = "text" title = "username" placeholder = "username" />
        <input type = "password" title = "username" placeholder = "password" />
        <Link legacyBehavior href='/brieftool'>
          <button onClick={signIn}> Login </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
