import { FC } from "react";
import DataServices from "../network/DataServices";
import PurchaseForm from "../purchase form/PurchaseForm";
import {Wrapper, Header, Input} from './Airtime2Cash.style'
import Airtime2CashBankForm from "../airtime2cash bank/Airtime2CashBankForm";

const Airtime2Cash: FC = () => {
    
    return (
        <>
            <Airtime2CashBankForm/>
        <DataServices/>
            <Wrapper>
                <Header>Amount to convert</Header>
              <Input placeholder="Min.#1,000"/>
            </Wrapper>
        <PurchaseForm/>

        </>
    )
}

export default Airtime2Cash