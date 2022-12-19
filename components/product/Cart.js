import React, {useEffect, useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const Cart = function() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.cart))
    }, [])
    

    return (
        <Link href="/cart">
            <a className="button_shop">
                <FaShoppingCart /> CART
                <span style={{color: "#8c8c8c"}} className="fw-normal"> ({cartItems.length})</span>
            </a>
        </Link>
    )
}
export default Cart;