import * as React from "react";
import {
  ChakraProvider,
  Flex,
  theme,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex
      w="100vw"
      h="150"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      fontSize="xl"
      borderRadius="15px"
    >
      <Heading m="10">Github Profile Finder</Heading>
      <Flex>
        <Input w={350} h={30} placeholder="Github Username"></Input>
        <Button h={30} marginLeft={3}>
          확인
        </Button>
      </Flex>
    </Flex>
  </ChakraProvider>
);
