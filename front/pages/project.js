import React from "react";
import styled from "styled-components";
import Project from '../components/Project'

const Wrapper = styled.div`
    width:80%;
`;

const stack = () => {
    return (
        <Wrapper>
            <Project/>
        </Wrapper>
    )
}

export default stack;