import React from 'react'
import styled from "styled-components";
import Blog from '../components/Blog'
import { Input, Button, Form, Card,Avatar,Pagination} from 'antd';


const Wrapper = styled.div`
    width:80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function blog() {
    return (
        <Wrapper>
            <Blog/>
        </Wrapper>
    )
}
