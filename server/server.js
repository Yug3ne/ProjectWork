const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST endpoint for checkout
app.post('/checkout', (req, res) => {
  // Extract form data from the request body
  const { customerInfo, paymentInfo } = req.body;
  
  // Log the form data received
  console.log('Received Customer Information:', customerInfo);
  console.log('Received Payment Information:', paymentInfo);
  
  // For demonstration, just send a success response
  res.status(200).json({ message: 'Checkout successful!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
