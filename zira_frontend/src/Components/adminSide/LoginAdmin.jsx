import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../Redux/userActions';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  Box,
  Heading,
  Input,
  Stack,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';

const LoginAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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

      const userId = response.data.user.id;
      dispatch(fetchUser(userId)).then(() => {
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        console.log('Admin login success', response.data)
        navigate('/homeadmin');
      });

    } catch (error) {
      setError('Invalid Admin email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={20}
      p={10}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      bg="transparent"
    >
      <Heading fontSize="3xl" fontWeight="bold" color="teal.500" textAlign="center" mb={6}>
        Admin Login
      </Heading>

      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
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
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
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

          <Button
            type="submit"
            color="white"
            bg="teal.500"
            size="lg"
            width="100%"
            isLoading={loading}
            borderRadius="full"
            _hover={{ bg: 'teal.600' }}
          >
            {loading ? 'Logging In...' : 'Login'}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginAdmin;
