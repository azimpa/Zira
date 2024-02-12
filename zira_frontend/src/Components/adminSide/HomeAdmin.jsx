import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  VStack,
  Drawer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { CiMemoPad } from "react-icons/ci";
import { BsCalendarCheck } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

export default function HomeAdmin() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <Box as="section" bg={useColorModeValue("gray.50", "gray.700")} minH="100vh">
      {/* Sidebar */}
      <SidebarContent display={{ base: "none", md: "unset" }} />

      {/* Drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        {/* Header */}
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          d={{ base: "flex", md: "none" }}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          bg={useColorModeValue("white", "gray.800")}
          justifyContent={{ base: "space-between", md: "flex-end" }}
          boxShadow="lg"
          h="14"
        >
          {/* Menu Icon */}
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />
        </Flex>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ ...props }) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("palegoldenrod", "gray.800")}
    borderColor={useColorModeValue("inherit", "gray.700")}
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <VStack
      h="full"
      w="full"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Box w="full">
        <Flex px="4" py="5" align="center">
          <Text fontSize="4xl" ml="8" color="teal" fontWeight="bold">
            ZIRA
          </Text>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="md"
          color="black"
          aria-label="Main Navigation"
        >
          <NavItem icon={AiOutlineHome}>Dashboard</NavItem>
          <NavItem icon={AiOutlineTeam}>Users</NavItem>
          <NavItem icon={FaPeopleGroup}>Instructors</NavItem>
          <NavItem icon={FaBookOpen}>Courses</NavItem>
          <NavItem icon={CiMemoPad}>Banner</NavItem>
          <NavItem icon={BsCalendarCheck}>Subscriptions</NavItem>
        </Flex>
      </Box>

      <Flex px="4" py="5" mt={10} justifyContent="center" alignItems="center">
        <Menu>
          <MenuButton
            as={Button}
            size={"sm"}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            _hover={{ textDecoration: "none" }}
          >
            <Avatar
              size={"sm"}
              name="Asim"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
            />
          </MenuButton>
          <MenuList fontSize={15} zIndex={5555}>
            <MenuItem as={Link} to="#">
              My profile
            </MenuItem>
            <MenuItem as={Link} to="#">
              Change password
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </VStack>
  </Box>
);

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
