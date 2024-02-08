import React, { useState } from 'react';
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useNavigate } from 'react-router-dom';
import {
    ChakraProvider, Box, Heading, Text, Input, Stack, FormControl, InputGroup, InputRightElement, IconButton, Button, Link,
} from "@chakra-ui/react";

const SignupPage = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("")
    const [contactNumber, setcontactNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [formError, setFormError] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormError([]);

        const formData = {
            name: fullName,
            email: email,
            password: password,
            contact_number: contactNumber,
        };

        try {
            console.log("API URL:", `${import.meta.env.VITE_APP_BASE_URL}/users/register`);
            const response = await axios.post(
                `${import.meta.env.VITE_APP_BASE_URL}/users/register`,
                formData
            );
            console.log("User Registered Successfully");
            navigate("/login");
        } catch (error) {
            console.error("Registration Failed:", error)

            if (error.response && error.response.data && error.response.data.error) {
                const errorMessage = error.response.data.error;
                console.log("Backend error:", errorMessage);
                setFormError([errorMessage])
            } else {
                console.error("Unexpected error occurred:", error)
                console.log("Full error response from backend:", error.response.data)
                setFormError(error.response.data)
            }
        }
    }

    return (
        <ChakraProvider>
            <Box
                maxW="md"
                mx="auto"
                mt={10}
                p={8}
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                bg="white"
            >
                <Heading fontSize="2xl" fontWeight="bold" color="teal.500" textAlign="center" mb={4}>
                    Sign Up
                </Heading>
                <Text fontSize="sm" color="gray.600" textAlign="center" mb={6}>
                    Create a new account to get started
                </Text>

                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl>
                            <Input
                                type="text"
                                value={fullName}
                                onChange={(e) => setfullName(e.target.value)}
                                required
                                placeholder="Full Name"
                            />
                        </FormControl>

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
                            <Input
                                type="tel"
                                value={contactNumber}
                                onChange={(e) => setcontactNumber(e.target.value)}
                                required
                                placeholder="Contact Number"
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

                        <FormControl>
                            <InputGroup>
                                <Input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    placeholder='Confirm Password'
                                />
                                <InputRightElement>
                                    <IconButton
                                        variant="ghost"
                                        colorScheme='teal'
                                        icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />} onClick={handleToggleConfirmPassword} />
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <Button type="submit" colorScheme="teal" size="md" width="100%">
                            Create Account
                        </Button>
                        <Text
                            textAlign="center"
                            mt={2}
                            fontSize="sm"
                            fontFamily="cursive"
                        >
                            Already have an account? {' '}
                            <Link onClick={() => navigate("/login")}>Login</Link>
                        </Text>
                    </Stack>
                </form>
            </Box>
        </ChakraProvider>
    );
};

export default SignupPage;
