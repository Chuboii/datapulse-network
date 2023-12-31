import { FC, useEffect, useState } from "react";
import {Container, Header, Icon, Button, H2, Wrap, To, Name, Amount, AmtText, Amt, Wrapper, Tab, Text, SubText } from './Checkout.style'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios, {AxiosResponse} from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToggleStateProp } from "../../utils/store/reducers/toggle reducer/toggleInterface";
import { TransactionStateProp } from "../../utils/store/reducers/transactionReducer/transactionInterface";

interface Prop {
    data: string;
    status: number;
    statusText: string;
    headers: string[];
    config: string;
}

const Checkout: FC = () => {
    const [isAirtime2CashActive, setIsAirtime2CashActive] = useState(false)
    const [isAirtimeActive, setIsAirtimeActive] = useState(false)
    const [isDataActive, setIsDataActive] = useState(false)
    const toggleCheckoutComp = useSelector((state: ToggleStateProp) => state.toggle.toggleCheckoutComp)
    const phoneNumberValue = useSelector((state: TransactionStateProp) => state.transaction.phoneNumberValue)
    const dataPlanValue = useSelector((state: TransactionStateProp) => state.transaction.dataPlanValue)
    const dataPlanData = useSelector((state: TransactionStateProp) => state.transaction.dataPlanData)
    const networkBearer = useSelector((state: TransactionStateProp) => state.transaction.networkBearer)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
   
        if (location.pathname === '/dashboard/airtime2cash') {
            setIsAirtime2CashActive(true)
            setIsAirtimeActive(false)
            setIsDataActive(false)
            
        }
        else if (location.pathname === '/dashboard/airtime') {
            setIsAirtime2CashActive(false)
            setIsAirtimeActive(true)
            setIsDataActive(false)
        }
        else if (location.pathname === '/dashboard'){
            setIsAirtime2CashActive(false)
            setIsAirtimeActive(false)
            setIsDataActive(true)
        }
    }, [location])


    const submitForm = async () => {
        try {
            const apiUrl = 'https://n3tdata.com/api/data';

            const payload = {
                network: '1',
                phone: "08039914037", // Replace with the actual phone number
                data_plan: '1',
                bypass: false,
                plan_type:"",
                amount: 100,
                'request-id': String(Date.now())
            };
        
            // Request headers
            const headers = {
              'Authorization': 'Token 75ea7594745bb22aa90022f5f7cbc0d24a61a59f242d763985e6e412b6d1', 
              'Content-Type': 'application/json',
            };
        
    
            const res = await axios.post(apiUrl, payload, { headers }) as AxiosResponse<Prop>;

    
                console.log('API Response:', res.data);
              
              
        }
        catch (e) {
            console.error('API Error:', (e as Error));
        }
    }
    
    const disableCheckoutComp = () => dispatch({type:"TOGGLE_CHECKOUT_COMP", payload:false})
   
    return (
        <>
            <Container display={toggleCheckoutComp ? "0" :"5000px" }>
                <Header>
                    <Icon onClick={disableCheckoutComp}><ArrowBackIosNewIcon/></Icon>

<H2>
    {isAirtime2CashActive ? "Airtime2Cash" : isAirtimeActive ? "Airtime" : isDataActive ? "Data" : ""}
</H2>

                </Header>
                <Wrap>
                    <To>To</To>
                    <Name>{isAirtime2CashActive ? "Joe Doe" : isAirtimeActive ? "no" : isDataActive ? phoneNumberValue: ""}</Name>
                    <Amount>
                        <AmtText>Amount</AmtText>
                        <Amt> {isAirtime2CashActive ? "Joe Doe" : isAirtimeActive ? "no" : isDataActive ? dataPlanValue : ""}</Amt>
                    </Amount>
                </Wrap>

                <Wrapper>
                    {isAirtime2CashActive ?
                    <>
                    <Tab>
                        <Text>Conversion Rate</Text>
                        <SubText>80%</SubText>
                    </Tab>
                    <Tab>
                        <Text>Conversion Rate</Text>
                        <SubText>80%</SubText>
                    </Tab>
                    <Tab>
                        <Text>Payment Amount</Text>
                        <SubText>NGN 7888</SubText>
                    </Tab>
                    <Tab>
                        <Text>Network</Text>
                        <SubText>MTN Airtime Conversion</SubText>
                    </Tab>
                    <Tab>
                        <Text>Phone Number</Text>
                        <SubText>8039914037</SubText>
                    </Tab>
                    <Tab>
                        <Text>Bank</Text>
                        <SubText>Kuda</SubText>
                    </Tab>
                    <Tab>
                        <Text>Account Number</Text>
                        <SubText>21012345567</SubText>
                            </Tab>
                        </> : isDataActive ? 
                            <>
                     <Tab>
                        <Text>Data Plan</Text>
                                    <SubText>{dataPlanData}</SubText>
                    </Tab>
                    <Tab>
                        <Text>Phone Number</Text>
                        <SubText>{phoneNumberValue}</SubText>
                    </Tab>
                    <Tab>
                        <Text>Network</Text>
                                    <SubText>{networkBearer }</SubText>
                    </Tab>
                            </> : isAirtimeActive ? 
                                <>
                                     <Tab>
                        <Text>Data Plan</Text>
                        <SubText>MTN Airtime Conversion</SubText>
                    </Tab>
                    <Tab>
                        <Text>Phone Number</Text>
                        <SubText>8039914037</SubText>
                    </Tab>
                    <Tab>
                        <Text>Network</Text>
                        <SubText>Kuda</SubText>
                    </Tab>
                                </> : ""
                    }
                </Wrapper>

                <Button onClick={submitForm}>Confirm</Button>
        </Container>
        
        </>
    )
}

export default Checkout