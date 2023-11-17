import React from "react";
import styles from './Product.module.css'
import DetailInfo from "./DetailInfo";
import { IProduct } from "../../fakeData";

function Product({ name, img, price }:IProduct) {
    const [detailToggle, setDetailToggle] = React.useState(false)
    const [inCart, setInCart] = React.useState(false)

    const toggleDetail = (): void => {
        setDetailToggle(true)
    }
    const addToCart = (): void => {
        setInCart(true)
    }
    const removeFromCart = (): void => {
        setInCart(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img alt='product' src={img}/>
            </div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <div>{name}</div>
                        <div>${price}</div>
                    </div>
                    <button className={styles.detail_button} onClick={toggleDetail}>Detail</button>
                </div>
                <hr/>
                <div className={styles.detail}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, repudiandae!
                </div>
            </div>
            <div className={styles.cart}>
                <button disabled={inCart} className={`${styles.cart_button} ${inCart && styles.in_cart}`} onClick={addToCart}>{inCart ? 'Already In cart' : 'Add to cart'}</button>
                {inCart && <div className={styles.delete_cart} onClick={removeFromCart}>Delete from cart</div>}
            </div>
            { detailToggle && <DetailInfo setDetailToggle={setDetailToggle} /> }
        </div>
    )
}

export default Product