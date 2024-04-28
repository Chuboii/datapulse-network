import styled from 'styled-components'

type DisplayProp = {
    display: string;
}
export const Container = styled.div<DisplayProp>`
padding: .4rem;
font-family: "Kanit";
position: fixed;
top:${({display}) => display};
left:0;
right: 0;
bottom:0;
z-index: 10;
background-color: #080808;
padding-bottom: 3rem;
overflow: scroll;
transition: all .5s;
`
export const Header = styled.div`
display: flex;
align-items: center;
padding:1rem  1.5rem;
 border-bottom: 1px solid rgba(255, 255,255, .3);
 position: sticky;
 top: 0;
 left: 0;
 right: 0;
 background: rgb(8, 8, 8, 0.09);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
z-index: 1;
`
export const Icon = styled.div`
margin-right: .8rem;
display: flex;

&:first-child{
    border-radius: 50%;
    padding: .4rem;
    background-color: #23262F;
}
`
export const H2 = styled.div`

`
export const Main = styled.div`
  margin-top: 1rem;
`
export const Wrapper = styled.div`
margin-top: 1rem;
`
export const Section = styled.div`

`
export const Success = styled.div`
  padding: .5rem;
  background-color: #0A1A10;
  color: #43B357;
  border-radius: 5px;
`
export const Wrap = styled.div`
display: flex;
align-items: center;


`
export const Failure = styled.div`
padding: .5rem;
  background-color: pink;
  color: red;
  border-radius: 5px;
`
export const Wrap1 = styled.div`
     background-color: #23262F;
     position: relative;
     align-items: center;
     display: flex;
     max-width: 150px;
     left: 50%;
     justify-content: center;
     padding: .3rem;
     border-radius: 10px;
     transform: translate(-50%);
`
export const Wrap2 = styled.div`
     text-align: center;
     margin-top: .5rem;
`
export const Img = styled.img`
width: 40px;
margin-right: .5rem;
height: 40px;
border-radius: 50%;
`
export const Text = styled.div`

`
export const Bold = styled.b`

`
export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &:nth-of-type(7){
    background:#F04C6F;
    margin-top: .5rem;
    border-radius: 10px;
    padding: 1rem;
  }
  &:nth-of-type(8){
    background:#0363A4;
    margin-top: .5rem;
    border-radius: 10px;
    padding: 1rem;
  }
`

export const More = styled.div`
margin-top: 1rem;
`

export const BoxWrap = styled.div`

`