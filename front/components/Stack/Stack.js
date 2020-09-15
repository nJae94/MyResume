import React, { useEffect } from 'react';
import styled from 'styled-components';
import StackInfo from './stackInfo';
import '../../style/font.scss';
import { useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../../reducers/user';

const Section = styled.section`
  width: 100%;
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
const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-bottom: 1rem;
`;

const TitleText = styled.h1`
  font-weight: 700;
`;

export default function Stack() {

  const dispatch = useDispatch();

  useEffect(()=> {

    dispatch({
        type: LOAD_USER_REQUEST,
    })
},[]);

    return (
        <Section>
            <TitleText className="Title">나의 스택 소개</TitleText>

            <StackList>
                <StackInfo/>

            </StackList>
        </Section>
    )
}
