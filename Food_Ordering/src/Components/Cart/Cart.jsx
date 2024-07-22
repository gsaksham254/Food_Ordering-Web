import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/Cart-Context'
import CartyItem from './CartyItem'
const Cart = (props) => {
    const CartCtx = useContext(CartContext)
    const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`

    const hasItems = CartCtx.items.length>0;
    const cartItemRemoveHandler = (id) => {
        CartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        CartCtx.addItem({...item,amount:1})
    }
    const  CartItem = (
        <ul className={classes['cart-items']}>
            {CartCtx.items.map((item)=>(
                <CartyItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
            ))} 
        </ul>
    )
    return (
        <>
          <Modal onClose={props.onClose}>
            {CartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
          </Modal>
        </>
    )
}

export default Cart