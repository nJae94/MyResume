import React from 'react';
import styled from 'styled-components';
import ProjectInfo from './ProductInfo';
import Link from 'next/link';
import {Plus} from '../../style/Icon';
import '../../style/font.scss';

const Section = styled.section`
  width: 100%;
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

const Header = styled.div`
  display: flex;

`;

const TitleText = styled.h1`
  font-weight: 700;
  margin-right: 1rem;
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
          <Header>
            <TitleText className="Title">나의 프로젝트</TitleText>
            <Link href="/Edit/project"><a><Plus/></a></Link>
          </Header>
            
            <ProductList>
                <ProjectInfo />
                <ProjectInfo />
                <ProjectInfo />
                <ProjectInfo />
                <ProjectInfo />
                <ProjectInfo />
                <ProjectInfo />
                <ProjectInfo />
            </ProductList>
        </Section>
        
    )
}
