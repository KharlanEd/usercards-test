import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import css from '../Pages/pages.module.css'





export default function Home(){

    return(
        <>
        <Header>
           <Link className={css.nav_link} to="/Tweets">
           Tweets
           </Link> 
        </Header>
        <main>
            <h1>Welcome</h1>
            <p>Follow your blogger</p>
        </main>
        </>
    )
}