import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className = "not-found">
            <h1>Oooooopppssies...</h1>
            <h2>This page cannot be found</h2>
            <p>Go back to the <Link legacyBehavior href='/'><a>Home Page</a></Link></p>
        </div>
     );
}
 
export default NotFound;