import React from "react";

function Pagination({ booksPerPage, totalBooks, pagination }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <div>
        <ul className="pagination">
          {pages.map((pageNumber, index) => {
            return (
              <li key={index}>
                <button onClick={() => pagination(pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Pagination;
