import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
position: fixed;
inset: 0;
top:0px;

background-color:black;
z-index: 1000;
padding:5rem 1rem;
`

export const Text = styled.div`
  font-family: "Kanit";
text-align: center;
`

export const Image = styled.img`
width: 100px;
`
export const Success = styled.div`
font-size: 30px;
font-family: 'Archivo Black';
`
export const Button = styled.button`
margin-top: 1rem;
background-color: #146CB3;
padding:1rem;
width: 300px;
`