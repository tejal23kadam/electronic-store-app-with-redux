import React from 'react'
import { useState } from 'react';


const Pagination = ({ length, postsPerPage, currentPage, handlePagination }) => {
    let paginationNumber = []

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumber.push(i);
    }

    const renderPageNumbers = paginationNumber.map((pageNumber) => {
        if (pageNumber < maxPageNumberLimit + 1 && pageNumber > minPageNumberLimit) {
            return (
                <button key={pageNumber}
                    className={currentPage === pageNumber ? 'active' : ''}
                    onClick={() => handlePagination(pageNumber)}>
                    {pageNumber}
                </button>);
        } else {
            return null;
        }
    });

    const handleNextbtn = () => {
         handlePagination(currentPage+1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        handlePagination(currentPage-1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    return (
        <div className="pagination1">
            {/* <div>
                <button className="arrow" id="prevPage" disabled>← <span className="nav-text">PREV</span></button>
            </div> */}
            <div className="pages">
                <button
                    onClick={handlePrevbtn}
                    disabled={currentPage === paginationNumber[0] ? true : false}
                >
                    Prev
                </button>
                <div className="page-number">
                    {renderPageNumbers}
                </div>
                <button
                    onClick={handleNextbtn}
                    disabled={currentPage === paginationNumber[length - 1] ? true : false}
                >
                    Next
                </button>
            </div>
            {/* <div>
                <button className="arrow" id="nextPage"><span className="nav-text">NEXT</span> →</button>
            </div> */}
        </div>
    )
}
export default Pagination