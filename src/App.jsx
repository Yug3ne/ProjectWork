
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"; // AboutUs Component import
import BookDetails from "./components/BookDetails";
import Checkout from "./components/Checkout";
import { Box } from '@chakra-ui/react'
import ContactUs from "./components/ContactUs"

function App() {
 return (
    <>
      <div className="App">
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box flex="1" p={10}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book/:id" element={<BookDetails/>}/>
         <Route path="/cart" element={<Cart />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </Box>
        <Footer />
        </Box>
      </div>
    </>
  );
}

export default App;
