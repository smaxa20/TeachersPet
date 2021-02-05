import React from 'react';
import * as Styled from './styled';

interface Props {
    title: string;
    subtitle: string;
    isActive?: boolean;
    onClick: Function;
}

export const ListCard:React.FC<Props> = ({ title, subtitle, isActive, onClick }) => {
    return (
        <Styled.CardButton isActive={isActive} onClick={onClick}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        </Styled.CardButton>
    );
}
