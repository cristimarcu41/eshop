import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
    const {cartItems, cartTotal}=useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-column">Product</div>
                <div className="header-column">Description</div>
                <div className="header-column">Quantity</div>
                <div className="header-column">Price</div>
                <div className="header-column">Remove</div>
            </div>
            {cartItems.map(item=> <CheckoutItem key={item.id} cartItem={item} />)}
            <span className="total">Total: ${cartTotal}</span>
        </div>
    );
};

export default Checkout;