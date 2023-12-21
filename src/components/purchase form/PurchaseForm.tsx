import { FC,useState } from "react";
import {Form,Numbers, Wrap,Contact, Input, Button, Header} from './PurchaseForm.style'
import PersonIcon from '@mui/icons-material/Person';



const PurchaseForm: FC = () => {
  const [numberArray, setNumberArray] = useState([]);
  const [numberInput, setNumberInput] = useState("")

const handleInputChange = (e) => {
    const value = e.target.value
    
    if (value.length <= 11) {
      setNumberInput(value);
      if(value.length === 11){
      setNumberArray((prevArray) => [...prevArray, value]);
      setNumberInput("")
      }
    }
  };

const submitForm = () =>{
  if(numberInput){
    console.log("u")
  }
}

/*
const handleValueChange = (values) => {
    const { value } = values;
    
  if (value.length === 11) {
      setNumberArray((prevArray) => [...prevArray, value]);
    }
  }*/

    return (
        <>
            <Form onSubmit={submitForm}>
                <Header>Phone Number</Header>
              <Wrap>
        <Input type="number" value={numberInput} onChange={handleInputChange} placeholder="0801 234 5678"/>

                <Contact><PersonIcon/></Contact>
              </Wrap>
          {numberArray.map((number, index) => (
          <Numbers key={index}>{number}</Numbers>
        ))}
              <Button>Submit</Button>
            </Form>
        
        </>
    )
}

export default PurchaseForm