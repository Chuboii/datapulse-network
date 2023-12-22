import { FC } from "react";
import DataServices from "../network/DataServices";
import PurchaseForm from "../purchase form/PurchaseForm";
import {Wrapper, Header, Input} from './Airtime.style'

const Airtime: FC = () => {
    
    return (
        <>
                    <Wrapper>
                <Header>Amount to convert</Header>
              <Input placeholder="Min.#1,000"/>
            </Wrapper>
        <DataServices/>
        <PurchaseForm/>

        </>
    )
}

export default Airtime