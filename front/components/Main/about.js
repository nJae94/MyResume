import React from 'react'
import styled from 'styled-components';
import Typed from 'react-typed';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;
import Profile from '../../asset/Image/Profile2.jpg';
import './index.scss';
import Career from '../Career';


const Wrapper = styled.div`
    dispaly:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`;

const Text = styled.div`
    dispaly:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    font-size: 30px;
`;

const StyledInput = styled.input`
  background-color: white;
  padding: 5px;
  font-size: 30px;
  border: none;
  height: auto;
  text-align: center;
  width: 28%;
`;

const Cell = styled(Col)`
    height: 420px;
`;
const Info = styled.div`
    font-size: 30px;
    margin-bottom:0.5rem;
`;

export default function about() {
    return (
        <Wrapper>
            <div style={{marginTop:'1rem' , textAlign:'center'}}>
                <Row gutter={[8,24]} justify='center'>
                    <Cell xs={24} md={12} lg={12} style={{display:'flex', justifyContent:'center'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="profile" src={Profile} />}
                        >
                            <Meta title="정선재 / 27" description="웹 프론트 주니어 개발자" />
                        </Card>
                    </Cell>
                    <Cell xs={24} md={12} lg={12} >
                        <Text className="info">
                            <Info>새로운 기술에 대한 관심<br/>배우고자 하는 열정 <br/>배움을 통한 성장 </Info>
                            저는
                            <Typed
                                strings={[
                                "React","PHP","JavaScript","GraphQL","HTML5"]}
                                typeSpeed={40}
                                backSpeed={50}
                                attr="placeholder"
                                loop >
                                    <StyledInput className="info"  type="text" />
                            </Typed>
                        개발자 입니다.
                        </Text>
                    </Cell>
                    <Cell xs={24} md={12} lg={12}>
                        <Career />
                    </Cell>
                    <Cell xs={24} md={12} lg={12}>
                        Contact
                    </Cell>

                </Row>
            </div>
        </Wrapper>
    )
}
