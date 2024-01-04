import {FC} from "react"
import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
body{
  overflow:hidden;
}
`
const PreventScroll:FC = () =>{
  
  return (
    <>
    <GlobalStyles/>
    </>
    )
}

export default PreventScroll