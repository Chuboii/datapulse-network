import styled from 'styled-components'  

interface ActiveProp{
  active: string
}

export const Container = styled.div`
   position: absolute;
   top:50%;
   left:50%;
   transform:translate(-50%, -50%);

   max-width: 600px;
   width:100%;
   box-sizing: border-box;
`
export const Text = styled.div`
  text-align: center;  
  margin-top: 1rem;
`

export const Icons = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`
export const Wrap = styled.div`
  width:100%;
  position: relative;
  margin: .3rem 0;
`
export const Input = styled.input`
  background:#1A202C;
  border:none;
  padding:1.2rem 1rem;
  border-radius: 10px;
  width: 100%;
  padding-left: 3.3rem;
  font-family: 'Archivo Black';
  &::placeholder{
    font-size: 17px;
    color:#777E90
  }
    @media screen and (max-width:768px){
     width:100%;
    }
`
export const Button = styled.button<ActiveProp>`
  width: 100%;
  background-color: ${({active}) => active};
  border:2px solid #0363A4;
  color:${({active}) => active === '#0363A4' ? "white" : "#0363A4"};
  padding: 1rem 0;
  transition: all .3s;
  margin-top: 1rem;
  filter: brightness(${({active}) => active === '#0363A4' ? "1" : ".6"});
`

export const Form = styled.form`
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  padding:1rem;
`
export const H2 = styled.h2`
 text-align: center;
 font-family: 'Archivo Black';
 font-size: 35px;
 margin: 0;
    @media screen and (max-width:768px){
     font-size:25px;
    }
` 
export const Follow = styled.div`
 text-align: center;
 margin:.6rem 0;
`

export const Icon = styled.div`
 position:absolute;
 top:50%;
 transform: translateY(-50%);
 left:1rem;
`

export const See = styled.div`
  position: absolute;
  right: 1rem;
  top:50%;
  transform:translateY(-50%);
`
export const GButton = styled.button`
  background:#1973E8;
  color:white;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width:100%;
  margin-bottom: 2rem;
  cursor:pointer;
  font-family: 'Archivo Black';
`
export const Img = styled.img`
background: white;
padding: .3rem .6rem;
border-radius: 10px;

`
export const Span = styled.div`
  margin-left: 1rem;
`