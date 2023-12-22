import styled from 'styled-components';

export const Container = styled.div`
  padding:1rem;
  position: relative;
  top: 5rem;
`;
//#23262F
//#4E1726
export const Wrapper = styled.div`
  padding: 1rem;
  background:#23262F;
  margin:1rem 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
  font-family: "Kanit";
   justify-content: space-between;
  &:last-child{
    background:#4E1726;
    padding:1.5rem 1rem;
   }
`;

export const Text = styled.div`
  

  &:hover {
    /* Assuming a darker background color on hover */
    background-color: #0069d9;
  }
`;
export const Span = styled.div`

`
export const Button = styled.button`
 
  
`
export const Icon = styled.div`
  margin-right: .6rem;
`
export const Wrap = styled.div`

`
export const Box = styled.div`
 display: flex;
  align-items: center;
`