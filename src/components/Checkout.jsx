import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";

export default function Checkout({ cartTotal }) {
  const Navigate = useNavigate()
  // Define validation schema for customer information
  const customerInfoSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    city: Yup.string().required("City is required"),
  });

  // Define validation schema for payment information
  const paymentInfoSchema = Yup.object().shape({
    cardNumber: Yup.string().required("Card Number is required"),
    cvc: Yup.string().required("CVC is required"),
    month: Yup.string().required("Expiry Month is required"),
    year: Yup.string().required("Expiry Year is required"),
  });

  // Function to calculate total price from cart data
  function calculateTotalPrice() {
    if (!cartTotal) return 0;
    return cartTotal.reduce((total, item) => total + item.price, 0);
  }
 calculateTotalPrice()
  // Function to handle form submission
  async function onSubmit(values, actions) {
    try {
      // Include cartData in the form values
      const formData = { ...values, cartTotal };

      // Submit form data to server
      const response = await fetch("https://json-server-vercel-zeta-puce.vercel.app/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if server response is successful
      if (!response.ok) {
        throw new Error("Error submitting form");
      }

      // Log success messages
      console.log("Form submitted successfully!");
      alert("Payment has been recieved")
      Navigate("/")
    } catch (error) {
      // Log error if submission fails
      console.error("Error submitting form:", error);
    } finally {
      // Reset form submission state
      actions.setSubmitting(false);
    }
  }

  return (
    <Center mt={8}>
      <Box
        className="checkout-container"
        p={20}
        borderWidth="1px"
        boxShadow="lg"
        fontSize="30px"
        w="50vw"
        fontWeight="bold"
        borderRadius="20px"
        bg="rgb(2, 49, 75)"
      >
        <Center>
          <Heading as="h2" mb={4} fontSize="30PX">
            Checkout
          </Heading>
        </Center>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            zipCode: "",
            city: "",
            cardNumber: "",
            cvc: "",
            month: "",
            year: "",
          }}
          validationSchema={Yup.object().shape({
            ...customerInfoSchema.fields,
            ...paymentInfoSchema.fields,
          })}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              {/* Customer Information */}
              <Center>
                <Box mb={8}>
                  <Heading as="h3" mb={4}>
                    Customer Information
                  </Heading>
                  <FormControl id="firstName" mb={3}>
                    <FormLabel fontSize="20px">First Name</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      name="firstName"
                      style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }}
                    />

                    <ErrorMessage
                      name="firstName"
                      component={Text}
                      color="red"
                    />
                  </FormControl>
                  <FormControl id="lastName" mb={3}>
                    <FormLabel fontSize="20px">Last Name</FormLabel>
                    <Field as={Input} type="text" name="lastName"  style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }} />
                    <ErrorMessage
                      name="lastName"
                      component={Text}
                      color="red"
                    />
                  </FormControl>
                  <FormControl id="email" mb={3}>
                    <FormLabel fontSize="20px">Email</FormLabel>
                    <Field as={Input} type="email" name="email"  style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }}/>
                    <ErrorMessage name="email" component={Text} color="red" />
                  </FormControl>
                  <FormControl id="address" mb={3}>
                    <FormLabel fontSize="20px">Address</FormLabel>
                    <Field as={Input} type="text" name="address"  style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }}/>
                    <ErrorMessage name="address" component={Text} color="red" />
                  </FormControl>
                  <FormControl id="zipCode" mb={3}>
                    <FormLabel fontSize="20px">Zip Code</FormLabel>
                    <Field as={Input} type="text" name="zipCode"  style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }}/>
                    <ErrorMessage name="zipCode" component={Text} color="red" />
                  </FormControl>
                  <FormControl id="city" mb={3}>
                    <FormLabel fontSize="20px">City</FormLabel>
                    <Field as={Input} type="text" name="city"  style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }}/>
                    <ErrorMessage name="city" component={Text} color="red" />
                  </FormControl>
                </Box>
              </Center>

              {/* Payment Information */}
              <Center>
                <Box mb={8}>
                  <Heading as="h3" mb={4}>
                    Payment Information
                  </Heading>
                  <FormControl id="cardNumber" mb={3}>
                    <FormLabel>Card Number</FormLabel>
                    <Field as={Input} type="text" name="cardNumber"  style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }}/>
                    <ErrorMessage
                      name="cardNumber"
                      component={Text}
                      color="red"
                    />
                  </FormControl>
                  <FormControl id="cvc" mb={3}>
                    <FormLabel>CVC</FormLabel>
                    <Field as={Input} type="text" name="cvc"  style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }}/>
                    <ErrorMessage name="cvc" component={Text} color="red" />
                  </FormControl>
                  <FormControl id="month" mb={3}>
                    <FormLabel>Expiry Month</FormLabel>
                    <Field as={Input} type="text" name="month"  style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }}/>
                    <ErrorMessage name="month" component={Text} color="red" />
                  </FormControl>
                  <FormControl id="year" mb={3}>
                    <FormLabel>Expiry Year</FormLabel>
                    <Field as={Input} type="text" name="year" style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                      }} />
                    <ErrorMessage name="year" component={Text} color="red" />
                  </FormControl>
                </Box>
              </Center>

              {/* Complete Checkout and Pay button */}
              <Center>
                <Button
                  type="submit"
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  disabled={!isValid}
                >
                  Complete Checkout and Pay
                </Button>
              </Center>
            </Form>
          )}
        </Formik>

        {/* Total Price */}
        
      </Box>
    </Center>
  );
}
