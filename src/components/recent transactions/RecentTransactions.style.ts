import styled from "styled-components"

export const Container = styled.div`
padding:1rem .5rem;
background:rgb(8, 8, 8);
margin-bottom:7rem;
position: relative;

`



export const Wrapper = styled.div`
  border-bottom:1px solid rgba(255,255,255,.3);
  padding:1rem 0;
`
export const Text = styled.div`
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
margin-left:.7rem;
  &:last-child{
    position:absolute;
    right:.5rem;
  }

@media screen and (max-width:768px){
margin-left:.7rem;
  &:last-child{
    position:absolute;
    right:.5rem;
  }
}
`
export const Header = styled.header`
margin-bottom:1rem;
font-family: 'Archivo Black';
`
export const Wrap = styled.div`
display:flex;
position:relative;
`
export const Success = styled.div`
  font-family: "Kanit";
  color:green;
  font-size:13px;
`
export const Button = styled.button`
  margin:1rem auto;
  color: white;
  position:absolute;
  left:50%;
  transform:translate(-50%);
  margin-top:1.5rem;
`
export const WrapBox = styled.div`

`
export const Contain = styled.div`

`

export const BoxWrap = styled.div`

`

export const H2 = styled.h2`

`
export const Failure = styled.div`
    font-family: "Kanit";
  color:red;
  font-size:13px;
`