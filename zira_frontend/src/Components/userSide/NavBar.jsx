import React from 'react'
import {
    Box,
    Flex,
    Input,
    IconButton,
    InputGroup,
    InputRightElement,
    Button,
    Avatar,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FiSearch, FiLogIn, FiUser, FiLogOut } from "react-icons/fi";

const NavBar = () => {
    
  // Replace the following with your authentication state
  const isAuthenticated = false; // Set to true if the user is authenticated
  const user = {
    name: "John Doe",
    // Add other user information if needed
  };

  return (
    <Box as="header" borderBottom="1px" borderColor="gray.200" p="4">
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        wrap="wrap"
        borderColor="black"
      >
        {/* Logo */}
        <Box>
          <a href="/">
            <img
              src="/your-logo.png" // Replace with your logo path or use Chakra UI `Image` component
              alt="Logo"
              height="40px"
            />
          </a>
        </Box>

        {/* Search Bar */}
        <InputGroup maxW="400px">
          <Input
            type="text"
            placeholder="Search..."
            borderColor={useColorModeValue("gray.300", "gray.700")}
            bg="white"
          />
          <InputRightElement>
            <IconButton
              icon={<FiSearch />}
              variant="ghost"
              color="gray.500"
              aria-label="Search"
            />
          </InputRightElement>
        </InputGroup>

        {/* Profile and Authentication Buttons */}
        <Flex align="center">
          {isAuthenticated ? (
            <>
              {/* User Profile */}
              <Box mx="4">
                <Avatar
                  size="sm"
                  name={user.name}
                  src={user.avatar} // Add the user's avatar URL or use Chakra UI `Image` component
                />
              </Box>

              {/* Log Out Button */}
              <Button
                leftIcon={<FiLogOut />}
                variant="link"
                onClick={() => {
                  // Handle log out logic
                }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              {/* Sign In Button */}
              <Button
                leftIcon={<FiLogIn />}
                variant="outline"
                onClick={() => {
                  // Handle sign-in logic
                }}
              >
                Sign In
              </Button>

              {/* Sign Up Button */}
              <Button
                ml="2"
                colorScheme="teal"
                onClick={() => {
                  // Handle sign-up logic
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar
