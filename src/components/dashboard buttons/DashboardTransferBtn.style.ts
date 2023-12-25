import styled from "styled-components";

export const Container = styled.div`
 display:flex;
 padding:.5rem;
 
@media screen and (max-width:768px){
       width:100%;
     }
`
export const Button = styled.button`
   display:flex;
     width:250px;
     justify-content:center;
     padding:1rem 0;
     margin-right:.5rem;
     color: gray;
     align-items: center;

     &:last-child{
      background-color: #146CB3;
      color:white;
     }
     @media screen and (max-width:768px){
       width:100%;
       
       padding:.8rem 0;
       
       &:first-child{
         width:50%;
       }
     }
     

`
export const Span = styled.span`
 margin-left:  .5rem;
`
export const Icon = styled.div`
  transform: rotate(-30deg);
`