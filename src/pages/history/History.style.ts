import styled from "styled-components"

export const Container = styled.div`
padding:.5rem;
background:black;
margin-bottom:7rem;
z-index: 100;
position: relative;
background:rgb(8, 8, 8);
width:100%;
@media screen and (min-width:768px){
  background:#080808;
display: flex;
}
`
export const Nothing = styled.div`
margin-top:5rem;
color:white;
font-family: 'Archivo Black';
`
export const H2 = styled.h2`
margin-left: .6rem;
font-size: 20px;
`

export const Wrapper = styled.div`
  border-bottom:1px solid rgba(255,255,255,.3);
  padding:1rem 0;
  
  @media screen and (min-width:768px){
    padding:1rem;
}
`
export const Contain = styled.div`
  margin-top: 5rem;
  
  @media screen and (min-width: 768px){
    margin:0;
  }

`
export const Text = styled.div`
   font-family: "Kanit";
    font-weight:700;
    font-size:13px;

@media screen and (max-width:768px){
    font-family: "Kanit";
    font-weight:700;
    font-size:13px;
}
`
export const Img = styled.img`
  width:40px;
  height:40px;
  border-radius:50%;
`
export const Time = styled.div`
   color:gray;
font-family: "Kanit";
font-size:11px;
`
export const DateTime = styled.div`
   color:gray;
   font-family: "Kanit";
   margin-bottom:1rem;
`
export const Box = styled.div`

@media screen and (min-width:768px){
width: 100%;
}
`

export const WrapBox = styled.div`
 display: flex;
 justify-content:space-between;

`
export const Header = styled.header`
margin-bottom:.5rem;
display: flex;
padding-left: 1rem;
font-family: 'Archivo Black';
border-bottom:1px solid rgba(255,255,255,.3);
position: fixed;
top: 0;
background: rgb(8, 8, 8, 0.09);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
left: 0;
right: 0;

@media screen and (min-width:768px){
  position: sticky;
}
`
export const Wrap = styled.div`
display:flex;
position:relative;
align-items: center;
`
export const Success = styled.div`
  font-family: "Kanit";
  color:green;
  font-size:13px;
`

export const BoxWrap = styled.div`
  margin-left: 1rem;

`
export const Failure = styled.div`
    font-family: "Kanit";
  color:red;
  font-size:13px;
`