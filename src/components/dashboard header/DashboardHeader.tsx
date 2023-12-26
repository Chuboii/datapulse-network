import { FC, useEffect, useState } from "react";
import {Header, Wrap, ProfileImg, Wrapper, Text, Username} from './DashboardHeader.style'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useSelector } from "react-redux";
import { StateProp } from "../../utils/store/reducers/userInterface";


const DashboardHeader: FC = () => {
    const {currentUser} = useSelector((state : StateProp) => state.user)
    const [currentTime, setCurrentTime] = useState<string>("")

    useEffect(() => {
        const date = new Date()
        const hours = date.getHours()

        if (hours >= 0 && hours < 12) {
            setCurrentTime("Good morning")
        }
        else if (hours >= 12 && hours < 16) {
            setCurrentTime("Good afternoon")
        }
        else if (hours >= 4 && hours < 21){
            setCurrentTime("Good evening")
        }
        else {
            setCurrentTime("Good night")
        }
    }, [currentTime])


    return (
        <>
            <Header>
                <Wrap>
                    <ProfileImg src={currentUser ? currentUser.user.photoUrl : ""} />
                    <Wrapper>
                        <Text>{currentTime}👋</Text>
                        <Username>{currentUser ? currentUser.user.username : ""}!</Username>
                    </Wrapper>
                </Wrap>
                
                <NotificationsNoneIcon/>
        </Header>
        </>
    )
}

export default DashboardHeader