import { FC } from "react";
import {Form, Input, Button, Header} from './PurchaseForm.style'

const PurchaseForm: FC = () => {


    return (
        <>
            <Form>
                <Header>Phone Number</Header>
                <Input></Input>
              <Button>Submit</Button>
            </Form>
        
        </>
    )
}

export default PurchaseForm