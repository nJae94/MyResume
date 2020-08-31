import React from 'react';
import styled from 'styled-components';
import { Input, Card,Avatar,Pagination} from 'antd';
import EidtFrom from '../../container/BlogForm'


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

    return (
        <>
            <BlogHeader>
               <EidtFrom />
            </BlogHeader>

            <ContentWrapper>
                <Card style={{ width: '60%', marginTop: 16 }}>
                    <Meta
                        avatar={
                        <Avatar>정</Avatar>
                        }
                        title="정선재"
                        description="테스트 내용"
                    />
                </Card>

                <Pagination style={{marginTop:'2rem'}} defaultCurrent={1} total={50} />
            </ContentWrapper>
        </>
    )
}
