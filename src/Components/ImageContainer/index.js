import styled from 'styled-components';

export const ImageContainer = styled.div`
height:  "50px";
width:50px;
margin-left: ${ props => props.chatBody ? "30px" : "3px"};
margin-top: ${ props => props.chatBody ? "8px" : "5px"};
margin-bottom: ${ props => props.chatBody ? "2px" : "3px"};
margin-right:${ props => props.chatBody ? "6px" : "0px"};
background-image: url(${props => props.image});
background-size: cover;
display: block;
border-radius: 25px;
-webkit-border-top-left-radius: 25px;
-moz-border-top-left-radius: 25px;
border-bottom-right-radius: 25px;
-webkit-border-bottom-right-radius: 25px;
-moz-border-bottom-right-radius: 25px;

`

