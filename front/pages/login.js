import React from 'react';
import LoginForm from '../container/Login'
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
`;

const login = () => {
    return (
        <Wrapper>
            <LoginForm/>
        </Wrapper>
    )
}

export default login;