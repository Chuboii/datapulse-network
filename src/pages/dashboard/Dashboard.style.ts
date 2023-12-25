import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width:768px){
       display:block;
       width:100%;
       padding:.5rem;
     }
`

export const Wrapper = styled.div`
  width: 100%;
  
     @media screen and (max-width:768px){
       width:"";
     }
`

// export const Box = styled.div`
// display: flex;
//   position: relative;
//   justify-content: space-between;
  
//      @media screen and (max-width:768px){
//        display:block;
//      }

// `