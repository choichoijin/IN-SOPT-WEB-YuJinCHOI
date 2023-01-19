import * as React from "react";
import axios from "axios";
import {
  ChakraProvider,
  Flex,
  theme,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";

function App() {
  const getUserData = async () => {
    const response = await axios.get(
      "https://api.github.com/users/choichoijin"
    );
    console.log(response);
  };
  getUserData();
  return (
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
}
export default App;
