import React, { useCallback } from 'react';
import { Form, Input, Button, Divider  } from 'antd';
import styled from 'styled-components';
import Router from 'next/router'
import { useDispatch } from 'react-redux';
import {loginRequestAction} from '../../reducers/user';

const Wrapper = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5.3rem;
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

    const dispatch = useDispatch();

    const onSubmitForm = useCallback(()=> {
        
        const email = ev.value;

        const password = pv.value;
        
        dispatch(loginRequestAction({email,password}));

    
    },[]);

    return (
        <Wrapper>
            <Title>
                로그인 및 회원가입
            </Title>

            <Form style={{marginTop: '1.3rem'}} onFinish={onSubmitForm}>
                <Form.Item
                    label="Email"
                    name="ev"
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
                    name="pv"
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
            
            <Divider >또는</Divider>
            
                <Button onClick={()=> Router.push('/singup')}>
                    회원가입
                </Button>
        

        </Wrapper>
    )
}

export default LoginForm;