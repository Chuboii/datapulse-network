import styled from "styled-components";

export const Container = styled.div`
     width: 45%;
     padding: 1rem;
     display: flex;
     flex-direction: column;

  @media screen and (max-width:768px){
    width:100%;
  }
`
export const Wrap = styled.div`
  
`
export const Icons = styled.div`
   margin:1rem auto;
`
export const Follow = styled.div`
  color:#A6ABBC;
  text-align: center;
`
export const Text = styled.div`
  text-align: center;
  margin: 1rem 0;
`
export const H2 = styled.h1`
  color:#A6ABBC;
  font-family: 'Archivo Black';
  font-size: 35px;
  margin:.5rem 0;
`
export const Trusted = styled.div`
  color:#FABA52;
  font-family: "Archivo Black";
`
export const Button = styled.div`
  background:#1973E8;
  color:white;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor:pointer;
  font-family: 'Archivo Black';
  &:last-child{
    background:#23262F;
    color:#777E90;
  }
`
export const Img = styled.img`
background: white;
padding: .3rem .6rem;
border-radius: 10px;

`
export const Span = styled.div`
  margin-left: 1rem;
`