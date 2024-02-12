import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../Redux/userActions';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
  Link
} from '@chakra-ui/react';
import axios from 'axios';

const InstructorLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    const formData = {
      email: email,
      password: password,
    };

    try {
      console.log('API URL:', `${import.meta.env.VITE_APP_BASE_URL}/users/login`);
      console.log('Form Data:', formData);

      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/users/login`,
        formData
      );
      const userid = response.data.user.id;
      dispatch(fetchUser(userid));
      console.log('Instructor login success', response.data);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      console.log(response.data);
      navigate('/homeinstructor');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={20}
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      bg="transparent"
    >
      <Heading fontSize="3xl" fontWeight="bold" color="teal.500" textAlign="center" mb={4}>
        Log In
      </Heading>
      <Text fontSize="md" color="gray.600" textAlign="center" mb={6}>
        Welcome back! Log in to your account.
      </Text>

      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="filled"
              placeholder="Email Address"
              borderRadius="full"
            />
          </FormControl>

          <FormControl>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="filled"
                placeholder="Password"
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

          <Button
            type="submit"
            colorScheme="teal"
            size="md"
            width="100%"
            isLoading={loading}
            borderRadius="full"
          >
            {loading ? 'Logging In...' : 'Login'}
          </Button>

          <Text textAlign="center" mt={2} fontSize="sm" fontFamily="cursive" color="teal.500">
            Don't have an account?{' '}
            <Link href="/registerinstructor" color="teal.500">
              Sign Up
            </Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default InstructorLogin
