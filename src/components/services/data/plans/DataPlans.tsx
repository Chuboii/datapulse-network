import { FC } from "react";
import {Container, Header, Wrapper, Tab, Text } from './DataPlan.style'

const DataPlans: FC = () => {
    

    return (
        <>
          <Container>
        <Header>Choose Plan</Header>

                <Wrapper>
                    <Tab>
                        <Text>30 days</Text>
                     
                    </Tab>

                    <Tab>
                        <Text>airtel</Text>
                   
                    </Tab>

                    <Tab>
                        <Text>glo</Text>
                        
                    </Tab>

                    <Tab>
                        <Text>9mobile</Text>
    
                    </Tab>
                </Wrapper>            
      </Container>
        </>
    )
}

export default DataPlans