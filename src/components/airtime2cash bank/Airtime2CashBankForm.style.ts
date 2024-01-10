import styled from "styled-components";

type BgProp = {
  bg: string;
}


export const Wrapper = styled.div`
  margin-bottom: 3rem;
  position: relative;
  bottom: 1rem;

  @media screen and (min-width:768px){
    width: 70%;
    padding: 0.3rem .5rem;
  }
 
`
export const Button = styled.button<BgProp>`
    width:100%;
    padding:1rem;
    margin-left: .8rem;
    margin-top:1rem;
    background:${({bg}) => bg};
    border:2px solid ${({bg}) => bg === "#0363A4" ? 'none' : "#0F2337"};
    color:${({bg}) => bg === "#0363A4" ? 'white' : "#0F2337"};

    
 @media screen and (max-width:768px){
    width:100%;
    margin-top:1rem;
    padding:1rem;
    margin-left: .8rem;
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
export const Header = styled.header`
 margin-bottom:1rem;
`
export const Wrap = styled.div`
margin:1rem 0;
`
export const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
export const Icon = styled.div`
background-color: #23262F;
padding:.8rem 1rem;
margin-top: 1rem;
border-radius: 7px;
`