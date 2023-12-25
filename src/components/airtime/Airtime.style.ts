import styled from "styled-components";

export const Wrapper = styled.div`
   display:flex;
   flex-direction: column;
   padding:0 .5rem;
   width: 60%;
   
 @media screen and (max-width:768px){
   display:flex;
   flex-direction: column;
   padding:0 .5rem;
   width: 100%;
 }
`

export const Input = styled.input`
  width:100%;
  margin-right:.6rem;
  padding:1.3rem 1rem;
  background:#141414;
  border:none;
  border-radius:7px;
`
export const Header = styled.header`
 margin-bottom:1rem;
`