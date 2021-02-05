import styled from 'styled-components';
import { Colors } from '../../theme';

export const CardButton = styled.button`
    display: flex;
    flex-direction: column;
    width: 200px;
    min-height: 52px;
    padding: 4px 8px 8px;
    margin: 12px 0px;
    background-color: ${props => props.isActive ? Colors.green3 : 'white'};
    color: ${props => props.isActive ? 'white' : Colors.green4};
    border: 1px solid ${props => props.isActive ? Colors.green3 : Colors.green4};
    border-radius: 5px;
    cursor: ${props => props.isActive || 'pointer'};

    &:focus {
        outline: 0;
    }
    &:hover {
        background-color: ${props => props.isActive || Colors.green3};
        color: ${props => props.isActive || 'white'};
        border: 1px solid ${props => props.isActive || Colors.green3};
    }
    &:active {
        background-color: ${props => props.isActive || Colors.green4};
        color: ${props => props.isActive || 'white'};
        border: 1px solid ${props => props.isActive || Colors.green4};
    }
`;

export const Title = styled.span`
    font-size: 16px;
    line-height: 24px;
`;

export const Subtitle = styled.span`
    font-size: 12px;
`;
