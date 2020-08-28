import React, { useState, useCallback } from 'react'
import styled from "styled-components";
import Blog from '../components/Blog'
import { Input, Button, Form, Card,Avatar   } from 'antd';
import Router from 'next/router';

const Wrapper = styled.div`
    width:80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BlogHeader = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    float:right;
`;

const ContentWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;



export default function blog() {

    const { Meta } = Card;

    const [text, setText] = useState('');

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
      }, []);

    return (
        <Wrapper>
            <BlogHeader>
                <Form style={{ width:'60%' , margin: '3rem 0 20px' }} encType="multipart/form-data">
                    
                    <Input.TextArea placeholder="내용을 입력하세요" value={text} onChange={onChangeText} />

                    <div>
                        <NewPostButton >포스트 등록</NewPostButton>
                    </div>
                </Form>
            </BlogHeader>

            <ContentWrapper>
                <Card style={{ width: '60%', marginTop: 16 }}>
                    <Meta
                        avatar={
                        <Avatar>정</Avatar>
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </ContentWrapper>
        </Wrapper>
    )
}
