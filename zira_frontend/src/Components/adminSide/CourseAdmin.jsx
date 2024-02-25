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

export default function CourseAdmin() {
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const response = await api.get(
                `${import.meta.env.VITE_APP_BASE_URL}/instructor/courses`
            );
            setCourses(response.data);
            console.log(response.data, "courses")
        } catch (error) {
            console.error('Error fetching courses', error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleToggleCourse= async (courseId) => {
        console.log(courseId,"courseidddd")
        try {
            const response = await api.patch(
                `${import.meta.env.VITE_APP_BASE_URL}/adminzira/coursestatus/${courseId}/`
            );
            setCourses((prevCourse) =>
                prevCourse.map((course) =>
                    course.id === courseId ? { ...course, is_Active: !course.is_Active } : course
                )
            );
            await fetchCourses();
        } catch (error) {
            console.error('Error toggling Course status:', error);
        }
    };

    const sortedCourses = [...courses].sort((a, b) => a.id - b.id);

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
                            COURSE MANAGEMENT
                        </Text>

                        <Table variant="simple" size="md">
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>Title</Th>
                                    <Th>Description</Th>
                                    <Th>Language</Th>
                                    <Th>Duration</Th>
                                    <Th>Price</Th>
                                    <Th>Level</Th>
                                    <Th>Status</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {sortedCourses.map((course) => (
                                    <Tr key={course.id}>
                                        <Td>{course.id}</Td>
                                        <Td>{course.title}</Td>
                                        <Td>{course.description}</Td>
                                        <Td>{course.language}</Td>
                                        <Td>{course.duration}</Td>
                                        <Td>{course.price}</Td>
                                        <Td>{course.level}</Td>
                                        <Td>{course.is_active ? 'Active' : 'Blocked'}</Td>
                                        <Td>
                                            <Button
                                                size="sm"
                                                colorScheme={course.is_active ? 'red' : 'green'}
                                                onClick={() => handleToggleCourse(course.id)}
                                            >
                                                {course.is_active ? 'Block' : 'Unblock'}
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
