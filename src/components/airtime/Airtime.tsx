import {FC} from "react";
import DataServices from "../network/DataServices";
import PurchaseForm from "../purchase form/PurchaseForm";
import {Wrapper, Header, Input} from './Airtime.style'
import { useDispatch } from "react-redux";

type ValueProp = {
    target: {
        value:string
    }
}

const Airtime: FC = () => {
    const dispatch = useDispatch()


    const changeValue = (e: ValueProp) => {
            dispatch({ type: "GET_AIRTIME_VALUE", payload: e.target.value })
    }

    return (
        <>
         
                    <Wrapper>
                <Header>Amount</Header>
              <Input onChange={changeValue} type="number" placeholder="Minimum NGN 50"/>
            </Wrapper>
        <DataServices/>
        <PurchaseForm/>

        </>
    )
}

export default Airtime