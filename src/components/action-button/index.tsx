import React from 'react';
import * as Styled from './styled';

interface Props {
    label: string;
    onClick: Function;
}

export const ActionButton:React.FC<Props> = ({
    label,
    onClick,
}) => {
    return (
        <Styled.ActionButton onClick={onClick}>
            <Styled.Label>{label}</Styled.Label>
        </Styled.ActionButton>
    );
}