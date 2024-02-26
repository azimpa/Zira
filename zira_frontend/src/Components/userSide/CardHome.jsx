import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';
import { fetchCourses } from '../../Services/apiUtils';

const CardHome = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesData = await fetchCourses();
                setCourses(coursesData);
            } catch (error) {
                console.error("Error fetching courses", error);
            }
        };

        fetchData();
    }, []);

    console.log(courses, "courses details")

    return (
        <Box p={2}>
            <Flex alignItems="center" direction="column" p={5}>
                <Heading fontSize="3xl" mb={4}>
                    COURSES
                </Heading>
                <Text fontWeight="bold" color="teal">Recommended for you</Text>
            </Flex>
            <Flex align="center" justify="center" h="80vh" mt={8}>
                {courses.map((course, index) => (
                    <Box
                        key={index}
                        maxW="md"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={4}
                        boxShadow="md"
                        bg="white"
                        w="22%"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                        mr={4}
                    >
                        <Flex align="center" justify="center" mb={8}>
                            <Image src={course.image} boxSize="150px" borderRadius="md" />
                        </Flex>
                        <Text fontSize="xl" fontWeight="bold" mb={2} align="center">
                            {course.title}
                        </Text>
                        <Text fontSize="sm" color="gray.500" mb={2} align="center">
                            {course.description}
                        </Text>
                        <Text fontSize="sm" color="gray.500" align="center" mb={2}>
                            Language: {course.language}
                        </Text>
                        <Text fontSize="sm" color="gray.500" align="center" mb={2}>
                            Duration: {course.duration}
                        </Text>
                        <Text fontSize="md" fontWeight="bold" mb={2} align="center">
                            ₹ {course.price}
                        </Text>
                        <Text fontSize="sm" color="gray.500" mb={2} align="center">
                            Level: {course.level}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default CardHome;
