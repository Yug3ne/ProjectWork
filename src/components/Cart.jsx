import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
// import Station from "./station";
import {
  Box,
  Image,
  Grid,
  GridItem,
  Heading,
  Button,
  Center,
 
  Text,
 
} from "@chakra-ui/react";


function Cart() {
  const navigate = useNavigate()
  const [cart, setCart] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    fetchCartItems();
  }, []);

  async function fetchCartItems() {
    try {
      const response = await fetch('https://json-server-vercel-zeta-puce.vercel.app/cart');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error fetching Books:", error);
    }
  }

  async function removeFromCart(bookId) {
    try {
      const response = await fetch(`https://json-server-vercel-zeta-puce.vercel.app/cart/${bookId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
      // After successful deletion, fetch the updated cart items
      await fetchCartItems();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  }

  useEffect(() => {
    // Calculate cart total whenever cart changes
    const total = cart.reduce((acc, book) => acc + book.price, 0);
    setCartTotal(total);
  }, [cart])

  const handleCheckout = async function(){
    if(cart.length <= 0){
      alert("Add an Item to Cart")
    }else{
      navigate('/checkout', {cartTotal})
    }
  }

  return (
   <>
    <Box>
      {cart.length === 0 ? (
        <Center py={20}>
          
          <Text fontSize="lg">Cart is Empty</Text>
        </Center>
      ) : (
        
        <Grid mt={5} templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={5} marginX={50}>
        {cart.map((book) => (
          <GridItem key={book.id} as="div" boxShadow="md" borderRadius="8px" p="4" cursor="pointer" border="2px solid #e2e8f0" bg="rgb(8, 64, 97)">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" _hover={{ transform: 'scale(1.05)' }}>
              <Image
               
                src={book.image_url}
                alt={book.title}
                objectFit="cover"
                width="full"
                height="200px"
                borderRadius="8px"
              />
              <Box mt="4">
                <Heading as="h3" fontSize="md" color="white" fontWeight="semibold" textAlign="center">
                  {book.title}
                </Heading>
                <Text>
                  Total :{book.price}
                </Text>
                <Button colorScheme="primary" size="xs" onClick={() => removeFromCart(book.id)}>
                  Remove from Cart
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
      )}
    </Box>
    <Text>
      Cart Total: {cartTotal}
    </Text>
    <Box>
    <Button
              position='relatve'
              right={0}
              top='10%'
              mr={[0, 4]}
              w="full"
              maxW="150px"
              onClick={handleCheckout}
            >
              CheckOut
            </Button>
    </Box>
    </>
  );
}

export default Cart;
