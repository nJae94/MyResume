import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import {
    PlusOutlined
  } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div`
    display:flex;
    justify-content: 'space-between';
`;

const Zone = styled.div`
    width:300px;
    height: 240px;
    border: 1px solid lightgray;
    display : flex;
    align-items: center;
    justify-content: center;
`;

const PreImage = styled.div`
  display: flex;
  width: 350px;
  geight:240px;
`;

export default function FileUpload() {

    const  dispatch = useDispatch();

    const onDrop= (files) => {

        const ImageformData = new FormData();
        
        ImageformData.append("file",files[0]);

        [].forEach.call(files, f=> {
            ImageformData.append('image',f);
        });
        console.log(ImageformData);
        // dispatch({
        //     type: UPLOAD_IMAGES_REQUEST,
        //     data: ImageformData,
        // });

    }


    return (
        <Wrapper>
            <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps}) => (
                    <Zone {...getRootProps()}>
                        
                        <input {...getInputProps()}/>
                        <PlusOutlined style={{fontSize:'3rem'}}/>
                    </Zone>
                    
                )}
            </Dropzone>

            <PreImage>

            </PreImage>
        </Wrapper>
    )
}
