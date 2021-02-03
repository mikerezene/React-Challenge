import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const  TextViewContainer = styled.div`

    >textarea {
    box-sizing: border-box;         /* Opera/IE 8+ */
    overflow:hidden;
    width: 50%;
    margin-top:3%;
    padding-top: 8px;
    padding-left: 30px;
    color:black;
    margin-left:${props => props.fromMe ? "45%" : "5%"};
    resize: none;
    background-color:${props => props.fromMe ? "rgba(209,1,224,255)" : "white"  };
    border-radius: 25px;
    border: 1px solid black;

}

`