import React, {  useState } from 'react';
import { useSelector} from 'react-redux';
import Pagination from '../../component/paginationComponent/Pagination';

function AppliancesCategory() {
  const [currentPage, setCurrentPage] = useState(1); 
  const postsPerPage = 10;

  const data = useSelector((state) => state.allData.data.products);
  const loading = useSelector((state) => state.allData.loading);
  const error = useSelector((state) => state.allData.error);  


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
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
            (data.filter(data => data.category === "appliances").slice(indexOfFirstPost, indexOfLastPost).map((data) => (  
              <li key={data.id}>
                <img className='AllDataImage' src={data.image} alt="noImage" />
                <h4>original price {data.price} </h4>
                <p> discount {data.discount} %</p>
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

export default AppliancesCategory