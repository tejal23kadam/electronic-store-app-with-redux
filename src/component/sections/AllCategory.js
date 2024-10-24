import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDatasAsync } from '../sliceComponent/AllDataSlice';
import Pagination from '../../component/paginationComponent/Pagination';
import SingleProductDetailPage from '../singleProductDetailComponent/SingleProductDetailPage';
import { addToCart } from '../sliceComponent/CartSlice';

function AllCategory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(1);
  const postsPerPage = 10;

  const data = useSelector((state) => state.allData.data.products);
  const loading = useSelector((state) => state.allData.loading);
  const error = useSelector((state) => state.allData.error);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data whenever the current page changes
    dispatch(fetchDatasAsync());
  }, [currentPage, dispatch]);

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
            (data.slice(indexOfFirstPost, indexOfLastPost).map((data) => (
              <div className="pro" key={data.id} >
                <div className="des">
                  <img src={data.image} alt="noImage" />
                  <p className="overme">{data.title} </p>
                  <h6>original price {data.price} </h6>
                  <p> discount {data.discount} %</p>
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
  );
}

export default AllCategory;
