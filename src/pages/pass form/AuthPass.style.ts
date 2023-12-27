import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top:5rem;
`
export const Logout = styled.div`
   position: absolute;
   right: 3rem;
   top: 2rem;
   background-color:#0363A4 ;
   color: white;
   border-radius: 7px;
   padding: .4rem 1rem;
  cursor: pointer;
`
export const Welcome = styled.h2`
font-family: 'Archivo Black';
margin: 0;
`
export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 4px solid #0363A4;
`
export const ProfileName = styled.div`
  padding-right: .3rem;
  font-weight: 700;
`
export const Wrap = styled.div`
background-color:#181B20;
padding: .5rem;
border-radius: 30px;
font-size:14px;
display: flex;
  justify-content: center;
  align-items: center;
`

export const Name = styled.h6`

`
export const Circle = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 margin-right: .5rem;
 background-color: #0363A4;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
`