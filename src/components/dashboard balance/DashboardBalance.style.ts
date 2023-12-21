import styled from "styled-components";


export const Container = styled.div`
 padding: 1rem;
 margin-top: 6rem;
     @media screen and (max-width:768px){
       margin-top:4rem;
     }
 
`
export const Text = styled.div`
  font-family: "Kanit";
  font-size: 28px;
  color: gray;
  
  @media screen and (max-width:768px){
    font-size:15px;
    width:150px;
  }
`
export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right:.3rem;
`
export const Digits = styled.div`
 display: flex;
align-items: center;
font-family: "Kanit";
font-size: 25px;
`