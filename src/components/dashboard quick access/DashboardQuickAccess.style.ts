import styled from "styled-components";


interface ActiveProp {
    active: string;
}

export const Container = styled.div`
padding: 1rem;

`
export const Tab = styled.div<ActiveProp>`
  background:${({active}) => active};
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  margin: 0 .5rem;
  width: 180px;
  border-radius: 10px;
  
`
export const Header = styled.header`
   display: flex;
   align-items:center;
`
export const Icon = styled.div`
 display: flex;
 justify-content: center;
  align-items: center;
  margin-right: .5rem;
`
export const Span = styled.span`
 font-family: "Kanit";
 font-size:18px;
 color:#4ED77C;

`
export const Text = styled.div`
 font-family: "Kanit";
`
export const Wrapper = styled.div`
  display:flex;
  margin-top: .8rem;
`