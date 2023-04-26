import css from '../card/card.module.css'
import logo from '../../img/Logo.png'
import picture from '../../img/picture2.png'



export const Card = ({user,onChange})=>{

  const { avatar, followers, tweets, id, active } = user;
  
   
   
    return(
        <div className={css.container}>
        <img className={css.cardPicture} src={picture} alt="background" />
        <img className={css.logo} src={logo} alt="card logo" />
        <div className={css.userWrapper}>
          <div className={css.line}></div>
          <div className={css.userBlock}>
            <div className={css.userBlockBorder} />
            <img className={css.userAvatar} src={avatar} alt="user avatar" />
          </div>
        </div>
        <p className={css.counter}>{tweets} tweets</p>
        <p className={css.counter}>
        {new Intl.NumberFormat('en-En').format(followers)} Followers
        </p>
  
        <button
          className={`${css.button} ${css[active]}`}
          type="button"
          onClick={() => onChange(id, followers, active)}
        >
        {active === "active" ? "Following" : "Follow"}
        </button>
      </div>
     
     
       
    )
}