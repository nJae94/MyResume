import React from 'react'
import styled from 'styled-components';
import Typed from 'react-typed';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

const Wrapper = styled.div`
    dispaly:flex;
    flex-direction: columun;
    align-content: center;
    justify-content: center;
`;

const Text = styled.div`
    dispaly:flex;
    flex-direction: columun;
    align-content: center;
    justify-content: center;
    text-align: center;
`;

const StyledInput = styled.input`
  background-color: white;
  padding: 5px;
  font-size: 14px;
  border: none;
  height: auto;
  text-align: center;
  width: 28%;
`;

const Cell = styled(Col)`
    height: 420px;
`;

export default function about() {
    return (
        <Wrapper>
            <Text>
                <div>요기 한줄 </div>
                저는
                <Typed
                    strings={[
                    "React","PHP","JavaScript","GraphQL","HTML5"]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                        <StyledInput className="Box"  type="text" />
             </Typed>
             개발자 입니다.
            </Text>
            <div style={{marginTop:'1rem' , textAlign:'center'}}>
                <Row gutter={[8,24]} justify='center'>
                    <Cell xs={24} md={12} lg={12} style={{display:'flex', justifyContent:'center'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="profile" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="정선재 / 27" description="웹 프론트 주니어 개발자" />
                        </Card>
                    </Cell>
                    <Cell xs={24} md={12} lg={12} >
                        자기소개
                    </Cell>
                    <Col xs={24} md={12} lg={12}>
                        경력
                    </Col>
                    <Col xs={24} md={12} lg={12}>
                        contact
                    </Col>

                </Row>
            </div>
        </Wrapper>
    )
}
