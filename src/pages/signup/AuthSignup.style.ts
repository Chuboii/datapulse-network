import styled from 'styled-components'  

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
  margin: .5rem 0;
`
export const Input = styled.input`
  background:#1A202C;
  border:none;
  padding:1.2rem 1rem;
  border-radius: 10px;
  width: 90%;
  padding-left: 3.3rem;
  font-family: 'Archivo Black';
  &::placeholder{
    font-size: 17px;
    color:#777E90
  }
`
export const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border:2px solid #0363A4;
  color:#0363A4;
  padding: 1rem 0;
  margin-top: .5rem;
  filter: brightness(.6);
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