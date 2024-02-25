import { Fragment } from "react"
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Box
} from "@chakra-ui/react"

const Hero = () => {
  return (
    <>
      <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14}>
        <Stack direction={{ base: "column", md: "row" }}>
          <Stack direction="column" spacing={10} justifyContent="center">
            <chakra.h1
              fontSize="5xl"
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
            >
              Learn
              <chakra.span
                bgGradient="linear(to-br, #228be6, #15aabf)"
                bgClip="text"
              >
                {" "}
               New Skills{" "}
              </chakra.span>{" "}
              <br /> Prove Your Potential
            </chakra.h1>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize="lg"
              textAlign="left"
              fontWeight="400"
              maxW="700px"
            >
              Revolutionize your learning experience with our cutting-edge ZIRA. Access a diverse range of courses anytime, anywhere. Engage with expert instructors, interactive content, and collaborative tools. Elevate your skills, advance your career, and embrace a flexible, personalized learning journey. Join us on the path to knowledge and success.
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 0, sm: 2 }}
              flexWrap="wrap"
            >
              <chakra.button
                h={12}
                px={6}
                bgGradient="linear(to-br, #228be6, #15aabf)"
                color="white"
                _hover={{ bgGradient: "linear(to-br, #228be6, #228be6)" }}
                variant="solid"
                size="lg"
                rounded="md"
                fontWeight="bold"
                mb={{ base: 2, sm: 0 }}
              >
                <chakra.span> Get started </chakra.span>
              </chakra.button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Box overflow="hidden">
        <svg
          fill={useColorModeValue("#f7fafc", "#171923")}
          width="150%"
          height="56px"
          transform="scaleX(-1)"
          filter="drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 
            250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 
            3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`}
          ></path>
        </svg>
      </Box>
    </>
  )
}

export default Hero
