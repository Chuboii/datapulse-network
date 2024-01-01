import styled from "styled-components";

type DisplayProp = {
    display: string;
}


export const Container = styled.div<DisplayProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1A202C;
  position: fixed;
  bottom: ${({display}) => display};
  left:0;
  right: 0;
  height:65%;
  z-index: 2000;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  transition: all .5s;
`
export const ProfileImg = styled.div`

`
export const ProfileName = styled.div`

`
export const Grid = styled.div`
 width: 55px;
 height: 55px;
 border-radius: 50%;
 background: #111215;
 display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
  transform: scale();
  transition: all .4s;
  &:last-child{
    position: relative;
     left: 5.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
    &:last-child{
    position: relative;
     left: 6.15rem;
  }
    &:hover{
    width: 80px;
    height: 80px;
}
  }

  &:hover{
    width: 60px;
    height: 60px;
}
`
export const Wrap = styled.div`
     display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`
export const Text = styled.div`
   margin-left:.4rem;
`
export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Pad = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;

`
export const Dot = styled.div`
  background-color: #2A2F3A;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin:.7rem 1rem;

`
export const Span = styled.div`
 position:absolute;
 bottom: 2rem;
 right: 0;
 font-size:13px;
 cursor:pointer;
`
export const Delete = styled.div`
  position: absolute;
  right:5rem;
  font-family: 'Archivo Black';
  color:#359758;
  bottom: 6.5rem;
  cursor: pointer;
`