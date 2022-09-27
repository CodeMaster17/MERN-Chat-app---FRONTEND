import { React, useState } from 'react'
import { Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'


const SignUp = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const handleClick = () => setShow(!show);
    const postDetails = (pics) => { }
    const submitHandler = () => { }
    return (
        <VStack spacing='5px' color='black'> {/* V stack makes the content inside it as vertical stack */}
            <FormControl is='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter your Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            {/* for email */}
            <FormControl is='email' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            {/* for password */}
            <FormControl is='password' isRequired>
                <FormLabel>Password</FormLabel>
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
            <FormControl is='confirmpassword' isRequired>
                <FormLabel> Confirm Password</FormLabel>
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

            {/* for pic */}
            <FormControl id="pic">
                <FormLabel>Upload your picture</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}>
                Sign Up

            </Button>

        </VStack>
    )
}

export default SignUp