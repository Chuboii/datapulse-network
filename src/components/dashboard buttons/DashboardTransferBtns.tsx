import { FC } from "react";
import { Container, Button, Span, Icon } from './DashboardTransferBtn.style'
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';

const DashboardTransferBtns: FC = () => {
    
    return (
        <>
            <Container>
                <Button><Icon><SendIcon/></Icon> <Span>Send</Span></Button>
                <Button><AddBoxIcon/><Span>Add money</Span></Button>
            </Container>
        
        </>
    )
}

export default DashboardTransferBtns