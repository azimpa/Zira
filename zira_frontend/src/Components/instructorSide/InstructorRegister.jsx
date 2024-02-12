import React, { useState } from 'react';
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Input,
  Stack,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Link,
} from "@chakra-ui/react";

const InstructorRegister = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState([]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError([]);

    const formData = {
      name: fullName,
      email: email,
      password: password,
      contact_number: contactNumber,
      is_instructor: true,
    };

    try {
      console.log("API URL:", `${import.meta.env.VITE_APP_BASE_URL}/users/register`);
      console.log("Form Data:", formData);

      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/users/register`,
        formData
      );
      console.log("Instructor Registered Successfully");
      navigate("/logininstructor");
    } catch (error) {
      console.error("Registration Failed:", error);

      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        console.log("Backend error:", errorMessage);
        setFormError([errorMessage]);
      } else {
        console.error("Unexpected error occurred:", error);
        console.log("Full error response from backend:", error.response.data);
        setFormError(error.response.data);
      }
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      bg="transparent"
    >
      <Heading fontSize="2xl" fontWeight="bold" color="teal.500" textAlign="center" mb={4}>
        Sign Up
      </Heading>
      <Text fontSize="sm" color="gray.600" textAlign="center" mb={6}>
        Begin your journey as an instructor by creating a new account. Join our e-learning platform to share your expertise and inspire learners.
      </Text>

      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Full Name"
              variant="filled"
              borderRadius="full"
            />
          </FormControl>

          <FormControl>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
              variant="filled"
              borderRadius="full"
            />
          </FormControl>

          <FormControl>
            <Input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              placeholder="Contact Number"
              variant="filled"
              borderRadius="full"
            />
          </FormControl>

          <FormControl>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                variant="filled"
                borderRadius="full"
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  colorScheme="teal"
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  onClick={handleTogglePassword}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl>
            <InputGroup>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder='Confirm Password'
                variant="filled"
                borderRadius="full"
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  colorScheme='teal'
                  icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  onClick={handleToggleConfirmPassword}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button type="submit" colorScheme="teal" size="md" width="100%" borderRadius="full">
            Create Account
          </Button>
          <Text
            textAlign="center"
            mt={2}
            fontSize="sm"
            fontFamily="cursive"
            color="teal.500"
          >
            Already have an account?{' '}
            <Link color="teal.500" onClick={() => navigate("/logininstructor")}>
              Login
            </Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default InstructorRegister;
