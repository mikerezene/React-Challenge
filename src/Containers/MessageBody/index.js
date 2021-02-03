import React, { useState ,useEffect} from 'react';
import { UserInfo , ChatBody,FormContainer, ImageContainer,InputStyle,Button,TextViewContainer,MessagesTobeScrolled } from '../../Components';
import TextareaAutosize from 'react-textarea-autosize'
import sendButton from '../../assets/send.png';
import faker from 'faker';
import moment from 'moment'

const MessageBody = ({componentClicked , handleAddMessage,messages, username}) => {

    const [inputText , setInputText] = useState("");

    const handleChange = (e) => {
          setInputText(e.target.value)
    }

    useEffect( () => {

    },[])

    // image={() => allData.username === username ? allData.photo : ""}
 
    return (
      <>
      
      <UserInfo>
{
    messages.map((eachData) => {
    if(eachData.username === username){
        return (

            <ImageContainer chatBody = {true} image={eachData.photo} >
            </ImageContainer>
        )

    }
}
    )
          
}
          <span style={{ fontWeight: "bold", fontSize: 20, paddingTop:15 }}>{username}</span>
      </UserInfo>
         
      <ChatBody componentClicked =  {componentClicked}>
          { !componentClicked && <p> Click to Chat to start messaging</p>}
         { 
           componentClicked && 
           <>
           <MessagesTobeScrolled>

            { messages.map((allData) => {
                return (
                    <>
                    
                { allData.username === username ? 
                    allData.messageAndTime.map((eachMessageAndTime) =>    (  
                        <TextViewContainer fromMe={eachMessageAndTime.shuffle}>
                        <TextareaAutosize disabled>
                            {eachMessageAndTime.listOfMessages} 
                         </TextareaAutosize>
                        </TextViewContainer>
                
                        
                    )) : 
                        <>
                        </>
                    

                }
            
                </>
                )
            }
        )}

         </MessagesTobeScrolled>
         
    <FormContainer>
    <InputStyle value={inputText}onChange={handleChange }placeholder="Write your message here"/>
    <div onClick={() => handleAddMessage(inputText)}>
    <img src= {sendButton} style={{ width:40}}/>
  </div>

    </FormContainer>
    </>
}
      </ChatBody>
      </>
    );
}

export default MessageBody;