import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 1rem;
  width:80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @media screen and (max-width:768px){
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:100%;
  }
`