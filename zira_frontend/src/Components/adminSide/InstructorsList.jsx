import React, { useState, useEffect } from 'react';
import {
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Flex,
  Td,
  Button,
  Stack,
} from '@chakra-ui/react';

import SideBar from './SideBar';
import api from '../../Services/api';

export default function InstructorsList() {
  const [instructors, setInstructors] = useState([]);

  const fetchInstructors = async () => {
    try {
      const response = await api.get(
        `${import.meta.env.VITE_APP_BASE_URL}/adminzira/instructorlist`
      );
      setInstructors(response.data);
    } catch (error) {
      console.error('Error fetching instructors', error);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  const handleToggleInstructor = async (instructorId) => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_APP_BASE_URL}/adminzira/instructorstatus/${instructorId}/`
      );
      setInstructors((prevInstructors) =>
        prevInstructors.map((instructor) =>
          instructor.id === instructorId
            ? { ...instructor, is_Approved: !instructor.is_Approved }
            : instructor
        )
      );
      await fetchInstructors();
    } catch (error) {
      console.error('Error toggling instructor status:', error);
    }
  };

  const sortedInstructors = [...instructors].sort((a, b) => a.id - b.id);

  return (
    <Box as="section" bg="transparent" minH="100vh">
      {/* SideBar */}
      <SideBar />

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
        mb="6"
      >
      </Flex>

      <Box p="3">
        <Box
          bg="white"
          borderRadius="lg"
          p={6}
          boxShadow="lg"
          ml={{ base: 0, md: 60 }}
        >
          <Stack spacing={6} align="center">
            <Text
              textAlign="center"
              fontSize="3xl"
              fontWeight="bold"
              color="teal"
            >
              INSTRUCTOR MANAGEMENT
            </Text>

            <Table variant="simple" size="md">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone Number</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>

              <Tbody>
                {sortedInstructors.map((instructor) => (
                  <Tr key={instructor.id}>
                    <Td>{instructor.id}</Td>
                    <Td>{instructor.name}</Td>
                    <Td>{instructor.email}</Td>
                    <Td>{instructor.contact_number}</Td>
                    <Td>{instructor.is_approved ? 'Approved' : 'Unapproved'}</Td>
                    <Td>
                      <Button
                        size="sm"
                        colorScheme={instructor.is_approved ? 'red' : 'green'}
                        onClick={() => handleToggleInstructor(instructor.id)}
                      >
                        {instructor.is_approved ? 'Refuse' : 'Approve'}
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
