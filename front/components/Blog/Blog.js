import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, Card,Avatar,Pagination} from 'antd';
import EidtFrom from '../../container/BlogForm'
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POST_REQUEST } from '../../reducers/post';


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


const ContentWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;



export default function Blog() {

    const { Meta } = Card;

    const dispatch = useDispatch();

    const [pages,setPages] = useState(1);

    const onChange = page => {
        setPages(page);
    }

    console.log(pages);
    useEffect(()=> {

        dispatch({
            type: LOAD_POST_REQUEST,
            data: pages,
        });

    },[pages]);

    const {mainPosts, PostCount} = useSelector((state) => state.post);

    return (
        <>
            <BlogHeader>
               <EidtFrom />
            </BlogHeader>

            <ContentWrapper>
                {
                   PostCount > 0 && mainPosts.map((m) => {
                        return (
                           
                                <Card key={m.createdAt} style={{ width: '60%', marginTop: 16 }}>
                                    <Meta
                                        avatar={
                                        <Avatar>정</Avatar>
                                        }
                                        title={m.User.name}
                                        description={m.content}
                                    />
                                </Card>
                            
                        )
                    })
                }
                

                <Pagination style={{marginTop:'2rem'}} current={pages} onChange={onChange} total={PostCount} />
            </ContentWrapper>
        </>
    )
}
