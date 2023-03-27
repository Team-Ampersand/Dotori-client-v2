import styled from "@emotion/styled";

export const StepHeaderWrapper = styled.div`
    width: 415px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 27px;

    @media (max-width: 420px) {
        width: 100vw;
    }
    
`;

export const DotsWrapper = styled.div`
    width: 48px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;