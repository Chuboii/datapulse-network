import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  padding:0;
  
  @media screen and (max-width:768px){
    position:relative;
    bottom:1rem;
  }
`
export const Text = styled.div`
  font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;
  margin:.5rem 0;
`
export const Wrapper = styled.div`
 display:flex;
 
       @media screen and (max-width:768px){
       width:100%;
       overflow-x:scroll;
     }
`
//#FD8080
// #FECE57
//#50B651
//#D4E956
export const Img = styled.img`
   width:60px;
   height: 60px;
       @media screen and (max-width:768px){
       width:35px;
       height:35px;
     }
`
export const Header = styled.div`
  color:gray;
  font-family: "Kanit";
  padding: 1rem .5rem;

`
export const Tab = styled.div`
  margin: 0 .7rem;
  width:100px;
  cursor: pointer;
  height: 100px;
   display:flex;
   background:#141414;
   flex-direction:column;
   border:1px solid rgba(255, 255, 255, 0.1);
   justify-content: center;
   align-items: center;
   padding: 0.5rem;
  border-radius: 7px 25px 7px 7px;
     
  @media screen and (max-width:768px){
       width:200px;
       margin:0 .3rem;
       border-radius: 7px 20px 7px 7px;
     }
`