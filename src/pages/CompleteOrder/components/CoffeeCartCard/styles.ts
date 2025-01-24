import { styled } from "styled-components";


export const CoffeeCartCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;

    border-bottom: 1px solid ${({theme})=> theme.colors["base-button"]};
    padding-bottom:1.5rem ;
    margin-bottom: 1.5rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
            width: 4rem;
            height: 4rem;
        }
    }

    >p{
        font-weight: 700;
        align-self: flex-start;
    }

`

export const ActionContainer = styled.div`
    margin-top: 2.5rem;
    height: 2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    >div{
        max-width: 4.5rem;
        height: 100%;
    }
`

export const RemoveButton = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme})=> theme.colors["base-button"]};
    color: ${({theme})=> theme.colors["base-text"]};
    cursor: pointer;
    gap: .25rem;
    font-size: .75rem;
    height: 100%;
    padding: 0 .5rem;
    border-radius: 6px;
    transition: .4s;

    &:hover{
        background: ${({theme})=> theme.colors["base-hover"]};
    }

    svg{
        color: ${({theme})=> theme.colors["brand-purple"]};
    }
`