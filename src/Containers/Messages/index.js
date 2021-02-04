import React from 'react';


import {ItemContainer,ImageContainer,ScrollContainer,MessageContentContainer,TimeStampContainer} from '../../Components'

const Messages = ({handleComponentClicked,messages}) => {

   const  checkCharacterCounter = (input) => {

      if(input.length > 30){
          return input.slice(0,33) + "...";
      }

      return input;
   }


    return (
        <ScrollContainer>
      { messages.map((eachMessage) => (
       <ItemContainer onClick={ () => handleComponentClicked(eachMessage.username)}>

            <ImageContainer chatBody={false} image = {eachMessage.photo}>
            </ImageContainer>

            <MessageContentContainer>
            <div style={{fontWeight: 'bold', fontSize: 14}}>{eachMessage.username}</div>
                {console.log("This is the list of Messages",eachMessage)}
                <span style={{ fontSize: 10}}>{checkCharacterCounter(eachMessage.messageAndTime.slice(-1)[0].listOfMessages) }</span>
            </MessageContentContainer>

            <TimeStampContainer>
                <div style={{ fontSize: 9}}>{eachMessage.messageAndTime.slice(-1)[0].time}</div>
            </TimeStampContainer>

        </ItemContainer>
       ) 
    )
    }
    </ScrollContainer>
    )
}

export default Messages;