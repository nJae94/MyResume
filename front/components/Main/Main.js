import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'antd';
import About from './about';
import { useDispatch } from 'react-redux';
import {LOAD_USER_REQUEST} from '../../reducers/user';

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

    const dispatch = useDispatch();

    useEffect(()=> {

        dispatch({
            type: LOAD_USER_REQUEST,
        })
    },[]);
    
    return (
    <Wrapper>
        <LeftMenu>
            <About/>
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