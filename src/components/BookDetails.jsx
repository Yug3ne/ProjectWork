import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,

  Grid,
  GridItem,
} from "@chakra-ui/react";

function BookDetails() {

  const addToCart = async (book) => {
    try {
      const response = await fetch("https://json-server-vercel-zeta-puce.vercel.app/cart", {
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

  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await fetch(`https://json-server-vercel-zeta-puce.vercel.app/books/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching Books:", error);
      }
    }
    fetchBookDetails();
  }, [id]);

    const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (

    <Box p={4} maxWidth="container.lg">
      <Box  pt={4}
      pb={20}
      onClick={handleClick}
      cursor="pointer"
      color="blue.500" // Apply blue color to the text
      _hover={{ textDecoration: "underline" }} // Add underline on hover
      fontSize="25px" // Increase font size (large)
      fontFamily="Arial, sans-serif">
      ⬅ Back to Home
    </Box>
      <Grid templateColumns="1fr 2fr" gap={4}>
        <GridItem>
          <Image
            src={book.image_url}
            alt={book.title}
            borderRadius="10%"
            height="300px" // Set a fixed height for all images
            width="auto" // Maintain aspect ratio
            objectFit="cover" // Ensure images cover the entire container
          />
        </GridItem>
        <GridItem>
          <Box
            border="2px solid rgb(8, 64, 97)"
            borderRadius="10px"
            p={4}
            boxShadow="10px"
          >
            <Heading as="h3" size="lg" mt={4}>
              {book.title}
            </Heading>
            <Text as="p" mt={2}>
              <b>Description:</b> {book.description}
            </Text>
            <Text as="p" mt={2}>
              <b>Authors:</b> {book.authors}
            </Text>
            <Text as="p" mt={2}>
              <b>Edition:</b> {book.edition}
            </Text>
            <Text as="p" mt={2}>
              <b>Format:</b> {book.format}
            </Text>
            <Text as="p" mt={2}>
              <b>Pages:</b> {book.num_pages}
            </Text>
            <Text as="p" mt={2}>
              <b>Genres:</b> {book.genres}
            </Text>
            <Button mt={4} colorScheme="teal" onClick={() => addToCart(book)}>
              Add to Cart
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default BookDetails;
