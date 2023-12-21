import { FC, useEffect, useState, useRef } from "react";
import { Container, Header, Wrapper, Tab, Text, Data, Price, Wrap, Button,Img, Span} from './DataPlan.style'
import img from '../../../../assets/nigeria-naira-currency-symbol-svgrepo-com.svg'
import PurchaseForm from "../../../purchase form/PurchaseForm"
import MorePlans from "../../../more plans/MorePlans"


const DataPlans: FC = ({ref}) => {
    const [isWidthSmaller, setIsWidthSmaller] = useState<boolean>(false)
    const planContainerRef = useRef(null)
/*
    useEffect(() => {
        const width = planContainerRef.current.clientWidth
        
        if (width < 100) {
            setIsWidthSmaller(true)
        }
    })*/

    return (
        <>
        <MorePlans/>
            <Container width={isWidthSmaller ? "relative" : "absolute"} ref={ref}>
        <Header>Choose Plan</Header>

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
                  {/*  <Tab>
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
                 */ }
               <Button> See All </Button>
                </Wrapper>          
              <PurchaseForm/>
      </Container>
        </>
    )
}

export default DataPlans