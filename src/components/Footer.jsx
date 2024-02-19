import React from 'react';
import { Box, Container, Stack, Text, Link, Icon, HStack, Divider, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <Box
      bg='rgb(8, 64, 97)'
      color='white'
      mt="auto"
      py={{ base: 4, md: 5 }}
    >
      <Container as={Stack} maxW={'6xl'} spacing={4}>
        <Divider borderColor='wine.red' my={4} />

        <VStack spacing={4}>
          
         

          <HStack spacing={{ base: 3, md: 6 }} justify="center">
            <Link href="https://facebook.com" isExternal><Icon as={FaFacebookF} w={15} h={15} /></Link>
            <Link href="https://twitter.com" isExternal><Icon as={FaTwitter} w={15} h={15} /></Link>
            <Link href="https://instagram.com" isExternal><Icon as={FaInstagram} w={15} h={15} /></Link>
            <Link href="https://www.tiktok.com" isExternal><Icon as={SiTiktok} w={15} h={15} /></Link>
          </HStack>
        </VStack>

        <Text textAlign="center" fontSize="sm" mt={4}>
          © {new Date().getFullYear()} Developed by Gichia,Eugene,Edith, Chris, Gideon.
        </Text>
        <Text textAlign="center" fontSize="sm">
          Powered by React Js.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
