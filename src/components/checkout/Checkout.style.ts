import styled from 'styled-components'

type DisplayProp = {
  display: string;
}
export const Container = styled.div<DisplayProp>`
   position: fixed;
   top: ${({display}) => display};
   left: 0;
   right: 0;
   background-color: #080808;
   z-index: 300;
   bottom: 0;
   transition: all .5s;
   padding: 0 .8rem;
`
export const Header = styled.div`
 padding: 1rem .5rem;
 border-bottom: 1px solid rgba(255, 255, 255, 0.3);
 display:flex;
 align-items: center;
`
export const Icon = styled.div`
  background: #151515 ;
   width:50px;
   height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Button = styled.button`
  background-color: #0363A4;
  width: 100%;
  padding: 1rem 0;
`
export const H2 = styled.div`
font-family: 'Archivo Black';
`
export const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
margin-top:2rem;
`
export const To = styled.div`
 color: gray;
`
export const Name = styled.div`
  color:#FABA51;
`
export const Amount = styled.div`
  
`
export const AmtText = styled.div`
  color:gray;
`
export const Text = styled.div`

`
export const SubText = styled.div`

`
export const Amt = styled.div`

`
export const Wrapper = styled.div`
  font-family: "Kanit";
  margin: 1rem 0;

`
export const Tab = styled.div`
 background:#151515;
 margin:.5rem 0;
 border-radius: 10px;
 padding:1.6rem 1rem;
 display:flex;
 justify-content: space-between;
`
