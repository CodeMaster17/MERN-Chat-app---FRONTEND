import React from "react";
import './chatPageChatBox.css'
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import ChatBox from "../Components/ChatBox";
import MyChats from "../Components/MyChats";
import SideDrawer from "../Components/Authentication/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();

    return (
        <div style={{ width: "100%" }}>
            {user && <SideDrawer />} {/*if user ios present then render this sidebar component */}



            <Box display="flex" direction="row" className="ChatPageChatBox" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && <MyChats className="MyChats" fetchAgain={fetchAgain} />}

                {user && (
                    <ChatBox className="ChatBox" fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                )}

            </Box>
        </div>
    );
};

export default Chatpage;