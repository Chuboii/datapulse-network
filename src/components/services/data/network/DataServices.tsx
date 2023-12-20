import { FC } from "react";
import mtn from '/src/assets/mtn-3.svg'
import airtel from '/src/assets/airtel-logo.svg'
import glo from '/src/assets/glo-logo.svg'
import etisalat from '/src/assets/9mobile_logo.svg'
import {Container, Header, Wrapper, Tab, Text, Img } from './DataServices.style'

const DataServices: FC = () => {
    
    return (
        <>
        <Container>
        <Header>Select Network</Header>

                <Wrapper>
                    <Tab>
                        <Text>mtn sme</Text>
                        <Img src={mtn}/>
                    </Tab>

                    <Tab>
                        <Text>airtel</Text>
                        <Img src={airtel}/>
                    </Tab>

                    <Tab>
                        <Text>glo</Text>
                        <Img src={glo}/>
                    </Tab>

                    <Tab>
                        <Text>9mobile</Text>
                        <Img src={etisalat}/>
                    </Tab>
                </Wrapper>            
      </Container>
        </>
    )
}

export default DataServices