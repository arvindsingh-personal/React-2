import { Box } from "@mui/system"
import { MessageText, PromotionsContainer } from "../../styles/promotions"
import { useState } from "react"
import { ContactlessOutlined } from "@mui/icons-material";





export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(2);
  const messages = [
    "20% off on your first order!",
    "Summer sale starts  now, visit any store.",
    "Please like and subscribe",
  ];
  return (
    <PromotionsContainer>
      <Box display={'flex'} justifyContent='center' alignItems={'center'} >
        <MessageText >
          {messages[0]}
        {console.log(messageIndex)}
        </MessageText>
      </Box>
    </PromotionsContainer>
  )
}