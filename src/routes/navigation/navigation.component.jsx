import { Outlet, Link } from "react-router-dom"
import { useContext } from "react"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as Crown} from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import './navigation.styles.scss'

 const Navigation =()=> {
  const {currentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);
  const signOutHandler= async ()=>{
    await signOutUser();
  }
  return (
    <>
        <div className="navigation">
            <Link className="logo-container" to="/">
               <Crown className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">Shop</Link>
                {currentUser ? (<span className="nav-link" onClick={signOutHandler}>Sign Out</span>) 
                            : ( <Link className="nav-link" to="/auth"> Sign in</Link>)}
                <CartIcon />
            </div>
            { isCartOpen && <CartDropdown/> }
        </div>
        <Outlet/>
    </>
  )
}

export default Navigation;
