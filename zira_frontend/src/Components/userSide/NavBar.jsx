import React from 'react';
import { Box, Flex, Link, Button, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser} from '../../Redux/userActions'

// Main Navbar component
const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logging Out...");
    localStorage.clear();
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <Box boxShadow="md" p={4} bg="transparent">
      <Flex alignItems="center" justifyContent="space-between">
        <Link
          href="/"
          fontSize="3xl"
          fontWeight="bold"
          _hover={{ textDecoration: 'none', opacity: 0.8 }}
          fontFamily="Arial, sans-serif"
          letterSpacing="0.1em" // Adjust letter spacing
          lineHeight="1.5"
        >
          ZIRA
        </Link>

        <Flex alignItems="center" fontWeight="bold">
          <Link
            href="#"
            mr={4}
            _hover={{ textDecoration: 'none', color: 'teal.500' }}
            fontSize="lg"
          >
            HOME
          </Link>
          <Link
            href="#"
            mr={4}
            _hover={{ textDecoration: 'none', color: 'teal.500' }}
            fontSize="lg"
          >
            ABOUT
          </Link>
          <Link
            href="#"
            mr={4}
            _hover={{ textDecoration: 'none', color: 'teal.500' }}
            fontSize="lg"
          >
            LEARN
          </Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'teal.500' }} fontSize="lg">
            CATALOG
          </Link>
        </Flex>

        <Flex>
          {user && user.user && user.user.id ? (
            <Menu>
              <MenuButton>
            <Avatar size="sm" name='User' src=''/>
            </MenuButton>
            <MenuList>
              <MenuItem fontWeight="bold" textAlign="center" justifyContent="center">{user.user.name}</MenuItem>
              <MenuItem  onClick={() => navigate("/userprofile")} >Go to Profile</MenuItem>
              <MenuItem>Subscriptions</MenuItem>
              <MenuItem>Notifications</MenuItem>
              <MenuItem>Password</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
            </Menu>
          ) : (
            <>
              <Button
                variant="outline"
                colorScheme="teal"
                mr={3}
                _hover={{ bg: 'teal.500', color: 'white' }}
                transition="background-color 0.3s, color 0.3s"
                borderRadius="full"
                onClick={() => navigate("/login")}
              >
                LOGIN
              </Button>
              <Button
                colorScheme="teal"
                _hover={{ bg: 'teal.500', color: 'white' }}
                transition="background-color 0.3s, color 0.3s"
                borderRadius="full"
                onClick={() => navigate("/register")}
              >
                REGISTER
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
