import { FC, useState } from "react";
import {Container,Delete, Wrap, Text, DotWrapper, Dot, Pad, Grid, Span} from './Dialer.style'
import LockIcon from '@mui/icons-material/Lock';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const Dialer: FC = () => {
    const [pin, setPin] = useState([]
    )
    const [count, setCount] = useState(0)
    const [isDigitPresent, setIsDigitPresent] = useState(false)
    
    const insertPin = (el: number) => {
        setIsDigitPresent(true)
        setPin(prev => {
            if (prev.length < 4) {
                return [...prev, el]
            }
            else {
                return prev
            }
        })
        
        setCount(c => {
            if (c < 3) {
                return c + 1
            }
            else {
                return c
            }
        })

        if (count < 4) {
            console.log("efect", count)
            const dots = document.querySelectorAll(".dot")
            dots[count].style.backgroundColor = '#359758'
            dots[count].style.width = '18px' 
            dots[count].style.height = '18px' 
            
        }
   

    }
    
    const deletePin = () => {
        const removedPin = pin.slice(0, pin.length - 1)
        setPin(removedPin)

              
        setCount(c => {
            if (c > 0) {
                return c - 1
            }
            else {
                return c
            }
        })

        if (count >= 0) {
            const dots = document.querySelectorAll(".dot")
            dots[count].style.backgroundColor = '#2A2F3A'        
            dots[count].style.width = '10px' 
            dots[count].style.height = '10px' 
        }

        if(count === 0){
            setIsDigitPresent(false)
        }
    }
    




    return (
        <>
            <Container>
                <Wrap>
            
            <LockIcon sx={{fontSize:'18px',color:"#359758"}}/>
                <Text>Enter PIN</Text>
            </Wrap>

                <DotWrapper>
                    <Dot className="dot"></Dot>
                    <Dot className="dot"></Dot>
                    <Dot className="dot"></Dot>
                    <Dot className="dot"></Dot>
                </DotWrapper>

                <Pad>
                    {nums.map((el, id) => (
                        <Grid onClick={() => {
                            insertPin(el)
                        }
                        } className='grid' key={id}>{el}</Grid>
                     ))}
                </Pad>
<Span>Forgot PIN?</Span>
                {isDigitPresent &&<Delete onClick={deletePin}>Delete</Delete>}
            </Container>
        </>
    )
}

export default Dialer