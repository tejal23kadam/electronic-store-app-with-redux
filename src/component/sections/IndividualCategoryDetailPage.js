import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../paginationComponent/Pagination';
import SingleProductDetailPage from '../singleProductDetailComponent/SingleProductDetailPage';
import { addToCart } from '../sliceComponent/CartSlice';

function IndividualCategoryDetailPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(1);
  const postsPerPage = 10;

  const data = useSelector((state) => state.allData.data.products);
  const loading = useSelector((state) => state.allData.loading);
  const error = useSelector((state) => state.allData.error);

  const dispatch = useDispatch();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (id) => {
    setOpen(true);
    setCurrentProductId(id);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <h1>No data available</h1>;

  return (
    <div className='container'>
      <div className='pro-container'>
        {(data) ?
          (
            (data.filter(data => data.category === props.category).slice(indexOfFirstPost, indexOfLastPost).map((data) => (
              <div class="pro" >
                <div class="des">
                  <img src={data.image} alt="noImage" />
                  <p className="overme">{data.title} </p>
                  <div style={{display: "flex", justifyContent:"space-evenly"}}>
                    <h6><s>$ {data.price}</s> </h6>
                    <p>{data.price * data.price}</p>
                    <p>{data.discount} % off</p>
                  </div>
                  <button type="button" onClick={() => handleOpen(data.id)}>Click Me to Open Modal </button>
                </div>
                <button type="button" onClick={() => { dispatch(addToCart(data)) }}><i className="fal bi bi-cart cart" ></i></button>
              </div>
            )))
          ) :
          (<h1>data is missing</h1>)
        }
      </div>
      <SingleProductDetailPage isOpen={open} onClose={handleClose} productId={currentProductId} ></SingleProductDetailPage>
      <Pagination
        length={data.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </div >

  )
}

export default IndividualCategoryDetailPage