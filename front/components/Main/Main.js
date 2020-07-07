import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'antd';

const Wrapper = styled.div`
    display:flex;
    width:100%;
    margin-top: 3rem;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    
`

const LeftMenu = styled.div`
    width:80%;
    margin-left:1.8rem;
`;

const RightMenu = styled.div`
    width:20%;
`;

const Post = styled(Card)`
    width: 20rem;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
    margin: 1rem;
    overflow: hidden;

`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1 1 0%;
`;

const PostFooter = styled.div`
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
  padding: 0.625rem 1rem;
  border-top: 3px solid rgb(250, 250, 250);
`;

const Main = () => {
    return (
    <Wrapper>
        <LeftMenu>
            <Row gutter={[8,24]}>
                <Col xs={24} md={12} lg={8}>
                    <Post>
                        <a>여기 사진</a>
                        <PostContent>여기 본문</PostContent>
                        <PostFooter>여기 날짜</PostFooter>
                    </Post>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Post>
                        <a>여기 사진</a>
                        <PostContent>여기 본문</PostContent>
                        <PostFooter>여기 날짜</PostFooter>
                    </Post>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Post>
                        <a>여기 사진</a>
                        <PostContent>여기 본문</PostContent>
                        <PostFooter>여기 날짜</PostFooter>
                    </Post>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Post>
                        <a>여기 사진</a>
                        <PostContent>여기 본문</PostContent>
                        <PostFooter>여기 날짜</PostFooter>
                    </Post>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Post>
                        <a>여기 사진</a>
                        <PostContent>여기 본문</PostContent>
                        <PostFooter>여기 날짜</PostFooter>
                    </Post>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Post>
                        <a>여기 사진</a>
                        <PostContent>여기 본문</PostContent>
                        <PostFooter>여기 날짜</PostFooter>
                    </Post>
                </Col>
            </Row>

        </LeftMenu>

        <RightMenu>
            <Row>
                <Col span={24}>
                    <section>
                        <h4>최근 댓글</h4>
                        <ul>
                            <li>댓글1</li>
                            <li>댓글1</li>
                            <li>댓글1</li>
                        </ul>
                    </section>
                </Col>
            </Row>
        </RightMenu>
    </Wrapper>
    )
}

export default Main;