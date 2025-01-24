import { InputHTMLAttributes, forwardRef } from "react";
import { PaymentMethodContainer, ContentContainer } from "./styles";



type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode;
  label: string;  
}


export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({icon,label,id,...props}, ref)=>{
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} {...props} name="paymentMethod" ref={ref}/>
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
      
    </PaymentMethodContainer>
  )
})