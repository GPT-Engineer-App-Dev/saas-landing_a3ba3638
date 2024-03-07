import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Make work <br />
          <Text as={"span"} color={"blue.400"}>
            beautifully simple
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Our SaaS platform helps you streamline your business processes for better efficiency and peace of mind. Discover a better way to work with our all-in-one solution.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }} rightIcon={<FaArrowRight />}>
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Image rounded={"md"} alt={"feature image"} src={"https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzA5ODIxMDU1fDA&ixlib=rb-4.0.3&q=80&w=1080"} objectFit={"cover"} />
        </Flex>
      </Stack>

      {/* Feature Section */}
      <Stack spacing={{ base: 10, md: 20 }} py={{ base: 20, md: 28 }}>
        <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={"space-between"} alignItems={"center"}>
          <Box flex={1}>
            <Image rounded={"md"} alt={"feature image"} src={"https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzA5ODIxMDYwfDA&ixlib=rb-4.0.3&q=80&w=1080"} objectFit={"cover"} />
          </Box>
          <VStack flex={1} spacing={{ base: 5, md: 10 }} align={"flex-start"} ml={{ md: 10 }}>
            <Heading>Detailed Reports</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Get comprehensive insights into your business performance with our detailed reporting tools. Analyze data, track progress, and make informed decisions with ease.
            </Text>
            <Button rounded={"full"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }} rightIcon={<FaArrowRight />}>
              Learn more
            </Button>
          </VStack>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
