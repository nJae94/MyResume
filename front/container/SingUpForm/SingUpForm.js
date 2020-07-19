import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Input, Checkbox, Button } from 'antd';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../../reducers/user';
import Router from 'next/router';

const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 5.3rem;
    flex-direction: column;
`;

const Title = styled.div`
    padding: 50px 12px 25px 12px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: solid #E0E0E0 1px;
`;

const Singup = () => {
    
    const [email, onChangeEmail] = useInput('');
    const [name, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);

    const onChangePasswordCheck = useCallback((e)=> {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);

    },[password]);

    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const dispatch = useDispatch();

    const {signUpErrorReason , isSignedUp} = useSelector(state => state.user);

    useEffect(()=> {

        if(isSignedUp)
        {
            Router.push('/login');
        }
    },[isSignedUp]);

    useEffect(()=> {

        if(signUpErrorReason)
        {
            alert(signUpErrorReason);
        }
        
    },[signUpErrorReason]);

    const onSubmit = useCallback(

        () => {
            if(password !== passwordCheck){
                return setPasswordError(true);
            }

            if(!term) {
                return setTermError(true);
            }

            return dispatch({
                type: SIGN_UP_REQUEST,
                data: {
                    email,
                    password,
                    name
                },
            });
        },
        [password, passwordCheck, term],
    )

    return (
        <Wrapper>
            <Title>회원가입</Title>

            <Form style={{marginTop: '1.3rem'}} onFinish={onSubmit}>
                  <div>
                    <label htmlFor="user-id">이메일</label>
                    <br />
                    <Input name="user-id" value={email} required onChange={onChangeEmail} />
                    </div>
                    <div>
                    <label htmlFor="user-nick">이름</label>
                    <br />
                    <Input name="user-nick" value={name} required onChange={onChangeName} />
                    </div>
                    <div>
                    <label htmlFor="user-password" >비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                    <label htmlFor="user-password-check" >비밀번호체크</label>
                    <br />
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                    {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div> }
                    </div>
                    <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm} >약관에 동의합니다.</Checkbox>
                    {termError && <div style={{color:'red'}}>약관에 동의하셔야합니다.</div> }
                    </div>
                    <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </Wrapper>
    )
}

export default Singup;