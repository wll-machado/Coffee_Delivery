import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    height: 6.5rem;
    background: ${(props) => props.theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const HeaderButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

interface HeaderButtonProps {
    variant: "purple" | "yellow";
    
}

export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding:0 0.5rem;
    min-width: 2.3rem;
    height: 2.3rem;
    border: none;
    border-radius: 6px;
    position: relative;
    font-size: ${(props) => props.theme.textSizes["text-regular-s"]};

    ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}`]};
    `}

    ${({ variant }) => variant === "purple" && css`
    
    svg{
        color: ${props => props.theme.colors[`brand-${variant}`]};
    }
    `}
`; 