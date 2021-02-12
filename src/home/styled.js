import styled from 'styled-components';
import { Colors } from '../theme';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    background-size: cover;
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    background-color: ${Colors.green2};
    height: 80px;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 24px 36px;
    width: 100%;
    max-width: 1200px;
`;

export const Title = styled.span`
    font-size: 40px;
    margin-top: 36px;
`;

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Subtitle = styled.span`
    font-size: 32px;
`;

export const ScrollableContainer = styled.div`
    height: 416px;
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
