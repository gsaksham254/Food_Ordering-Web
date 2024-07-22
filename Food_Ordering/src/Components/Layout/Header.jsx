import React from 'react'
import MealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <>
           <header className={classes.header}>
               <h1>React Meals</h1>
               <HeaderCartButton onClick={props.onShowCart}/>
           </header>
           <div className={classes['main-image']}>
               <img src={MealsImage} alt="A table full of delicious food" />
           </div>

        </>

    )
}

export default Header