// for home page
import React, { useEffect } from 'react'
import {
    Container,
    Box,
    Text,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel
} from '@chakra-ui/react'
import Login from '../Components/Authentication/Login';
import SignUp from '../Components/Authentication/SignUp';
import { useHistory } from 'react-router-dom';


const HomePage = () => {

    const history = useHistory();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));


        if (user) history.push("/chats");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);

    return (

        <Container maxW='xl' centerContent> {/* Helps to make the project responsive*/}

            {/* We use chakra Ui tags instead of normal Ui tags because we can add inline styling inside the tag itself*/}


            {/* heading part */}
            <Box
                d='flex'
                justifyContent='center'
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            > {/* same as div*/}
                <Text
                    fontSize="4xl"
                    fontFamily="work sans"
                    color="black"
                    fontWeight='bold'
                >Chattingz</Text>

            </Box>

            {/* signup part */}
            <Box
                bg="white"
                w="100%"
                p={4}
                borderRadius="lg"
                borderWidth="1px">

                {/* for tabs - for switching between login and signup */}
                <Tabs variant='soft-rounded'
                    color='black'>
                    <TabList mb='1em'>
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container >
    )
}

export default HomePage