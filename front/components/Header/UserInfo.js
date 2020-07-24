import React, { useCallback } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from '../../reducers/user';


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

    const dispatch = useDispatch();

    const {user}= useSelector((state) => state.user);
    
    const onLogout = useCallback(()=> {
    
        dispatch(logoutRequestAction());

    },[]);

    return (
        <Wrapper>
            <span>{user.name}님 환영합니다.</span>
            <Button onClick={onLogout}>로그아웃</Button>
        </Wrapper>
    )
};


