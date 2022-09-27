//  for chat page
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ChatPage = () => {
    const [chats, setChats] = useState([]);
    // api call to fetch chats from backend
    const fetchChats = async () => {
        const { data } = await axios.get("/api/chat"); // {data} means destructuring the data
        setChats(data); // to change the data of chats 
    };
    useEffect(() => {
        fetchChats();
    }, []);
    return (
        <div>
            {chats.map((chat) => (<div key={chat._id}>
                {chat.chatName}
            </div>))}
        </div>
    )

}




export default ChatPage