import {useContext} from 'react';

import { ProductsContext } from '../../contexts/products.context';
// import { CartContext } from '../../contexts/cart.context';

import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss'

const Shop = () => {
    const {products}=useContext(ProductsContext);
    // const {addItemToCart}=useContext(CartContext);
    return (
        <div className='products-container'>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default Shop;