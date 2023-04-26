import css from './header.module.css'



export const Header=({children})=>{
    return(
        <>
        <header className={css.header}>{children}</header>
      
        </>
    )
}