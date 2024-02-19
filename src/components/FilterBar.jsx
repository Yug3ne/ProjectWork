import React, { useState } from "react";

function FilterBar({ books, handleFilter }) {
  const [showOptions, setShowOptions] = useState(false);
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [resultsNotFound, setResultsNotFound] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleApplyFilter = () => {
    const filteredBooks = books.filter(book => {
      return (author === "" || book.authors.includes(author)) && (genre === "" || book.genre_list.includes(genre));
    });

    if (filteredBooks.length === 0) {
      setResultsNotFound(true);
    } else {
      setResultsNotFound(false);
      handleFilter({ author, genre });
    }
  };

  return (
    <div className="filter-bar">
      <button onClick={handleToggleOptions}>Filter</button>
      {showOptions && (
        <div className="filter-options">
          <div className="option">
            <label>Author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="">Select Author</option>
              {Array.from(new Set(books.map((book) => book.authors))).map(
                (author, index) => (
                  <option key={index} value={author}>
                    {author}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="option">
            <label>Genre:</label>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">Select Genre</option>
              {Array.from(
                new Set(books.flatMap((book) => book.genre_list.split(",")))
              ).map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleApplyFilter}>Apply</button>
        </div>
      )}
      {resultsNotFound && <p>No results found.</p>}
    </div>
  );
}

export default FilterBar;
