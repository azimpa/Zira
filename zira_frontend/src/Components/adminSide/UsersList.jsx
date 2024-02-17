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

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await api.get(
        `${import.meta.env.VITE_APP_BASE_URL}/adminzira/userlist`
      );
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleUser = async (userId) => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_APP_BASE_URL}/adminzira/userstatus/${userId}/`
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, is_Active: !user.is_Active } : user
        )
      );
      await fetchUsers();
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  const sortedUsers = [...users].sort((a, b) => a.id - b.id);

  return (
    <Flex minH="100vh">
      {/* SideBar */}
      <SideBar />

      <Box w="100%" bg="transparent">
        <Flex
          as="header"
          align="center"
          justifyContent="space-between"
          boxShadow="lg"
          h="16"
          bg="white"
          mb="6"
          w="100%"
        >
          {/* Header Content Goes Here */}
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
                USER MANAGEMENT
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
                  {sortedUsers.map((user) => (
                    <Tr key={user.id}>
                      <Td>{user.id}</Td>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.contact_number}</Td>
                      <Td>{user.is_active ? 'Active' : 'Blocked'}</Td>
                      <Td>
                        <Button
                          size="sm"
                          colorScheme={user.is_active ? 'red' : 'green'}
                          onClick={() => handleToggleUser(user.id)}
                        >
                          {user.is_active ? 'Block' : 'Unblock'}
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
    </Flex>
  );
}
