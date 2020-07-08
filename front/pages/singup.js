import React from 'react';
import SingUpForm from '../container/SingUpForm'
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
`;

const singup = () => {
    return (
        <Wrapper>
            <SingUpForm />
        </Wrapper>
    )
}

export default singup;