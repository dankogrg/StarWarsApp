import { keyframes, styled } from 'styled-components';

const ldsAnimation = keyframes`
    0% {
        top: 8px;
        height: 64px;
    }
    50%, 100% {
        top: 24px;
        height: 32px;
    }
`;

const LoaderContainer = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FacebookLoader = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`;

const LoaderBar = styled.div<{ $leftPosition?: string; $animationDelay?: string }>`
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: ${ldsAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    left: ${(props) => props.$leftPosition};
    animation-delay: ${(props) => props.$animationDelay};
`;

const Loader = (): JSX.Element => {
    return (
        <LoaderContainer>
            <FacebookLoader>
                <LoaderBar $leftPosition="8px" $animationDelay="-0.24s" />
                <LoaderBar $leftPosition="32px" $animationDelay="-0.12s" />
                <LoaderBar $leftPosition="56px" $animationDelay="0" />
            </FacebookLoader>
        </LoaderContainer>
    );
};

export default Loader;
