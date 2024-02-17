import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import SideBar from "./SideBar";

export default function HomeAdmin() {
  return (
    <Box as="section" bg="snow" minH="100vh">

      {/* SideBar */}
      <SideBar display={{ base: "none", md: "unset" }} />

      {/* Main*/}
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        {/* Header */}
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          d={{ base: "flex", md: "none" }}
          bg="white"
          justifyContent={{ base: "space-between", md: "flex-end" }}
          boxShadow="lg"
          h="12"
        >
        </Flex>
      </Box>
    </Box>
  );
}
