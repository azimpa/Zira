import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiCategory } from "react-icons/bi";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { CiMemoPad } from "react-icons/ci";
import { BsCalendarCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/userActions";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.clear();
    dispatch(logoutUser());
    navigate("/loginadmin");
  };

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg="palegoldenrod"
      w="60"
    >
      <VStack h="full" w="full" alignItems="flex-start" justifyContent="space-between">
        <Box w="full">
          <Flex px="4" py="3" align="center">
            <Text fontSize="4xl" ml="7" color="sienna" fontWeight="bold">
              ZIRA
            </Text>
          </Flex>
          <Flex direction="column" as="nav" fontSize="md" aria-label="Main Navigation">
            <NavItem icon={AiOutlineHome}>Dashboard</NavItem>
            <NavItem icon={AiOutlineTeam}>Users</NavItem>
            <NavItem icon={FaPeopleGroup}>Instructors</NavItem>
            <NavItem icon={BiCategory}>Categories</NavItem>
            <NavItem icon={FaBookOpen}>Courses</NavItem>
            <NavItem icon={CiMemoPad}>Banner</NavItem>
            <NavItem icon={BsCalendarCheck}>Subscriptions</NavItem>
          </Flex>
        </Box>

        <Flex px="9" py="3" mt={10} justifyContent="center" alignItems="center">
          <Menu>
            <MenuButton
              as={Button}
              size={"sm"}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              _hover={{ textDecoration: "none" }}
            >
              <Avatar size={"sm"} name="Asim" src="https://avatars2.githubusercontent.com/u/37842853?v=4" />
            </MenuButton>
            <MenuList fontSize={15} zIndex={5555}>
              <MenuItem as={Link} to="#">
                My profile
              </MenuItem>
              <MenuItem as={Link} to="#">
                Change password
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </VStack>
    </Box>
  );
};

const NavItem = (props) => {
  const color = useColorModeValue("gray.600", "gray.300");
  const { icon, children } = props;

  return (
    <Flex
      align="center"
      px="8"
      py="5"
      cursor="pointer"
      role="group"
      fontWeight="bold"
      transition=".15s ease"
      color="Black"
      _hover={{
        bg: useColorModeValue("lightyellow"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="5"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

export default SideBar;
