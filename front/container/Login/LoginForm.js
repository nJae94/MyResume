import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import Router from 'next/router'

const Wrapper = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const Title = styled.div`
    padding: 50px 12px 25px 12px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: solid #E0E0E0 1px;
`;

const LoginForm = () => {
    return (
        <Wrapper>
            <Title>
                로그인 및 회원가입
            </Title>

            <Form style={{marginTop: '1.3rem'}}>
                <Form.Item
                    label="Username"
                    name="usee"
                    rules={[
                    {
                        required: true,
                        message: '아이디를 입력하세요!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: '비밀번호를 입력하세요',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            로그인
                        </Button>
                    </Form.Item>
            </Form>
            
            <div style={{padding: '14px 0'}}>
                    <div style={{float:'left',borderBottom:'solid #E0E0E0 1px', width:'180px', height:'7px'}}/>
                    <div style={{width:'40px', textAlign:'center', float:'left'}}>
                        또는
                    </div>
                    <div style={{float:'right', borderBottom:'solid #E0E0E0 1px', width:'180px', height:'7px'}}/>
                    
            </div>
            
                <Button onClick={()=> Router.push('/')}>
                    회원가입
                </Button>
        

        </Wrapper>
    )
}

export default LoginForm;