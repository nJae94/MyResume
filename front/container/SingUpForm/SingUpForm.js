import React from 'react';
import styled from 'styled-components';
import { Form, Input, Checkbox, Button } from 'antd';

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
    
    return (
        <Wrapper>
            <Title>회원가입</Title>

            <Form style={{marginTop: '1.3rem'}}>
                  <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" />
                    </div>
                    <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick"  />
                    </div>
                    <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password"  />
                    </div>
                    <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input name="user-password-check" type="password" />
                   
                    </div>
                    <div>
                    <Checkbox name="user-term" >약관에 동의합니다.</Checkbox>
                    
                    </div>
                    <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </Wrapper>
    )
}

export default Singup;