import React from "react";
import { Box, Flex} from "@chakra-ui/react";
import SideBarIns from "./SideBarIns";

export default function HomeInstructor() {
  return (
    <Box as="section" bg="transparent" minH="100vh">

      {/* SideBarIns */}
      <SideBarIns />

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
  );
}
