import styled from "styled-components";

interface TitleTextProps{
    color?: "title" | "subtitle" | "text";
    size?: "l" | "m" | "s" | "xs" | "xl";
    weight?: string | number
}

interface RegularTextProps{
    color?: "title" | "subtitle" | "label";
    size?: "l" | "m" | "s" ;
    weight?: string | number
}

export const TitleText = styled.p<TitleTextProps>`
    color: ${({theme,color})=> theme.colors[`base-${color ?? "title"}`]};
    font-size: ${({theme,size})=> theme.textSizes[`title-title-${size ?? "m"}`]};
    font-family: ${({theme})=> theme.fonts.title};
    line-height: 130%;
    font-weight: ${({weight})=>weight ?? 400};
`;

export const RegularText = styled.h1<RegularTextProps>`
    color: ${({theme,color})=> theme.colors[`base-${color ?? "title"}`]};
    font-size: ${({theme,size})=> theme.textSizes[`text-regular-${size ?? "m"}`]};
    font-family: ${({theme})=> theme.fonts.regular};
    line-height: 130%;
    font-weight: ${({weight})=>weight ?? 800};
`;