import styled from "styled-components";

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
background: rgb(8, 8, 8, 0.09);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);

`
export const Wrap = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileImg = styled.img`
   width:60px;
   height:60px;
   border-radius: 50%;
  border: 4px solid #0363A4;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  margin-left: 1rem;
`
export const Username = styled.div`

`
export const Text = styled.div`
  color:gray;
`
export const Icon = styled.div`
  position: absolute;
  z-index: 2;
  top:.3rem;
  left: 12.5rem;
`