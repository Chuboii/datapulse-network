import styled from "styled-components";

type DisplayProp = {
    display: string;
}

export const Container = styled.div<DisplayProp>`
  width:90%;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  background-color: #23262F;
  position: absolute;
  left: 50%;
  top: 50%;
  padding:.5rem 1rem;
  flex-direction: column;
  z-index: 500;
  transform: translate(-50%, -50%);
  border-radius:10px;
  display: ${({ display }) => display};

`
export const H2 = styled.h2`
  font-family: 'Archivo Black';
`
export const Text = styled.div`
  text-align: center;
  font-family: "Kanit";
`
export const Button = styled.button`
 background-color: #0363A4;
 color: white;
 width: 100%;
 padding: 1rem 0;
 font-family: "Kanit";
 margin: 1rem;
`