import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

import "./styles/Home.css";
import {
  Box,
  Image,
  Grid,
  GridItem,
  Heading,
  Button,
  Center,
  Spinner,
  Flex,
  Text,
} from "@chakra-ui/react";

function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(30);
  const navigate = useNavigate();

  const API_URL = "http://localhost:8080/books";

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data);
      } catch (error) {
        console.error("Error fetching Books:", error);
      }
    }
    fetchBooks();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleFilter = ({ author, genre }) => {
    let filtered = books;

    if (author) {
      filtered = filtered.filter(
        (book) => book.authors.toLowerCase() === author.toLowerCase()
      );
    }
    if (genre) {
      filtered = filtered.filter((book) =>
        book.genre_list.toLowerCase().includes(genre.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  };

  const lastBook = currentPage * booksPerPage;
  const firstBook = lastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(firstBook, lastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addToCart = async (book) => {
    try {
      const response = await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      alert("Item added to cart");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Item already in cart");
    }
  };

  return (
    <>
       
      <Box>
        <SearchBar handleSearch={handleSearch} />
        <FilterBar books={books} handleFilter={handleFilter}/>
      </Box>
      <Box>
        {books.length === 0 ? (
          <Center py={20}>
            <Spinner size="lg" />
            <Text fontSize="lg">Loading books...</Text>
          </Center>
        ) : (
          <Grid
            mt={5}
            templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            gap={5}
            marginX={50}
          >
            {currentBooks.map((book) => (
              <GridItem
                key={book.id}
                as="div"
                boxShadow="md"
                borderRadius="8px"
                p="4"
                cursor="pointer"
                border="2px solid #e2e8f0"
                bg="rgb(8, 64, 97)"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Image
                    onClick={() => navigate(`/book/${book.id}`)}
                    src={book.image_url}
                    alt={book.title}
                    objectFit="cover"
                    width="full"
                    height="200px"
                    borderRadius="8px"
                  />
                  <Box
                    mt="4"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Heading
                      as="h3"
                      fontSize="md"
                      color="white"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      {book.title}
                    </Heading>
                    <Flex flexDirection="column" alignItems="center">
                      <Text color="white" marginBottom="2">
                        Price: {book.price}
                      </Text>
                      <Button
                        colorScheme="primary"
                        size="xs"
                        onClick={() => addToCart(book)}
                      >
                        Add to Cart
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        )}

        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={filteredBooks.length}
          pagination={paginate}
          colorScheme="primary"
        />
             
      </Box>
    </>
  );
}

export default Home;
