import React,{useState, useEffect} from 'react';
import MessageList from '../MessageList';
import MessageBody from '../MessageBody';
import faker from 'faker';
import { Container, RightSide , LeftSide } from '../../Components';

const MessageContainer = () => {

    const [ clickedAndUsername , setClickedAndUsername  ] = useState({ componentClicked : false , username : ""});
    const [ messages, setMessages ] = useState([])
    const fakeArray1 = [ 2,4,5,6,7,4,21,23,34,5,6,7,4,32,2,4,6,7,8,3,12,4,6,7,4]
    const fakeArray2 = [false,true,false,true]

    function pad(val){
        return (val<10) ? '0' + val : val;
   }

   const getTime = () => {
    let h = new Date(faker.time.recent()).getHours();
    let m = new Date(faker.time.recent()).getMinutes();
    let output = pad(h) + ':' + pad(m);
    return output; 
   }

   
    useEffect(() => {
        fakeArray1.map(() => {
            let tempmessages = [];
            let userName = faker.name.findName();
            let photo = `${faker.image.people()}?random=${Date.now()}`;
            fakeArray2.map((item) => {

               return  tempmessages.push({listOfMessages : faker.lorem.sentences(), time: getTime() , shuffle : item});
            })

            return setMessages( (prevState) =>  [...prevState , { username : userName, photo : photo , messageAndTime : tempmessages}])
    
        })

    },[])


    const handleComponentClicked = (username) => {
        setClickedAndUsername({ componentClicked : true , username : username});
   }


   const handleAddMessage = (newMessage) => {
  
     setMessages (prevState => prevState.map(eachMessage => 
    
 
            (clickedAndUsername.username === eachMessage.username ?
            
            {...eachMessage,messageAndTime: [...eachMessage.messageAndTime , {listOfMessages: newMessage,time: getTime(),shuffle:true}]}
            :
            eachMessage)

        ))}
   


    return (
        <Container>
        <LeftSide>
        <MessageList messages = {messages} handleComponentClicked={handleComponentClicked}/>
        </LeftSide>
        <RightSide>
         <MessageBody
         handleAddMessage = {handleAddMessage} 
         username={clickedAndUsername.username} 
         messages = {messages}componentClicked={clickedAndUsername.componentClicked}/>
        </RightSide>
        </Container>
    );
}

export default MessageContainer