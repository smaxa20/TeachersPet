import styled from 'styled-components';
import { Colors } from '../../theme';

export const ActionButton = styled.button`
    height: 200px;
    width: 200px;
    padding: 8px;
    border-radius: 5px;
    background-color: ${Colors.green4};
    color: ${Colors.white2};
    cursor: pointer;
    border: 0;
    
    &:focus {
        outline: 0;
    }
    &:hover {
        background-color: ${Colors.green3};
        color: ${Colors.white1};
        border: 1px solid ${Colors.green3};
    }
    &:active {
        background-color: ${Colors.green4};
        color: ${Colors.white2};
        border: 1px solid ${props => props.isActive || Colors.green4};
    }
`;

export const Label = styled.span`
    font-size: 36px;
`;
