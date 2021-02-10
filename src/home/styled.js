import styled from 'styled-components';
import { Colors } from '../theme';

export const Background = styled.div`
    display: flex;
    justify-content: space-around;
    background-position: center;
    background-size: cover;
    padding: 24px 36px;
`;

export const ScrollableContainer = styled.div`
    height: 640px;
    padding: 0px 24px;
    overflow-y: scroll;
`;

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px;

    > * {
        &:first-child {
            margin-bottom: 36px;
        }
    }
`;

export const ActionsRow = styled.div`
    display: flex;

    > * {
        &:first-child {
            margin-right: 36px;
        }
    }
`;
