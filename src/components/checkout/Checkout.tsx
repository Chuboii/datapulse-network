import { FC, useEffect, useState } from "react";
import {
  Container,
  Header,
  Icon,
  Button,
  H2,
  Wrap,
  To,
  Name,
  Amount,
  AmtText,
  Amt,
  Wrapper,
  Tab,
  Text,
  SubText,
} from "./Checkout.style";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToggleStateProp } from "../../utils/store/reducers/toggle reducer/toggleInterface";
import { TransactionStateProp } from "../../utils/store/reducers/transactionReducer/transactionInterface";
import ConfirmTransactionPin from "../confirm transaction pin/ConfirmTransactionPin";

type FormProp = {
  stopPropagation: () => void
}
const Checkout: FC = () => {
  const [isAirtime2CashActive, setIsAirtime2CashActive] = useState(false);
  const [isAirtimeActive, setIsAirtimeActive] = useState(false);
  const [isDataActive, setIsDataActive] = useState(false);
  const toggleCheckoutComp = useSelector(
    (state: ToggleStateProp) => state.toggle.toggleCheckoutComp
  );
  const phoneNumberValue = useSelector(
    (state: TransactionStateProp) => state.transaction.phoneNumberValue
  );
  const dataPlanValue = useSelector(
    (state: TransactionStateProp) => state.transaction.dataPlanValue
  );
  const dataPlanData = useSelector(
    (state: TransactionStateProp) => state.transaction.dataPlanData
  );
  const networkBearer = useSelector(
    (state: TransactionStateProp) => state.transaction.networkBearer
  );
  const location = useLocation();
  const dispatch = useDispatch();
  const airtimeValue = useSelector((state: TransactionStateProp) => state.transaction.airtimeValue);
  const bankInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashBankValue)
  const accountNumberInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashAccountNumberValue)
  const accountNameInputValue = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashAccountNameValue)
  const airtime2CashAmount = useSelector((state: TransactionStateProp) => state.transaction.airtime2CashAmountValue)
 
 
    useEffect(() => {
    if (location.pathname === "/dashboard/airtime2cash") {
      setIsAirtime2CashActive(true);
      setIsAirtimeActive(false);
      setIsDataActive(false);
    } else if (location.pathname === "/dashboard/airtime") {
      setIsAirtime2CashActive(false);
      setIsAirtimeActive(true);
      setIsDataActive(false);
    } else if (location.pathname === "/dashboard") {
      setIsAirtime2CashActive(false);
      setIsAirtimeActive(false);
      setIsDataActive(true);
    }
  }, [location]);

    const enableConfirmPinComp = (e: FormProp) => {
        e.stopPropagation()
        dispatch({ type: "TOGGLE_CONFIRM_TRANSACTION_PIN_COMP", payload: true });
    }

    const disableConfirmPinComp = () => dispatch({ type: "TOGGLE_CONFIRM_TRANSACTION_PIN_COMP", payload: false });
    
  const disableCheckoutComp = () =>
    dispatch({ type: "TOGGLE_CHECKOUT_COMP", payload: false });

  return (
    <>
      <ConfirmTransactionPin />
      <Container onClick={disableConfirmPinComp} display={toggleCheckoutComp ? "0" : "5000px"}>
        <Header>
          <Icon onClick={disableCheckoutComp}>
            <ArrowBackIosNewIcon />
          </Icon>

          <H2>
            {isAirtime2CashActive
              ? "Airtime2Cash"
              : isAirtimeActive
              ? "Airtime"
              : isDataActive
              ? "Data"
              : ""}
          </H2>
        </Header>
        <Wrap>
          <To>To</To>
          <Name>
            {isAirtime2CashActive
              ? accountNameInputValue
              : isAirtimeActive
              ? phoneNumberValue
              : isDataActive
              ? phoneNumberValue
              : ""}
          </Name>
          <Amount>
            <AmtText>Amount</AmtText>
            <Amt>
              {isAirtime2CashActive
                ? 'NGN' + " " + airtime2CashAmount
                : isAirtimeActive
                 ? "NGN" + " " + airtimeValue 
                  : isDataActive
                ? dataPlanValue
                : ""}
                    
            </Amt>
          </Amount>
        </Wrap>

        <Wrapper>
          {isAirtime2CashActive ? (
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
                <SubText>NGN {airtime2CashAmount }</SubText>
              </Tab>
              <Tab>
                <Text>Network</Text>
                <SubText>{networkBearer} Airtime Conversion</SubText>
              </Tab>
              <Tab>
                <Text>Phone Number</Text>
                <SubText>{phoneNumberValue }</SubText>
              </Tab>
              <Tab>
                <Text>Bank</Text>
                <SubText>{bankInputValue}</SubText>
              </Tab>
              <Tab>
                <Text>Account Number</Text>
                <SubText>{accountNumberInputValue}</SubText>
              </Tab>
            </>
          ) : isDataActive ? (
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
                <SubText>{networkBearer}</SubText>
              </Tab>
            </>
          ) : isAirtimeActive ? (
            <>
              <Tab>
                <Text>Network</Text>
                    <SubText>{networkBearer }</SubText>
              </Tab>
              <Tab>
                <Text>Phone Number</Text>
                    <SubText>{phoneNumberValue }</SubText>
              </Tab>
            </>
          ) : (
            ""
          )}
        </Wrapper>

        <Button onClick={enableConfirmPinComp}>Confirm</Button>
      </Container>
    </>
  );
};

export default Checkout;
