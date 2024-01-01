import { FC} from "react";
import DataServices from "../network/DataServices";
import PurchaseForm from "../purchase form/PurchaseForm";
import {Wrapper, Header, Input} from './Airtime2Cash.style'
import Airtime2CashBankForm from "../airtime2cash bank/Airtime2CashBankForm";
import { useDispatch, useSelector } from "react-redux";
import { Toggle } from "../../utils/store/reducers/toggle reducer/toggleInterface";

type InputProp = {
    target: {
        value: string;
    }
}
const Airtime2Cash: FC = () => {
    const dispatch = useDispatch()
    const toggleAirtime2CashBank = useSelector((state:Toggle) => state.toggle.toggleAirtime2CashBank)
    const changeValue = (e: InputProp) => dispatch({type:'GET_AIRTIME2CASH_AMOUNT_VALUE', payload:e.target.value})
   



    return (
        <>
            {toggleAirtime2CashBank ?
                <Airtime2CashBankForm /> :
                <>
        <DataServices/>
            <Wrapper>
                <Header>Amount to convert</Header>
              <Input onChange={changeValue} type="number" placeholder="e.g 700"/>
            </Wrapper>
                    <PurchaseForm />
            </>
            }

        </>
    )
}

export default Airtime2Cash