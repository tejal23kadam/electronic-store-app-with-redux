import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDatasAsync } from '../sliceComponent/AllDataSlice';
import AllProductDetail from '../../component/ProductDetailComponent/AllProductDetail';
import { addToCart, updateToCart, deleteToCart, deleteAllCart } from '../sliceComponent/CartSlice';
import Pagination from '../../component/paginationComponent/Pagination';

function AllCategory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <h1>No data available</h1>;

  return (
    <div className='container'>
      <h1>User List</h1>
      <ul>
        {(data) ?
          (
            (data.slice(indexOfFirstPost, indexOfLastPost).map((data) => (
              <li key={data.id}>
                <img className='AllDataImage' src={data.image} alt="noImage" />
                <h6>original price {data.price} </h6>
                <p> discount {data.discount} %</p>
                <button type="button" onClick={handleOpen}>Click Me to Open Modal </button>
                <AllProductDetail isOpen={open} onClose={handleClose} data={data} ></AllProductDetail>
              </li>
            )))
          ) :
          (<h1>data is missing</h1>)
        }
      </ul>
      <Pagination
        length={data.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default AllCategory;
