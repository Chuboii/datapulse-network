import { FC, useState, useEffect } from "react";
import {
  Form,
  Numbers,
  Wrap,
  Contact,
  Input,
  Button,
  Box,
  Header,
} from "./PurchaseForm.style";
import PersonIcon from "@mui/icons-material/Person";
import Checkout from "../checkout/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { TransactionStateProp } from "../../utils/store/reducers/transactionReducer/transactionInterface";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface InputProp {
  target: {
    value: string;
  };
}

const PurchaseForm: FC = () => {
  const [numberArray, setNumberArray] = useState<string[]>([]);
  const [numberInput, setNumberInput] = useState<string>("");
  const dispatch = useDispatch();
  const phoneNumberValue = useSelector(
    (state: TransactionStateProp) => state.transaction.phoneNumberValue as string[])
  const dataPlansId = useSelector(
    (state: TransactionStateProp) => state.transaction.dataPlanId
  );
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isDigitsComplete, setIsDigitsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (phoneNumberValue && dataPlansId) {
      setIsFormValid(true);
    }
  }, [phoneNumberValue, dataPlansId]);

  useEffect(() => {
    dispatch({ type: "GET_PHONE_NUMBER_VALUE", payload: numberArray });
  }, [isDigitsComplete, numberArray, dispatch]);

  const handleInputChange = (e: InputProp) => {
    const value = e.target.value;

    if (value.length <= 11) {
      setNumberInput(value);
      if (value.length === 11) {
        setNumberArray([value]);
        setNumberInput("");
        setIsDigitsComplete(true);
      }
    }
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumberValue && phoneNumberValue.length > 0 && dataPlansId) {
      dispatch({ type: "TOGGLE_CHECKOUT_COMP", payload: true });
    }
  };

  const clearNumbers = (id: number) => {
    const deleteNumber = numberArray.filter((number, idx) => idx !== id);
    setNumberArray(deleteNumber);
  };

  return (
    <>
      <Checkout />
      <Form onSubmit={submitForm}>
        <Header>Phone Number</Header>
        <Wrap>
          <Input
            type="number"
            value={numberInput}
            onChange={handleInputChange}
            placeholder="0801 234 5678"
          />

          <Contact>
            <PersonIcon />
          </Contact>
        </Wrap>
        <Box>
          {numberArray.map((number, index) => (
            <Numbers key={index}>
              {number}
              <HighlightOffIcon
                onClick={() => {
                  clearNumbers(index);
                }}
                sx={{ marginLeft: ".5rem", color: "orangered" }}
              />
            </Numbers>
          ))}
        </Box>
        <Button bg={isFormValid ? "#0363A4" : "transparent"} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default PurchaseForm;
