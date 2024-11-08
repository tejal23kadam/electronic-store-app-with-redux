import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../sliceComponent/CartSlice';


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
                        return (<>



                            <div className='allProdutDiv'>
                                <section id="product-info">

                                    <div class="item-image-parent">

                                        <div class="item-image-main">
                                            <img src={product.image} alt="Product" />
                                        </div>
                                    </div>

                                    <div class="item-info-parent">

                                        <div class="main-info">
                                            <h4>{product.title}</h4>
                                            <div style={{ display: "flex" }}>
                                                <h5><s>{product.price}</s> </h5>
                                                <h4>${Math.trunc(product.price - ((product.price * product.discount) / 100))}</h4>
                                                <div style={{ display: "flex", paddingTop: "6px" }}>
                                                    <p class="discount">{product.discount}%</p>
                                                    <p>off</p>
                                                </div>
                                            </div>
                                            <p>Brand: <span>{product.brand}</span></p>
                                            <p>Modal: {product.model}</p>
                                            <p>Color: <span id="price">{product.color}</span></p>
                                        </div>

                                        <div class="select-items">
                                            <p>About This Product</p>
                                            <p>{product.description}</p>
                                        </div>
                                        <div>
                                        <button className="addToCartBtn" type="button" onClick={() => { dispatch(addToCart(product)) }} >Add to Cart</button>
                                        </div>
                                    </div>
                                </section>

                            </div>
                            <div key={product.id}>
                                {/* <div>
                                    <img src={product.image} alt="Product" />
                                </div>
                                <div>
                                    <p>Original Price: ${product.price}</p>
                                    <p>{product.discount} % off</p>
                                    <button type="button" onClick={() => { dispatch(addToCart(product)) }} >Add to Cart</button>
                                </div> */}
                            </div>
                        </>
                        );
                    })
                }
            </div >
        );
    }
}
export default SingleProductDetailPage

