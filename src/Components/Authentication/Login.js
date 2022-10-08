import React from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";


const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",    //making the request to /api/user/login
        { email, password },
        config
      );

      // console.log(JSON.stringify(data));

      // if the login is successful then a pop up from bottom
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data)); //storing in local storage
      setLoading(false);
      history.push("/chats"); //pushing it to chats page
    } catch (error) { //otherwise throwing an error
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing='5px' color='black'> {/* V stack makes the content inside it as vertical stack */}
      {/* for email */}
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      {/* for password */}
      <FormControl id='password' isRequired>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder='Enter your Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputRightElement width="4.5rem" >
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      d
      {/* submit button not working */}
      <Button
        colorScheme="blue"
        width="100%"
        color="white"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login

      </Button>
      <Button
        colorScheme="red"
        variant="solid"
        width="100%"
        color="white"
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456")
        }}

      >
        Get Guest User Credentials

      </Button>

    </VStack>
  )
}

export default Login