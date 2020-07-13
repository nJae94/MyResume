import React from 'react';
import styled from 'styled-components';
import ProjectInfo from './ProductInfo';

const Section = styled.section`
  width: 84%;
  max-width: 1200px;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 92%;
  }
`;

const TitleText = styled.h1`
  font-weight: 700;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export default function Product() {
    return (
        <Section>
            <TitleText>나의 프로젝트</TitleText>

            <ProductList>
                <ProjectInfo />
                <ProjectInfo />
                <ProjectInfo />
            </ProductList>
        </Section>
        
    )
}
