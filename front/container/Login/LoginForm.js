import React, { useCallback,useEffect } from 'react';
import { Form, Input, Button, Divider  } from 'antd';
import styled from 'styled-components';
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import {loginRequestAction} from '../../reducers/user';
import useInput from '../../hooks/useInput';

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

    const [email,onChangeEmail] = useInput('');
    const [password,onChangePassword] = useInput('');

    const {logInLoading,logInError,logInDone} = useSelector((state)=> state.user);

    useEffect(()=> {
        if(logInError){
            alert(logInError);
        }

        else if(logInDone)
        {
            Router.replace('/');
        }
    },[logInError,logInDone])

    const onSubmitForm = useCallback(()=> {
        
        dispatch(loginRequestAction({email,password}));        

    },[email,password]);

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
                    <Input value={email} onChange={onChangeEmail}/>
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
                    <Input.Password value={password} onChange={onChangePassword}/>
                </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" loading={logInLoading}>
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