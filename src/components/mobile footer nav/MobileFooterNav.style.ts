import styled from "styled-components";

interface WrapProp {
  active: string;
}
export const Footer = styled.footer`
position:fixed;
bottom:0;
left:0;
right:0;
display:flex;
justify-content:space-between;
padding:.5rem 1rem;
background: rgb(8, 8, 8, 0.09);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
z-index:10;

@media screen and (min-width:768px){
    display:none;
}
`

export const Wrap = styled.div<WrapProp>`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color: ${({active}) => active};
`
export const Span = styled.span`

`
