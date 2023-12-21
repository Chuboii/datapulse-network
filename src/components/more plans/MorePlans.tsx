import {FC} from "react"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Container, Icon, Header, Wrapper, Tab, Text, Data, Price, Wrap,Img, Span} from './MorePlans.style'
import img from '/src/assets/nigeria-naira-currency-symbol-svgrepo-com.svg'

const MorePlans: FC = ()=>{
  
  return(
    <>
    <Container>
              <Header> 
                  <Icon>
                      <KeyboardArrowLeftIcon />
                      </Icon>
    <Text> MTN (SME) data plans</Text>
    </Header>
    
                <Wrapper>

                <Wrap>
                    <Tab>
                        <Text>30 days</Text>
                        <Data>500MB</Data>
                        <Price><Img src={img } /> <Span>180</Span></Price>
                     
                    </Tab>
                    <Tab>
                        <Text>30 days</Text>
                        <Data>500MB</Data>
                        <Price><Img src={img } /> <Span>180</Span></Price>
                     
                    </Tab>
                    </Wrap>
                   <Tab>
                        <Text>30 days</Text>
                        <Data>500MB</Data>
                        <Price><Img src={img } /> <Span>180</Span></Price>
                     
                    </Tab>
                    <Tab>
                        <Text>30 days</Text>
                        <Data>500MB</Data>
                        <Price><Img src={img } /> <Span>180</Span></Price>
                     
                    </Tab>
                    <Tab>
                        <Text>30 days</Text>
                        <Data>500MB</Data>
                        <Price><Img src={img } /> <Span>180</Span></Price>
                     
                    </Tab>
                    <Tab>
                        <Text>30 days</Text>
                        <Data>500MB</Data>
                        <Price><Img src={img } /> <Span>180</Span></Price>
                     
                    </Tab>
                    <Tab>
                        <Text>30 days</Text>
                        <Data>500MB</Data>
                        <Price><Img src={img } /> <Span>180</Span></Price>
                     
                    </Tab>
                 
                </Wrapper>          
    
    
    </Container>
    </>
    )
}
export default MorePlans