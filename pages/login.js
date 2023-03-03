import Link from 'next/link'

const Login = () => {
  return (
    <div>
      <h2> Login to your account! </h2>
      <form>
        <input type = "text" title = "username" placeholder = "username" />
        <input type = "password" title = "username" placeholder = "password" />
        <Link legacyBehavior href='/brieftool'>
          <button type = "submit"> Login </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
