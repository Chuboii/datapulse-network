import { FC, useEffect, useState, useRef } from "react";
import { Container, Header, Wrapper, Tab, Text, Data, Price, Img, Span} from './DataPlan.style'
import img from '../../../../assets/nigeria-naira-currency-symbol-svgrepo-com.svg'

const DataPlans: FC = () => {
    const [isWidthSmaller, setIsWidthSmaller] = useState<boolean>(false)
    const planContainerRef = useRef(null)

    useEffect(() => {
      

    })

    return (
        <>
            <Container ref={planContainerRef}>
        <Header>Choose Plan</Header>

                <Wrapper>
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

export default DataPlans