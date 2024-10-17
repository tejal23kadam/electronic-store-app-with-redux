import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAsync, setCurrentPage } from '../sliceComponent/AllDataSlice';
import Pagination from '../../component/paginationComponent/Pagination';

function AllCategory() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const users = useSelector((state) => state.allData.users.products);
  const loading = useSelector((state) => state.allData.loading);
  const error = useSelector((state) => state.allData.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  useEffect(() => {
    // Fetch users whenever the current page changes
    dispatch(fetchUsersAsync());
  }, [currentPage, dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;


  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!users || users.length === 0) return <h1>No data available</h1>;

  return (
    <div className='container'>
      <h1>User List</h1>
      <ul>
        {(users) ?
          (
            (users.slice(indexOfFirstPost, indexOfLastPost).map((user) => (
              <li key={user.id}>
                <img className='AllDataImage' src={user.image} />
                <h4>original price {user.price} </h4>
                <p> discount {user.discount} %</p>
              </li>
            )))
          ):
          (<h1>data is missing</h1>)
          }
      </ul>
      <Pagination
        length={users.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default AllCategory;
