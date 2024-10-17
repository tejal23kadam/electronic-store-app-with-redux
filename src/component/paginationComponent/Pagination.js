import React from 'react'

const Pagination = ({ postsPerPage, length, handlePagination}) => {
    let paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumber.push(i);
    }
    return (
        <div className='pagination'>
            {
                paginationNumber.map((data) => (
                    <button key={data} onClick={() => handlePagination(data)}>
                        {data}
                    </button>
                ))
            }
        </div>
    )
}
export default Pagination