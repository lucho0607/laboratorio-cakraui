import React from "react";
import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import bgImage from "../img/banner-labcha.jpg";

export default function Header() {
  return (
    <Box
      h="40vh"
      bg="gray"
      backgroundImage={`url(${bgImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100%"
        bg="rgb(0 0 0/50%)"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading
          color="white"
          textTransform="uppercase"
          textAlign="center"
          fontWeight="ligth"
          letterSpacing="5px"
        >
          Domina el terreno
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="40px"
          mt="30px"
          w={["100%", null, "auto"]}
        >
          <Button
            bg="rgb(0 0 0/50%)"
            variants="outline"
            size="lg"
            borderRadius="10"
            textTransform="uppercase"
            fontWeight="light"
            color="white"
            letterSpacing="1px"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            ver detalle
          </Button>
          <Button
            bg="rgb(0 0 0/50%)"
            variants="outline"
            size="lg"
            textTransform="uppercase"
            fontWeight="light"
            borderRadius="10"
            color="white"
            letterSpacing="1px"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            ver video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
