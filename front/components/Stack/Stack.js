import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 83%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 92%;
  }
`;
const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
`;

const TitleText = styled(Text.withComponent('h1'))`
  font-weight: 700;
`;

export default function Stack() {
    return (
        <Section>
            <TitleText>나의 스택 소개</TitleText>

            <StackList>
                
            </StackList>
        </Section>
    )
}
