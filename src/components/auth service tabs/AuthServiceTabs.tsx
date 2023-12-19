import { FC } from "react";
import dataImg from '../../assets/buy_data_filled.svg'
import airtimeImg from '../../assets/buy_airtime.svg'
import tvImg from '../../assets/tv.svg'
import billsImg from '../../assets/bulb.svg'
import giftImg from '../../assets/gift.svg'
import sellAirtimeImg from '../../assets/sell_airtime.svg'
import {Container, Grid, Icon, Img, Text} from './AuthServiceTabs.style'

const AuthServiceTabs: FC = () => {
    

    return (
        <>
            <Container>
                <Grid>
                    <Icon>
                        <Img src={dataImg} />
                        <Text>affordable data</Text>
                    </Icon>
                </Grid>

                <Grid>
                    <Icon>
                        <Img src={sellAirtimeImg} />
                        <Text>sell excess airtime</Text>
                    </Icon>
                </Grid>

                <Grid>
                    <Icon>
                        <Img src={tvImg} />
                        <Text>subscribe tv cables</Text>
                    </Icon>
                </Grid>

                <Grid>
                    <Icon>
                        <Img src={airtimeImg} />
                        <Text>airtime recharge</Text>
                    </Icon>
                </Grid>

                <Grid>
                    <Icon>
                        <Img src={billsImg} />
                        <Text>pay utility bills</Text>
                    </Icon>
                </Grid>

                <Grid>
                    <Icon>
                        <Img src={giftImg} />
                        <Text>sell giftcards</Text>
                    </Icon>
                </Grid>
    </Container>
        
        </>
    )
}

export default AuthServiceTabs

