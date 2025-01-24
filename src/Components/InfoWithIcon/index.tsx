import { ReactNode } from "react"
import { IconContainer, InfoWithIconContainer } from "./styles"

interface InfoWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}

function Info({icon, text,iconBg}:InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>
        {icon}
      </IconContainer>   
      { 
        typeof text === "string" ? <p>{text}</p> : text
      }   
    </InfoWithIconContainer>
  )
}

export default Info
