import React from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
} from '@chakra-ui/react';

const initialValues = {
  name: '',
  email: '',
  location: '',
  message: '',
};

const onSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    setSubmitting(true);
    const response = await fetch('https://json-server-vercel-zeta-puce.vercel.app/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...values,
        TagNo: null,
      }),
    });
    const responseData = await response.json();
    console.log('Form submitted successfully:', responseData);
    resetForm();
    alert('Form submitted successfully!');
  } catch (error) {
    console.error('Form submission failed:', error);
    alert('Form submission failed. Please try again later.');
  } finally {
    setSubmitting(false);
  }
};

const validate = values => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Please enter your name';
  }
  if (!values.email) {
    errors.email = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }
  if (!values.message) {
    errors.message = 'We want to hear from you...';
  }
  return errors;
};

function ContactUs() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Box maxW="x1" mx="auto" p={6} borderWidth="1px" borderRadius="100%" boxShadow="md">
  <Heading as="h3" size="lg" textAlign="center" mb={4}>Contact Us</Heading>
  <form onSubmit={formik.handleSubmit}>
    <Flex justify="center"> {/* Centering the form */}
      <VStack spacing={4} backdropBlur='60px' bgColor="rgb(8, 64, 97)" w="50%" p={6} borderRadius="9%"> {/* Adjusted width */}
        <FormControl id="name" isInvalid={formik.touched.name && formik.errors.name}>
        <FormLabel fontSize="30px">Name</FormLabel>

          <Input
            type="text"
            name="name"
            placeholder="Enter your name..."
            onChange={formik.handleChange}
            value={formik.values.name}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
            }}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl id="email" isInvalid={formik.touched.email && formik.errors.email}>
        <FormLabel fontSize="30px">Email</FormLabel>

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
            }}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl id="location">
        <FormLabel fontSize="30px">Location</FormLabel>

          <Input
            type="text"
            name="location"
            placeholder="Enter your location"
            onChange={formik.handleChange}
            value={formik.values.location}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
            }}
          />
        </FormControl>

        <FormControl id="message" isInvalid={formik.touched.message && formik.errors.message}>
        <FormLabel fontSize="30px">Message</FormLabel>

          <Textarea
            name="message"
            placeholder="Type your message here..."
            onChange={formik.handleChange}
            value={formik.values.message}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
            }}
          />
          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="red" isLoading={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </VStack>
    </Flex>
  </form>
</Box>

  );
}

export default ContactUs;
