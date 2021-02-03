import styled from 'styled-components';


export const ChatBody = styled.div`
width: 100%;
height: 91%;
text-align : ${props =>  props.componentClicked ? "left" : "center"};
line-height: ${props =>  props.componentClicked ? "0px" : "500px"};
`