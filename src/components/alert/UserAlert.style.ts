import styled from "styled-components";

type ContainerTypeProps = {
    display: string;
}
export const Container = styled.section<ContainerTypeProps>`
  position: fixed;
  bottom: 0;
  background-color: #0F2337;
  color: white;
  width: 100%;
  height: 290px;
  z-index: 30000;
  border-top-right-radius: 30px;
  display: ${({display}) => display};
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 30px;
  padding:1.5rem 1rem;
`

export const Title = styled.h1`
  font-size: 30px;
  
`
export const Text = styled.p`
  color:white;
   font-size: 20px;
   text-align: center;
   position:relative;
   bottom:1rem;
   `