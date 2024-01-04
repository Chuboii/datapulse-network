import { FC } from "react";
import { Container, Box, Icon, Icons, Follow, H2, Form, Wrap, Header, Input, Button } from './FundWalletForm.style';
import { useForm } from "react-hook-form";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useDispatch, useSelector } from "react-redux";
import Paystack from "../../utils/paystack/Paystack";
import { StateProp } from "../../utils/store/reducers/user reducer/userInterface";
import { ToggleStateProp } from "../../utils/store/reducers/toggle reducer/toggleInterface";
import PreventScroll from "../../components/prevent scroll/PreventScroll"

type FormData = {
  username: string;
  email: string;
  phone: number;
  amount: number;
};



const PaymentForm: FC = () => {
  const { currentUser } = useSelector((state: StateProp) => state.user);
  const { register, handleSubmit, getValues, formState: { isValid } } = useForm<FormData>({
    defaultValues: {
      username: currentUser.user.username,
      email: currentUser.user.email,
    },
  });
  const dispatch = useDispatch();
  const togglePaymentForm = useSelector((state: ToggleStateProp) => state.toggle.togglePaymentForm);

  const registerOptions = {
    username: {
      required: true,
    },
    email: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    },
    amount: {
      required: true,
    },
    phone: {
      required: true,
    },
  };

  const submitForm = () => console.log("")
    // if (data.username && data.email && data.amount && data.phone) {
        
    // }
  
    
  const disablePaymentForm = () => dispatch({ type: "TOGGLE_PAYMENT_FORM", payload: false });

  return (
    <>
   {togglePaymentForm && <PreventScroll/>}
      <Container display={togglePaymentForm ? "0" : "5000px"}>
        <Header>
          <ArrowCircleLeftOutlinedIcon onClick={disablePaymentForm} sx={{ fontSize: "50px" }} />
        </Header>
        <Box>
          <H2>Add money to wallet</H2>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Wrap>
              <Icon>
                <PersonIcon sx={{ color: "#777E90" }} />
              </Icon>
              <Input placeholder='username' {...register("username", registerOptions.username)} />
            </Wrap>
            <Wrap>
              <Icon>
                <MailIcon sx={{ color: "#777E90" }} />
              </Icon>
              <Input placeholder='joedoe@gmail.com' {...register("email", registerOptions.email)} />
            </Wrap>
            <Wrap>
              <Icon>
                <PhoneIcon sx={{ color: "#777E90" }} />
              </Icon>
              <Input
                placeholder='080123456789'
                type='number'
                {...register("phone", registerOptions.phone)}
              />
            </Wrap>
            <Wrap>
              <Icon>
                <AttachMoneyIcon sx={{ color: "#777E90" }} />
              </Icon>
              <Input
                placeholder='100 naira'
                type='number'
                {...register("amount", registerOptions.amount)}
              />
            </Wrap>
            <Button active={isValid ? "#0363A4" : "transparent"} onClick={submitForm}>
           
                <Paystack name={getValues().username} email={getValues().email} amount={getValues().amount} phone={getValues().phone} />
              
              </Button>
          </Form>
          <Follow>Follow us:</Follow>
          <Icons>
            <FacebookOutlinedIcon sx={{ marginRight: ".8rem", color: "#777E90" }} />
            <InstagramIcon sx={{ marginRight: ".8rem", color: "#777E90" }} />
            <TwitterIcon sx={{ color: "#777E90" }} />
          </Icons>
        </Box>
      </Container>
    </>
  );
};

export default PaymentForm;
