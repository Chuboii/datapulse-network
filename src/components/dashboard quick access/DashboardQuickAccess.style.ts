import styled from "styled-components";


interface ActiveProp {
    active: string;
}

export const Container = styled.div`
padding:1rem .5rem;
 max-width:60%;
  
  @media screen and (max-width:768px){
       padding:1rem 0;
       max-width: 100%;
       width: 100%;
     }
 
`
export const Tab = styled.div<ActiveProp>`
  background:${({active}) => active};
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  margin: 0 .5rem;
  width: 200px;
  border-radius: 10px;
  
  @media screen and (max-width:768px){
    margin:0 .3rem;
    width: 180px;
  }
`
export const Header = styled.header`
   display: flex;
   align-items:center;

`
export const Icon = styled.div`
 display: flex;
 justify-content: center;
  align-items: center;
  margin-right: .5rem;
`
export const Span = styled.span`
 font-family: "Kanit";
 font-size:18px;
 color:#4ED77C;
  @media screen and (max-width:768px){
    font-size:13px;
  }
`
export const Text = styled.div`
 font-family: "Kanit";
`
export const Wrapper = styled.div`
  display:flex;
  margin-top: .8rem;
  justify-content:space-between;
  
 @media screen and (max-width:768px){
       overflow-x:scroll;
     }
`