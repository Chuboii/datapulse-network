import { FC } from "react";
import {Container,More,Wrap1,Wrap2,Failure, Header, Icon, H2, Main,Wrapper, Section,Success, Wrap, Img, Text, Bold, Tab, BoxWrap } from './TransactionSummary.style'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useDispatch, useSelector } from "react-redux";
import { Toggle } from "../../utils/store/reducers/toggle reducer/toggleInterface";
import { HistoryStateProp } from "../../utils/store/reducers/history/historyInterface";
import PreventScroll from "../../components/prevent scroll/PreventScroll"


  
const TransactionSummary: FC = () => {
    const toggleTransactionSummary = useSelector((state:Toggle) => state.toggle.toggleTransactionSummary)
    const dispatch = useDispatch()
    const childHistory = useSelector((state: HistoryStateProp) => state.history.childHistory)
    const date = new Date(childHistory ? childHistory.createdAt : "")


    const disableTransactionSummary = () => dispatch({ type: "TOGGLE_TRANSACTION_SUMMARY", payload: false })
    

    return (
        <>
        {toggleTransactionSummary && <PreventScroll/>}
            <Container display={toggleTransactionSummary ? "0" : "5000px"}>
                <Header>
                    <Icon onClick={disableTransactionSummary}><KeyboardArrowLeftIcon/></Icon>
                    <H2>Transaction Details</H2>
                </Header>
                <Main>
                    <Section>
                        <Wrap1>
                            <Img src={childHistory ? childHistory.photoUrl : ""} />
                            <Text>{childHistory ? childHistory.plan : ""}</Text>
                        </Wrap1>

                        <Wrap2>
                            <Text>
                                on  <Bold  style={{marginRight:".6rem"}}> {date.toDateString() }</Bold>
                                at<Bold  style={{marginLeft:".4rem"}}> {date.toLocaleTimeString()}</Bold>
                            </Text>
                        </Wrap2>

                        <Wrapper>
                            <Tab>
                                <BoxWrap>
                                    <Bold>{childHistory ? childHistory.history : ""} </Bold>
                                    <Text>NGN {childHistory ? childHistory.amount : ""} </Text>
                                </BoxWrap>

                                <Img src={childHistory ? childHistory.photoUrl : ""}  />
                            </Tab>

                            <Tab>
                                <BoxWrap>
                                    <Text>Status</Text>
                                    {childHistory.declined ? <Failure>Failed</Failure> :
                                        <Success>Successful</Success>
                                    }
                                </BoxWrap>
                            </Tab>

                            <Tab>
                                <BoxWrap>
                                    <Text>Balance Code</Text>
                                    <Bold>{childHistory && childHistory.plan === "Data" ? "*461*1#" : "*310#"}</Bold>
                                </BoxWrap>
                            </Tab>

                            <Tab>
                                <BoxWrap>
                                    <Text>Message</Text>
                                    {childHistory.declined ? <Bold>{childHistory && childHistory.plan === "Data" ? "DATA PURCHASE WAS NOT SUCCESSFUL" : "AIRTIME PURCHASE WAS NOT SUCCESSFUL"} </Bold> :
                                        <Bold>{childHistory && childHistory.plan === "Data" ? "DATA PURCHASE WAS SUCCESSFUL dial *461*1#" : "AIRTIME PURCHASE WAS SUCCESSFUL dial *310#"} to check your balance</Bold>
                                    }
                                </BoxWrap>
                            </Tab>

                            <Tab>
                                <BoxWrap>
                                    <Text>Reference ID</Text>
                                    <Bold>{childHistory ? childHistory.uid : ""}</Bold>
                                </BoxWrap>
                            </Tab>

                            <More>More Actions</More>

                            <Tab>
                                <Wrap>
                                <InfoOutlinedIcon sx={{marginRight:'1rem'}}/>
                                <BoxWrap>
                                    <Bold>Repeat Transaction</Bold>
                                    <Text>Quickly repeat this transaction</Text>
                                    </BoxWrap>
                                </Wrap>
                                <Icon></Icon>
                            </Tab>

                            <Tab>
                                <Wrap>
                         <InfoOutlinedIcon sx={{marginRight:'1rem'}}/>
                                <BoxWrap>
                                    <Bold>Report Transaction</Bold>
                                    <Text>Report an issue with this transaction</Text>
                                    </BoxWrap>
                                </Wrap>
                                <Icon></Icon>
                            </Tab>
                            
                        </Wrapper>
        </Section>

                </Main>
        </Container>
        </>
    )
}

export default TransactionSummary