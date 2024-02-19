import React, { useState } from "react";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Center,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";


function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  const bg = useColorModeValue("rgb(8, 64, 97)", "#2a586d");
  const borderColor = useColorModeValue("#2a586d", "gray.700");
  const focusBorderColor = useColorModeValue("blue.400", "blue.500");
  const buttonColor = useColorModeValue("blue", "blue.300");

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg={bg}
      p={9}
      mx="auto"
      width="80%"
      maxW="50rem"
      rounded="md"
      shadow="md"
      border="1px solid"
      borderColor={borderColor}
      _hover={{
        borderColor: "blue.400",
      }}
      transition="border-color 0.2s ease"
      mb={4}
    >
      <FormControl isRequired>
        <Center>
        <FormLabel htmlFor="search-term" color="blue.500" fontSize="24px">
          Search Books
        </FormLabel>

        </Center>
        <Center>
        <Input
          id="search-term"
          type="text"
          placeholder="Enter book title or author"
          value={searchTerm}
          onChange={handleChange}
          bg={bg}
          border="5px solid"
          borderColor={borderColor}
          focusBorderColor={focusBorderColor}
          rounded="md"
          pl="6"
          pr="100"
          fontSize="md"
          fontWeight="medium"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor:"white"
          }}
        />
        </Center>
      </FormControl>
      <Button
        type="submit"
        rightIcon={<SearchIcon />}
        colorScheme={buttonColor}
        mt={3}
        w="50%"
        ml='10rem'
      >
        Search
      </Button>
      
    </Box>
  );
}

export default SearchBar;
