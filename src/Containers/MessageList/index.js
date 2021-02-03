import React from 'react';
import MessageHeader from '../MessageHeader';
import Messages from '../Messages';

const MessageList = ({handleComponentClicked,messages}) => {

    return(
        <>
        <MessageHeader/>
        <Messages messages={messages} handleComponentClicked={handleComponentClicked}/>
        </>
    )
}

export default MessageList;