import React, { useState } from 'react';
import { UserInfo , ChatBody,FormContainer, ImageContainer,InputStyle,TextViewContainer,MessagesTobeScrolled } from '../../Components';
import TextareaAutosize from 'react-textarea-autosize'
import sendButton from '../../assets/send.png';

const MessageBody = ({componentClicked , handleAddMessage,messages, username}) => {

    const [inputText , setInputText] = useState("");

    const handleChange = (e) => {
          setInputText(e.target.value)
    }

    const handleSubmit = () => {
        setInputText("",handleAddMessage(inputText))
    }

    return (

        <>
        {
        !componentClicked && <p style={{  textAlign:"center",marginTop: 300}}> Click to Chat to start messaging</p>}
                                            
            {messages.map((allData) => {

                if(allData.username === username){

                    return(
                        <>
                        <UserInfo>
                            <ImageContainer chatBody = {true} image={allData.photo} >
                            </ImageContainer>
                            <span style={{ fontWeight: "bold", fontSize: 20, paddingTop:15 }}>{username}</span>
                        </UserInfo>
                        <ChatBody componentClicked =  {componentClicked}>

                        {  componentClicked &&
                        <>
           <MessagesTobeScrolled>
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
                        </MessagesTobeScrolled>
                            <FormContainer>
                            <InputStyle value={inputText}onChange={handleChange }placeholder="Write your message here"/>
                            <div onClick={handleSubmit}>
                            <img src= {sendButton} style={{ width:40}} alt="icon"/>
                          </div>
                        
                            </FormContainer>
                            </>
                        }
                        </ChatBody>
                        </>
                    )
                }
                return (
                    <>
                    </>
                )
            })
        }
        </>
    )
}

export default MessageBody;