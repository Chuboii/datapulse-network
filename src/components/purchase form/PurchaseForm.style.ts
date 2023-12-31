import styled from "styled-components";

type BgProp = {
  bg: string;
}

export const Form = styled.form`
 width:60%;
   padding:1rem .5rem;
   margin-bottom:3rem;

 @media screen and (max-width:768px){
   width:100%;
   padding:1rem .5rem;
   margin-bottom:3rem;
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
export const Button = styled.button<BgProp>`
    width:100%;
    margin-top:1rem;
    padding:1rem;
    background:${({bg}) => bg};
    border:2px solid #0F2337;
    color:#0F2337;

  @media screen and (max-width:768px){
    width:100%;
    margin-top:1rem;
    padding:1rem;
    background:transparent;
    border:2px solid #0F2337;
    color:#0F2337;
  }
`
//#141414
export const Box = styled.div`
display: flex;
flex-wrap: wrap;
`
export const Numbers = styled.div`
  background-color: #141410;
 display: flex;
  margin-top:1rem;
  padding:.6rem 1rem;
  border-radius: 50px;
  font-family: 'Archivo Black';
`

export const Header = styled.header`

`
export const Contact = styled.div`
  background:#0F2337;
  padding:.6rem;
  border-radius:7px;
  display:flex;
   justify-content:space-between;
   align-items:center;
`
export const Wrap = styled.div`
display:flex;
   justify-content:space-between;
   align-items:center;
   margin-top:1rem;
 @media screen and (max-width:768px){
   display:flex;
   justify-content:space-between;
   align-items:center;
   margin-top:1rem;
 }
`