import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../Module/ProgressBar.js';
import ReactIcon from '../../asset/Image/ReactIcon.png';

const StackContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0;
  align-items: center;
`;

const StackImage = styled.img`
  width: 3.5rem;
  filter: drop-shadow(1px 2px 5px rgba(30, 144, 255, 0.2));
`;

const StackInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  width: 80%;
  @media (max-width: 1024px) {
    width: -webkit-fill-available;
  }
`;

const StackProgressBar = styled(ProgressBar)`
  margin-top: 0.5rem;
`;

const TitleText = styled.h1`
  font-weight: 700;
`;

 const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  width: fit-content;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.3rem;
`;

const StackInfo = () => {
    return (
        <StackContainer>
            <StackImage src={ReactIcon}/>

            <StackInfoWrapper>
                <TitleText>리액트</TitleText>
                <Label>리액트의 기본 개념을 알고 있으며 Hooks를 사용한 코드를 작성합니다.</Label>
                <StackProgressBar color='#6BC9E2' progress={30}/>
            </StackInfoWrapper>

        </StackContainer>
    )
}

export default StackInfo;