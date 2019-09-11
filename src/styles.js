import styled from 'styled-components';

export const Container = styled.div `
display:flex;
flex-direction:column;
width:400px;
height: 500px;
background-color: blue;
`;


export const Head = styled.header `
width: ${props =>  `${props.width}`};
height: ${props =>  `${props.height}`};
background-color: red;
display: flex;
align-items: center;
`;