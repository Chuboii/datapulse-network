import styled from 'styled-components'

export const Container = styled.div`
  /* position: absolute;
  right: 0;
  top: 5rem; */
  max-width:450px;
  width:100%;
  padding: 1rem;
  margin-top: 6rem;
  overflow: hidden;
  max-height: 500px;

  @media screen and (max-width:768px){
    position:relative;
  }
`
export const Header = styled.div`
 color:gray;
  font-family: "Kanit";
  padding: 1rem;
`
export const Wrapper = styled.div`
 display:flex;
 flex-wrap:wrap;
 
`
export const Text = styled.div`
 font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;

`
export const Tab = styled.div`
 margin: .3rem .7rem;
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
`
export const Data = styled.div`
 font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;

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
`
