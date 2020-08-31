import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import { Input, Form, Button} from 'antd';

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

export default function BlogForm() {

    const [text, setText] = useState('');

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
      }, []);


    return (
        <>
             <Form style={{ width:'60%' , margin: '3rem 0 20px' }} encType="multipart/form-data">
                    
                    <Input.TextArea placeholder="내용을 입력하세요" value={text} onChange={onChangeText} />

                    <div>
                        <NewPostButton >포스트 등록</NewPostButton>
                    </div>
                </Form>
        </>
    )
}
