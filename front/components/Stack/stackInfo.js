import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
`;

const Title = styled.div`
    padding: 30px 12px 25px 12px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: solid #E0E0E0 1px;
`;

const Content = styled.div`
    display:flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    min-width:100%;
`;

const Img = styled.div`
    width:20%;
`;

const ProgressContent = styled.div`
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const StackInfo = () => {
    return (
        <Wrapper>
            <Title>나의 스택 요약</Title>
            
            <Content>
                
                <Img >사진</Img>
                <ProgressContent>
                    <span>리액트</span>
                    <Progress percent={60} showInfo={false}/>
                </ProgressContent>
            </Content>
        </Wrapper>
    )
}

export default StackInfo;