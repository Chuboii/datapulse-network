import {FC} from "react"
import {Container, Wrapper, Header, DateTime, Wrap, Img, Box, Button, Text,Success, Time} from "./RecentTransactions.style"
import img from "/src/assets/devildoesnotbargain.jpeg"

const RecentTransactions: FC = () =>{
  
  return(
    <>
    <Container>
    <Header> Recent Transactions</Header>
    
    <Wrapper>
    <DateTime> 14 Dec, 2023 </DateTime>
    <Wrap>
    <Img src={img}/>
    <Box> 
    <Text>500.0mb to 0809373737</Text>
    <Time>09:20:42 PM</Time>
    </Box>
    <Box>
    <Text>
    135.00
    </Text>
    <Success>Successful </Success>
    </Box>
    </Wrap>
    </Wrapper>
    
        <Wrapper>
        <Wrap>
    <Img src={img}/>
    <Box> 
    <Text>500.0mb to 0809373737</Text>
    <Time>09:20:42 PM</Time>
    </Box>
    <Box>
    <Text>
    135.00
    </Text>
    <Success>Successful </Success>
    </Box>
    </Wrap>
    </Wrapper>
    
    <Wrapper>
    <Wrap>
    <Img src={img}/>
    <Box> 
    <Text>500.0mb to 0809373737</Text>
    <Time>09:20:42 PM</Time>
    </Box>
    <Box>
    <Text>
    135.00
    </Text>
    <Success>Successful </Success>
    </Box>
    </Wrap>
    </Wrapper>
    <Button> View more </Button>
    </Container>
    </>
    )
}

export default RecentTransactions