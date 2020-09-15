import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import { Input, Form, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, LOAD_POST_REQUEST } from '../../reducers/post';

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

    const dispatch = useDispatch();

    const {user} = useSelector((state)=> state.user);

    const onClick = useCallback((e)=> {

        if(!user)
        {
            return alert('로그인을 진행해주세요.');
        }

        if(!text)
        {
            return alert('내용을 작성하세요.');
        }

        
        dispatch({
            type: ADD_POST_REQUEST,
            data : {
                UserId:user.id,
                content: text,
            }
        });

        setText('');



    },[text]);

   

    useEffect(()=> {   

          dispatch({
            type: LOAD_POST_REQUEST,
            data: 1,
          });
    
      },[]);


    return (
        <>
             <Form style={{ width:'60%' , margin: '3rem 0 20px' }} encType="multipart/form-data" onFinish={onClick}>
                    
                    <Input.TextArea placeholder="내용을 입력하세요" value={text} onChange={({target:{value}}) => setText(value)} />

                    <div>
                        <NewPostButton type="primary" htmlType="submit">포스트 등록</NewPostButton>
                    </div>
            </Form>
        </>
    )
}
