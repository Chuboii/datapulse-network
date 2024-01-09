import styled from "styled-components";

interface TabProp {
  bg: string;
}

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
  word-wrap: break-word;
  text-align: center;
  margin:.5rem 0;
width: 100px;
  font-size: 11px;

  @media screen and (max-width:768px){
    font-size: 13px;
  }
`
export const Wrapper = styled.div`
 display:flex;
 max-width: 700px;
 overflow-x:scroll;
       @media screen and (max-width:768px){
       width:100%;
       overflow-y: hidden;
       overflow-x:scroll;
     }
`
//#FD8080
// #FECE57
//#50B651
//#D4E956
export const Img = styled.img`
   width:50px;
   height: 50px;
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
export const Tab = styled.div<TabProp>`
  margin: 0 .7rem;
  width:100px;
  cursor: pointer;
  height: 100px;
   display:flex;
   background:${({bg}) => bg};
   flex-direction:column;
   border:1px solid rgba(255, 255, 255, 0.1);
   justify-content: center;
   align-items: center;
   padding: 0.5rem;
  border-radius: 7px 25px 7px 7px;
 
  @media screen and (max-width:768px){
       width:130px;
       margin:0 .3rem;
       border-radius: 7px 20px 7px 7px;
     }
`