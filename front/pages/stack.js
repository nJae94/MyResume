import React from "react";
import styled from "styled-components";
import StackInfo from "../components/Stack";

const Wrapper = styled.div`
    width:80%;
`;

const stack = () => {
    return (
        <Wrapper>
            <StackInfo />
        </Wrapper>
    )
}

export default stack;