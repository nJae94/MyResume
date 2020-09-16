import React from 'react'
import styled from "styled-components";
import Blog from '../components/Blog'
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { LOAD_USER_REQUEST } from '../reducers/user';

const Wrapper = styled.div`
    width:80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 90%;
      }
      @media (max-width: 500px) {
        width: 92%;
      }
`;

export const getServerSideProps = wrapper.getServerSideProps(async (context)=> {

    const cookie = context.req ? context.req.headers.cookie : '';
  
    axios.defaults.headers.Cookie = '';
  
    if( context.req && cookie)
    {
      axios.defaults.headers.Cookie = cookie;
    }
  
    context.store.dispatch({
        type: LOAD_USER_REQUEST,  
    });
  
    context.store.dispatch(END);
  
    await context.store.sagaTask.toPromise();
  });

export default function blog() {
    return (
        <Wrapper>
            <Blog/>
        </Wrapper>
    )
}
