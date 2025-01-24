import { styled } from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    position: relative;

    > p {
        color: ${({theme})=> theme.colors["base-error"]};
    }
`

export const InputStyleContainer = styled.input`
height: 2.625rem;
border-radius:4px;
border: 1px solid ${({theme})=> theme.colors["base-button"]};
background: ${({theme})=> theme.colors["base-input"]};
transition: .4s;

color: ${({theme})=> theme.colors["base-text"]};
font-size: .75rem;
padding: 0 .75rem;

&:focus {
    border-color: ${({theme})=> theme.colors["brand-yellow-dark"]};
}

&::placeholder{
    color: ${({theme})=> theme.colors["base-label"]};
}
`