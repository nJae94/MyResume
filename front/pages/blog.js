import React from 'react'
import styled from "styled-components";
import Blog from '../components/Blog'
import { Input, Button } from 'antd';
import Router from 'next/router';

const Wrapper = styled.div`
    width:80%;
    flex-direction: column;
`;

const BlogHeader = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    position: relative;
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  border-color: rgb(52, 58, 64);
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 70%;
  
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const NewPostButton = styled(Button)`
    margin-left: 1.25rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: bold;
    word-break: keep-all;
    color: rgb(52, 58, 64);
    cursor: pointer;
    border-radius: 1rem;
    outline: none;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(52, 58, 64);
    border-image: initial;
    transition: all 0.125s ease-in 0s;
`;

export default function blog() {
    return (
        <Wrapper>
            <BlogHeader>
                 <form >
                    <SearchInput 
                    placeholder="검색" 
                    />
                </form>

                <NewPostButton onClick={()=> Router.push('/Edit/post')}>
                    새 글 작성
                </NewPostButton>
            </BlogHeader>
            <Blog/>
        </Wrapper>
    )
}
