import { Box } from "@mui/system"
import { MessageText, PromotionsContainer } from "../../styles/promotions"
import { useState, useEffect } from "react"
import { Slide } from "@mui/material";

const messages = [
  "20% off on your first order!",
  "Summer sale starts  now, visit any store.",
  "Please like and subscribe :)",
];



export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
   setTimeout(() => {
    setShow(false);
   },3000)

   const interval = setInterval(() => { 
    setMessageIndex(i => (i + 1) % messages.length);

    setShow(true);
   setTimeout(() => {
    setShow(false);
    },3000);

   },4000);
   
   return () => clearInterval(interval);
  
  },[])
  
  return (
    <PromotionsContainer>
      <Slide direction={show ? "left" : "right"} in={show}
      timeout={{
        enter: 500,
        exit: 100,
      }}
      >
      <Box display={'flex'} justifyContent='center' alignItems={'center'} >
        <MessageText >
          {messages[messageIndex]}
        </MessageText>
      </Box>
      </Slide>
    </PromotionsContainer>
  )
  
}