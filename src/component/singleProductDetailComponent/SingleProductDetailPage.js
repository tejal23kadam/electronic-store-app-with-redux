import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart} from '../sliceComponent/CartSlice';


function SingleProductDetailPage({ isOpen, onClose, productId }) {
    const data = useSelector((state) => state.allData.data.products);
    const dispatch = useDispatch();
    if (!isOpen) {
        return null;
    } else {
        return (
            <div onClick={onClose} className='closeModal'>
                {
                    data.filter(item => item.id === productId).map(product => {
                        return (
                            <div className='allProdutDiv' key={product.id}>
                                <div>
                                    <img src={product.image} alt="Product" />
                                </div>
                                <div>
                                    <p>Original Price: ${product.price}</p>
                                    <p>{product.discount} % off</p>
                                    <button type="button" onClick={() => { dispatch(addToCart(product)) }} >Add to Cart</button>                                    
                                </div>
                            </div>
                        );
                    })
                }
            </div >
        );
    }
}
export default SingleProductDetailPage

