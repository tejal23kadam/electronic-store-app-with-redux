import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart,deleteAllCart } from '../sliceComponent/CartSlice';
function AllCartData() {
    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div>
             <button type="button" onClick={() => { dispatch(deleteAllCart()) }} >Delete All</button>
            {
                cartData.map(product => {
                    return (
                        <div className='cartProduct' key={product.id}>
                            <div>
                                <img  src={product.image} alt="Product" />
                            </div>
                            <div>
                                <p>Original Price: ${product.price}</p>
                                <p>Discount: {product.discount} %</p>
                                <button type="button" onClick={() => { dispatch(deleteFromCart(product.id)) }} >Delete</button>
                            </div>
                        </div>
                    );
                })
            }
        </div >
    )
}

export default AllCartData