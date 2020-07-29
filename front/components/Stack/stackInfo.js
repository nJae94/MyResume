import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../Module/ProgressBar.js';
import ReactIcon from '../../asset/Image/ReactIcon.png';
import JS from '../../asset/Image/javascript.png';
import PHP from '../../asset/Image/PHP.png';
import NJ from '../../asset/Image/nextjs.svg';
import '../../style/font.scss';

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
      <div>
        <StackContainer>
            <StackImage src={ReactIcon}/>

            <StackInfoWrapper>
                <TitleText className="Detail">React</TitleText>
                <Label >리액트의 기본 개념을 알고 있으며 Hooks를 사용한 코드를 작성합니다.</Label>
                <StackProgressBar color='#6BC9E2' progress={40}/>
            </StackInfoWrapper>
        </StackContainer>

        <StackContainer>
            <StackImage src={NJ}/>

            <StackInfoWrapper>
                <TitleText className="Detail">Next.js</TitleText>
                <Label >next.js를 이용한 서버사이드 렌더링 토이프로젝트를 진행한 경험이 있습니다.</Label>
                <StackProgressBar color='#0395ba' progress={20}/>
            </StackInfoWrapper>
        </StackContainer>

        <StackContainer>
            <StackImage src={JS}/>

            <StackInfoWrapper>
                <TitleText className="Detail">Javascript</TitleText>
                <Label >Javascript를 통한 웹 개발 및 유지보수를 진행하고 있으며 es6 문법을 사용할 줄 알고있습니다.</Label>
                <StackProgressBar color='#F7DF1E' progress={60}/>
            </StackInfoWrapper>
        </StackContainer>
        <StackContainer>
            <StackImage src={PHP}/>

            <StackInfoWrapper>
                <TitleText className="Detail">PHP</TitleText>
                <Label >PHP를 사용한 웹 개발 및 유지보수를 진행하고 있습니다.</Label>
                <StackProgressBar color='#7281B4' progress={50}/>
            </StackInfoWrapper>
        </StackContainer>
      </div>
    )
}

export default StackInfo;