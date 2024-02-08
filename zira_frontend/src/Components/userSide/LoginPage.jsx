import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ChakraProvider, Box, Heading, Text, Input, Stack, FormControl, InputGroup, InputRightElement, IconButton, Button, Center, Link } from "@chakra-ui/react";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            email: email,
            password: password,
        };

        try {
            console.log("Form Data:", formData);
            // Add logic for handling login
        } catch (error) {
            console.error("Login Failed:", error);
            // Add error handling logic
        }
    }

    return (
        <ChakraProvider>
            <Box
                maxW="md"
                mx="auto"
                mt={20}
                p={8}
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                bg="white"
            >
                <Heading fontSize="2xl" fontWeight="bold" color="teal.500" textAlign="center" mb={4}>
                    Log In
                </Heading>
                <Text fontSize="sm" color="gray.600" textAlign="center" mb={6}>
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
                                placeholder="Email Address"
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

                        <Button type="submit" colorScheme="teal" size="md" width="100%">
                            Log In
                        </Button>
                        <Text
                            textAlign="center"
                            mt={2}
                            fontSize="sm"
                            fontFamily="cursive"
                        >
                            Don't have an account?{' '}
                            <Link href="/register">Sign Up</Link>
                        </Text>
                    </Stack>
                </form>
            </Box>
        </ChakraProvider>
    );
};

export default LoginPage;
