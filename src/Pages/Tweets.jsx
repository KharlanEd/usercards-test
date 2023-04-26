import { Link } from "react-router-dom";
import {CardList} from "../components/cardList/cardList";
import { Header } from "../components/Header/Header";
import css from '../Pages/pages.module.css'

export default function Tweets(){
    return(
        <>
        <Header>
            <Link className={css.nav_link} to="/">
            Back
            </Link>
        </Header>
        <main>
           <CardList/> 
        </main>
        </>
    )
}