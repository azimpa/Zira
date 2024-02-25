import React from 'react';
import { Box, Flex, Link, Text, IconButton, Stack } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" mt="auto" py={8} bg="teal.900" color="white">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        maxW="container.xl"
        mx="auto"
      >
        <Stack spacing={4} direction="row" align="center">
          <Link href="#" _hover={{ textDecoration: 'none' }}>
            Home
          </Link>
          <Link href="#" _hover={{ textDecoration: 'none' }}>
            About
          </Link>
          <Link href="#" _hover={{ textDecoration: 'none' }}>
            Contact
          </Link>
        </Stack>

        <Stack spacing={4} direction="row" align="center">
          <IconButton
            as={Link}
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            _hover={{ color: 'teal.500' }}
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            _hover={{ color: 'teal.500' }}
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            _hover={{ color: 'teal.500' }}
          />
        </Stack>
      </Flex>

      <Text textAlign="center" mt={4} fontSize="sm">
        © 2024 Your Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
