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
  const [keyword, setKeyword] = React.useState("");
  const getUserData = async () => {
    const response = await axios.get(`https://api.github.com/users/${keyword}`);
    console.log(response);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = () => {
    getUserData();
  };
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
          <Input
            w={350}
            h={30}
            placeholder="Github Username"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <Button h={30} marginLeft={3} onClick={handleSubmit}>
            확인
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
export default App;
