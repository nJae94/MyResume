import * as React from 'react'
import styled from 'styled-components';
import '../../style/font.scss';
import {Button, Form, Input } from 'antd';
import DropZone from '../../components/Utils/FileUpload'
import {
    PlusOutlined
  } from '@ant-design/icons';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_IMAGE_REQUEST, ADD_PROJECT_REQUEST } from '../../reducers/project';
import Slider from "react-slick";
import Router from 'next/router'

const { TextArea } = Input;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
`;

const Container = styled.div`
    display:flex;

`;
const Zone = styled.div`
    width:300px;
    height: 240px;
    border: 1px solid lightgray;
    display : flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
`;

const PreImage = styled.div`
  display: flex;
  width: 350px;
  geight:240px;
`;


export default function project() {

    const [title, onChangeTitle] = useInput('');
    const [category, onChangeCategory] = useInput('');
    const [kinds, onChangeKinds] = useInput('');
    const [tag, onChangeTag] = useInput('');
    const [content, onChangeContent] = useInput('');

    const imageInput = React.useRef();

    const dispatch = useDispatch();

    const {imagePaths,addProjectDone, addProjectError} = useSelector((state)=> state.project);


    const onClickImageUpload = React.useCallback(()=> {

        imageInput.current.click();

    },[imageInput.current]);

    const onChangeImages = React.useCallback((e)=>{

        const imageFormData = new FormData();

        [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f);
        });

        console.log(imageFormData);

        dispatch({
            type: UPLOAD_IMAGE_REQUEST,
            data: imageFormData
        })
    });

    const settings ={
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      initialSlide: 0,
    }

    const onSubmit = React.useCallback(()=> {

        const formData = new FormData();

        imagePaths.forEach((p)=> {
            formData.append('image',p);
        });

        formData.append('title', title);
        formData.append('kinds', kinds);
        formData.append('category', category);
        formData.append('tag', tag);
        formData.append('content', content);

        dispatch({
            type: ADD_PROJECT_REQUEST,
            data: formData
        });


    },[title,imagePaths,kinds,category,tag,content]);
    
    React.useEffect(() => {

        if(addProjectDone && addProjectError === null )
        {
            Router.replace('/project');
        }
    },[addProjectDone]);

    React.useEffect(() => {

        if(addProjectError)
        {
            alert(addProjectError);
        }
    },[addProjectError]);

    return (

        <Wrapper>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <h1 className='title'>프로젝트 등록</h1>
            </div>
           
            <Form style={{width:'700px'}} encType="multipart/form-data" onFinish={onSubmit}>

                {/* <DropZone /> */}
                <Container>

                    <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages}/>
                    <Zone onClick={onClickImageUpload}>
                        <PlusOutlined style={{fontSize:'3rem'}}/>
                     </Zone>

                     <PreImage>
                         {imagePaths.length === 1 ? <div><img src={`http://localhost:3065/${imagePaths[0]}`} style={{width:'350px', height:'240px'}}/></div> 
                         : 
                         <Slider {...settings} style={{width:'350px', marginLeft:'1rem'}}>
                            {imagePaths.map((v,i)=> (
                                <div key={v} style={{ display: 'inline-block'}}>
                                    <img src={`http://localhost:3065/${v}`} style={{width:'350px', height:'240px'}}/>
                                </div>
                            ))}
                         </Slider>}
                        
                     </PreImage>

                </Container>


                <label>프로젝트 이름</label>
                <Input name='title' value={title} onChange={onChangeTitle}/>
                <br />
                <br />
                <label>종류</label>
                <Input name='kinds' value={kinds} onChange={onChangeKinds} />
                <br />
                <br />
                <label>분류</label>
                <Input name='category' value={category} onChange={onChangeCategory}/>
                <br />
                <br />
                <label>태그</label>
                <Input name='tag' value={tag} onChange={onChangeTag}/>
                <br />
                <br />
                <label>설명</label>
                <TextArea name='content' value={content} onChange={onChangeContent} />

                <br />
                <br />


                    <Button type="primary" htmlType="submit">
                        확인
                    </Button>
            </Form>
        </Wrapper>
    )
}
