import React from 'react'
import styled from 'styled-components';
import '../../style/font.scss';
import {Button, Form, Input } from 'antd';
import DropZone from '../../components/Utils/FileUpload'

const { TextArea } = Input;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
`;
export default function project() {
    return (
        <Wrapper>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <h1 className='title'>프로젝트 등록</h1>
            </div>

            <Form style={{width:'700px'}} encType="multipart/form-data">

                <DropZone />

                <label>프로젝트 이름</label>
                <Input />
                <br />
                <br />
                <label>종류</label>
                <Input />
                <br />
                <br />
                <label>분류</label>
                <Input />
                <br />
                <br />
                <label>태그</label>
                <Input />
                <br />
                <br />
                <label>설명</label>
                <TextArea />

                <br />
                <br />
                <Button type="submit">
                    확인
                </Button>

            </Form>
        </Wrapper>
    )
}
