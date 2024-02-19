import React from "react";
import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";

function AboutUs() {
  return (
    <Box className="about-container"  p={1} color="black" fontSize='15px'  backgroundImage='https://cdn.pixabay.com/photo/2013/07/13/11/51/book-158812_1280.png' border="2px solid rgb(8, 64, 97)" borderRadius='10px' m='20px'>
      <Box mb={8}>
        <Heading as="h2" size="0.5g" mb={2} fontSize='40px'>
          Our Story
        </Heading>
        <Text fontSize="lg">
          We are proud to be a premier destination for book lovers in East
          Africa. Founded in 2024 by Chris K., Eugene K., Gideon R., Edith T.,
          and Gichia M., we specialize in offering a curated selection of books
          for readers of all ages and interests.
        </Text>
        <Text fontSize="lg" mt={4}>
          Our objective is to promote a love for reading and provide access to a
          diverse range of literature, covering various genres and topics.
        </Text>
        <Text fontSize="lg" mt={4}>
          At our store, we cater to both wholesale and retail customers,
          ensuring that everyone can enjoy the pleasure of reading at affordable
          prices.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} fontSize='40px'>
          Overall Strategy
        </Heading>
        <Text fontSize="lg">
          <Text as="span" fontWeight="bold">Mission:</Text> Our mission is to cultivate a community of readers by providing access
          to diverse literature and fostering a love for reading. We aim to
          curate a thoughtful selection of books that inspire, educate, and
          entertain readers of all ages and interests. Through our commitment to
          excellence in customer service and our dedication to promoting
          literacy, we strive to be a trusted destination where book lovers can
          discover new stories, connect with fellow readers, and explore the
          endless possibilities of the written word.
        </Text>
        <Text fontSize="lg" mt={4}>
          <Text as="span" fontWeight="bold">Vision:</Text> Our vision is to be the premier destination for book lovers, known for
          our expansive selection, exceptional service, and commitment to
          fostering a vibrant literary community. We aspire to create a
          welcoming space where people of all backgrounds can come together to
          explore, learn, and connect through the power of books. By embracing
          innovation and embracing the evolving needs of our customers, we aim
          to continuously enhance the reading experience and inspire a lifelong
          love for learning and storytelling.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} fontSize='40px'>
          Company Products
        </Heading>
        <Text fontSize="lg">
          At our book store, we take pride in offering a diverse range of
          materials catering to various interests and needs. Our extensive
          collection includes books covering subjects such as:
        </Text>
        <List styleType="disc" ml={6}>
          <ListItem>Education</ListItem>
          <ListItem>Recreation</ListItem>
          <ListItem>Information</ListItem>
          <ListItem>Business</ListItem>
          <ListItem>Economics</ListItem>
          <ListItem>Science</ListItem>
          <ListItem>Politics</ListItem>
          <ListItem>Law</ListItem>
          <ListItem>And Many more</ListItem>
        </List>
        <Text fontSize="lg" mt={4}>
          We also provide products exclusively available online through our website.
          Readers worldwide can order both hard and soft copies of these books,
          expanding our reach and ensuring accessibility to literature for all.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} fontSize='40px'>
          Moving Forward
        </Heading>
        <Text fontSize="lg">
          We are dedicated to growing and developing along the way to satisfy
          the community's and readers' ever-changing demands. Our priorities
          still remain supplying top-notch customer service, growing our
          selection of products, and promoting an inclusive and innovative
          culture.
        </Text>
        <Text fontSize="lg" mt={4}>
          In the future, we can't wait to investigate fresh chances for
          development and cooperation. We are certain that we can have a good
          influence and carry on being a reliable resource for book lovers
          worldwide with the help of our committed staff and devoted clientele.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} fontSize='40px'>
          Our Pride
        </Heading>
        <Text fontSize="lg">
          We take immense pride in our role as a cornerstone of the literary
          community. Our dedication to curating a diverse selection of books,
          providing exceptional service, and fostering a welcoming environment
          for readers of all backgrounds sets us apart.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={4} fontSize='40px'>
          Ready to read with us..
        </Heading>
        <Text fontSize="lg">
          Visit our website's book store to explore a curated selection of
          books, connect with fellow readers, and experience storytelling magic
          for knowledge, entertainment, or inspiration.
        </Text>
      </Box>
    </Box>
  );
}

export default AboutUs;
