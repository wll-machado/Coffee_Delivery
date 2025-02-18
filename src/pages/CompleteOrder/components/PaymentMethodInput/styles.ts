import { styled } from "styled-components";


export const PaymentMethodContainer = styled.div`
 input {
    visibility: hidden;
    appearance: none;
 }

 input:checked + label div{
    border-color: ${({theme})=> theme.colors["brand-purple"]};
    background: ${({theme})=> theme.colors["brand-purple-light"]};

    &:hover{
        background: ${({theme})=> theme.colors["brand-purple-light"]};
    }
 }
`
export const ContentContainer = styled.div`
padding: 0 1rem;
background: ${({theme})=> theme.colors["base-button"]};
color: ${({theme})=> theme.colors["base-text"]};
display: flex;
align-items: center;
justify-content: flex-start;
gap: 0.75rem;
font-size: .75rem;
text-transform: uppercase;
border-radius: 6px;
height: 3rem;
border: 1px solid ${({theme})=> theme.colors["base-button"]};
transition: .4s;

svg{ 
    color: ${({theme})=> theme.colors["brand-purple"]};
}

&:hover{
    background: ${({theme})=> theme.colors["base-hover"]};
}

user-select: none;
`