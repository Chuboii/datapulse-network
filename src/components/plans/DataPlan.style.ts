import styled from 'styled-components'

type BgProp = {
  bg: string;
}
export const Container = styled.div`
  /* position: absolute;
  right: 0;
  top: 5rem; */
  width:100%;
  padding: 1rem;
  margin-top: 6rem;
  position:relative;
    margin: 0;
    padding:0;
  @media screen and (max-width:768px){
    position:relative;
    margin: 0;
    padding:0;
  }
`
export const Header = styled.div`
 color:gray;
  font-family: "Kanit";
  padding: 1rem;
  
    @media screen and (max-width:768px){
    
    padding: 0 .5rem;
  }
`
export const Wrapper = styled.div`
 display:flex;
 width:65%;
 align-items: center;
  @media screen and (max-width:768px){
    margin-top:1rem;
    width:100%;
  }
 
`
export const Text = styled.div`
 font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;
  font-size: 13px;

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
   padding: 0.5rem;
  border-radius: 7px 25px 7px 7px;
  
  @media screen and (max-width:768px){
    width:190px;
    height:80px;
    margin:0 .3rem;
    padding: 3rem .9rem;

  }
`
export const Data = styled.div`
 font-family: "Kanit";
  text-transform: uppercase;
  text-align: center;
  font-size: 11px;
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
  font-size: 15px;
  @media screen and (max-width:768px){
    font-size:12px;
  }
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
 max-width:250px;
 width:100%;
 padding: 0;
 height:70px;
 color: white;
   @media screen and (max-width:768px){
    width:50%;
  }
`

export const Wrap = styled.div`
  display:flex;
  overflow:hidden;
  width:100%;

  @media screen and (max-width:768px){
    margin-right: .4rem;
  }
`