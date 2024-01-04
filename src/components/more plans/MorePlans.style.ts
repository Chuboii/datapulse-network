import styled from 'styled-components'

type BgProp = {
  bg: string;
}

type DisplayProp = {
  display: string;
}

export const Container = styled.div<DisplayProp>`
  /* position: fixed;
  right: 0;
  top: 5rem; */
  width:100%;
  padding: 1rem;
  margin-top: 6rem;
  margin: 0;
    padding:0;
    width:100%;
overflow:hidden;
position:fixed;
top: ${({display}) => display};
right: 0;
transition: all .5s;
bottom:0;
background-color:rgb(8, 8, 8) ;
z-index: 5000;
  @media screen and (max-width:768px){
    margin: 0;
    padding:0;
    width:100%;
overflow:hidden;
  }
`
export const Header = styled.div`
 color:gray;
  font-family: "Kanit";
  padding: 1rem;
  
    @media screen and (max-width:768px){
    display: flex;
    align-items: center;
    padding: 1rem;
  }
`
export const Wrapper = styled.div`
 display:flex;
 
  @media screen and (max-width:768px){
    width:100%;
    display: flex;
flex-wrap: wrap;
padding:1rem;
  }
 
`
export const Text = styled.div`
 font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width:768px){
    font-size:12px;
  }
`
export const Tab = styled.div<BgProp>`
 margin: .3rem .7rem;
  width:100px;
  cursor: pointer;
  height: 100px;
   display:flex;
   background:${({bg}) => bg};
   flex-direction:column;
   border:1px solid rgba(255, 255, 255, 0.1);
   justify-content: center;
   align-items: center;
   padding:.5rem;
  border-radius: 7px 25px 7px 7px;
  
  @media screen and (max-width:768px){
   
    height:100px;
    margin:0 .3rem;
    padding: 1.5rem 1.4rem;
    margin:.5rem;
  }
`
export const Data = styled.div`
 font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width:768px){
    font-size:12px;
  }
`
export const Price = styled.div`
 font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;
  display:flex;
  align-items:center;
 
`
export const Img = styled.img`
 width:15px;
 margin-right: .2rem;
 height:15px;
`
export const Span = styled.div`
 font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;
  margin:.5rem 0;
    @media screen and (max-width:768px){
    font-size:12px;
  }
`
export const Button = styled.button`
  width:50%;
  padding:1.5rem;
  color:#146CB3;
  text-transform:uppercase;
  border-radius: 7px 25px 7px 7px;
`
export const Wrap = styled.div`
  display:flex;
  flex-wrap: wrap;
  width:100%
  
`
export const Icon = styled.div`
  background:#141414;
  margin-right: 1rem;
  border-radius: 50%;
  display:flex;
  width:40px;
  height:40px;
  justify-content:center;
  align-items: center;
`