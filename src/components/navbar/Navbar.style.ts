import styled from "styled-components";

interface WidthProps {
    width: string;
}
export const Nav = styled.nav<WidthProps>`
  height: 100dvh;
  background-color:#000000;
  border-right: 1px solid rgba(255,255,255,.2);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  transition:all .5s;
  position: sticky;
  left: 0;
  top:0;
  width:${({ width }) => width};
  
  @media screen and (max-width: 768px){
    display:none;
  }
`
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  font-family: "Kanit";
  font-size: 16px;
  margin: 1.5rem 0;
  transition: all .2s;
  padding: 1rem 1rem;
  &:hover{
background: rgba(255, 255, 255, 0.09);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
  }

`
export const Span = styled.span`
  margin-left: 1rem;
 
`
export const Wrapper = styled.div`
  margin-left: .5rem;
`
export const Text = styled.div`
  width: 200px;
  margin-left: 1rem;
`
export const Icon = styled.div`
  position: absolute;
  z-index: 2;
  top:.8rem;
  right: .4rem;

`
export const WrapDiv = styled.div`
margin-top: 3rem;
`