import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const Wrapper = styled.div`
     display: flex;
     justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    background-color: white;
    border:none;
    cursor: pointer;
`;
export default function UserInfo() {

    const {user}= useSelector((state) => state.user);

    return (
        <Wrapper>
            <span>{user.name}님 환영합니다.</span>
            <Button>로그아웃</Button>
        </Wrapper>
    )
};


