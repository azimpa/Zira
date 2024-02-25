import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import api from '../../Services/api'
import {
  Box,
  Flex,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Select,
  FormLabel,
  Text,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  ModalHeader,
} from "@chakra-ui/react";
import SideBarIns from "./SideBarIns";

export default function CourseInstructor() {
  const instructorDetails = useSelector((state) => state.user);
  console.log(instructorDetails, "instructor details")

  const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);
  const [level, setLevel] = useState("");
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState([])
  const [formError, setFormError] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setIsEditMode(false);
    setCourseEdit(null);
    setTitle("");
    // setCategory("");
    setDescription("");
    setLanguage("");
    setDuration("");
    setPrice(0);
    setLevel("");
    setImage(null);
    setThumbnail(null);
    setVideo([]);
  };

  const onOpen = () => setIsOpen(true);
  const [course, setCourse] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [courseEdit, setCourseEdit] = useState(null);

  const fetchCourse = async () => {
    try {
      const response = await api.get(
        `${import.meta.env.VITE_APP_BASE_URL}/instructor/courses`
      );
      setCourse(response.data);
      console.log("Courses details", response.data.courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  const handleSubmit = async () => {
    setFormError([]);

    if (!title || !description || !language || !duration || !level || !price) {
      setFormError(["Please fill in all required fields"]);
      setTimeout(() => setFormError([]), 5000);
      return;
    }

    const formData = new FormData();
    formData.append("instructor", instructorDetails.user.id)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("language", language)
    formData.append("duration", duration)
    formData.append("level", level)
    formData.append("price", price)
    formData.append("image", image);
    formData.append("thumbnail", thumbnail);
    formData.append("video", video);

    console.log('First Form Data:', formData);


    try {
      if (isEditMode) {
        console.log('API URL Patch:', `${import.meta.env.VITE_APP_BASE_URL}/instructor/courses`);
        console.log('Form Data patch:', formData);

        const response = await api.patch(
          `${import.meta.env.VITE_APP_BASE_URL}/instructor/courses/${courseEdit.id}/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Plan Updated Successfully");
      } else {
        console.log('API URL POST:', `${import.meta.env.VITE_APP_BASE_URL}/instructor/courses`);
        console.log('Form Data post:', formData);

        const response = await api.post(
          `${import.meta.env.VITE_APP_BASE_URL}/instructor/courses`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Course Added successfully")
      }

      onClose();
      fetchCourse();
      setTitle("");
      // setCategory("");
      setDescription("");
      setLanguage("");
      setDuration("");
      setPrice(0);
      setLevel("");
      setImage(null);
      setThumbnail(null);
      setVideo([]);

      Swal.fire({
        icon: "success",
        title: isEditMode
          ? "Course updated successfully"
          : "New Course added successfully",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 400) {
        setFormError(["Title already exists. Please choose a different title."]);
      } else {
        setFormError(["An error occurred. Please try again."]);
      }
    }
  };

  const handleEdit = (courseId) => {
    setIsOpen(true);
    setIsEditMode(true);
    const courseEdit = course.find((course) => course.id === courseId);
    setCourseEdit(courseEdit);
    setTitle(courseEdit.title);
    setDescription(courseEdit.description);
    setLanguage(courseEdit.language);
    setDuration(courseEdit.duration);
    setLevel(courseEdit.level);
    setPrice(courseEdit.price);
    console.log("Course Edit mode", courseEdit)
  }


  const handleDelete = async (courseId) => {
    Swal.fire({
      title: `Are you sure want to delete the plan with id ${courseId} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await api.delete(
            `${import.meta.env.VITE_APP_BASE_URL}/instructor/courses/${courseId}/`,
          );
          fetchCourse();
        } catch (error) {
          console.log(error);
        }
      }
    })
  }

  return (
    <>
    <Box as="section" minH="100vh">
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
        {/* Additional header content can be added here if needed */}
      </Flex>

        <Box p="3">
          <Box
            bg="white"
            borderRadius="lg"
            p={6}
            boxShadow="lg"
            ml={{ base: 0, md: 60 }}
          >
            <Text textAlign="center" fontSize="3xl" color="teal.500" fontWeight="bold">
              COURSE MANAGEMENT
            </Text>
            <Center>
              <Box m={4} w="100%" bg="white" borderRadius="md">
                <Table variant="simple" size="sm" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>ID</Th>
                      <Th>Title</Th>
                      <Th>Description</Th>
                      <Th>Language</Th>
                      <Th>Duration</Th>
                      <Th>Price</Th>
                      <Th>Level</Th>
                      <Th>More</Th>
                      <Th>Actions</Th>
                      <Th>
                        <Button bgColor="teal" color="white" onClick={onOpen}>
                          Add New
                        </Button>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {course.map((course) => (
                      <Tr key={course.id}>
                        <Td>{course.id}</Td>
                        <Td>{course.title}</Td>
                        <Td>{course.description}</Td>
                        <Td>{course.language}</Td>
                        <Td>{course.duration}</Td>
                        <Td>{course.price}</Td>
                        <Td>{course.level}</Td>
                        <Td>
                          <Button bgColor="teal" color="white">
                            View
                          </Button>
                        </Td>
                        <Td>
                          <Button mr={3} bgColor="teal" color="white" onClick={() => handleEdit(course.id)}>
                            Edit
                          </Button>
                          <Button color="white" bgColor="red.500" onClick={() => handleDelete(course.id)}>
                            Delete
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                    {/* Additional rows can be added here */}
                  </Tbody>
                </Table>
              </Box>
            </Center>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                {formError.length > 0 && (
                  <Box mt={4} ml={5} color="red.500">
                    <ul>
                      {formError.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </Box>
                )}
                <ModalHeader>Add Plan</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <Input type="name" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Course title" />
                    <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} mt={5} placeholder="Enter Course Description" />
                    <Select value={language} onChange={(e) => setLanguage(e.target.value)} mt={5} placeholder="Select Course Language">
                      <option value="english">English</option>
                      <option value="malayalam">Malayalam</option>
                      <option value="tamil">Tamil</option>
                    </Select>
                    <Input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} mt={5} placeholder="Enter Course Duration" />
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} mt={5} placeholder="Enter Course Price" />
                    <Select value={level} onChange={(e) => setLevel(e.target.value)} mt={5} placeholder="Select Course Level">
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </Select>
                    <FormLabel htmlFor="image">Add Image:</FormLabel>
                    <Input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} mt={2} />

                    <FormLabel htmlFor="thumbnail">Add Thumbnail:</FormLabel>
                    <Input type="file" id="thumbnail" onChange={(e) => setThumbnail(e.target.files[0])} mt={2} />

                    <FormLabel htmlFor="video">Add Video:</FormLabel>
                    <Input type="file" id="video" onChange={(e) => setVideo(e.target.files[0])} mt={2} />
                  </FormControl>
                  <Center>
                    <Button bgColor={"purple"} color={"white"} mt={5} onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Center>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Box>
    </>
  );
}
