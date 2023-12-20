import { FC } from "react";
import {Header, Wrap, ProfileImg, Wrapper, Text, Username} from './DashboardHeader.style'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import img from '../../assets/devildoesnotbargain.jpeg'

const DashboardHeader: FC = () => {
    

    return (
        <>
            <Header>
                <Wrap>
                    <ProfileImg src={img } />
                    <Wrapper>
                        <Text>Good morning👋</Text>
                        <Username>Alex!</Username>
                    </Wrapper>
                </Wrap>
                
                <NotificationsNoneIcon/>
        </Header>
        </>
    )
}

export default DashboardHeader