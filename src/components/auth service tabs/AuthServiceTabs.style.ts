import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
width: 65%;
  
  @media screen and (max-width:768px){
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const Grid = styled.div`
background-color: #23262F;
width: 120px;
margin: .5rem;
height: 120px;
display: flex;
border: 2px solid #353945;
border-radius: 10px;
flex-direction: column;
align-items: center;
text-transform: uppercase;
font-family: 'Archivo Black';
justify-content:center;
text-align: center;
font-size: 14px;
padding:1rem;

    @media screen and (max-width:768px){
     width:100px;
     height:100px;
    }
`
export const Icon = styled.div`

`
export const Text = styled.div`

    @media screen and (max-width:768px){
     font-size:10px;
    }
`
export const Img = styled.img`

`