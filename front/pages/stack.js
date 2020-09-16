import React from "react";
import styled from "styled-components";
import StackInfo from "../components/Stack";
import { END } from 'redux-saga';
import axios from 'axios';
import { LOAD_USER_REQUEST } from '../reducers/user';
import wrapper from "../store/configureStore";

const Wrapper = styled.div`
    width:80%;
`;

const stack = () => {
    return (
        <Wrapper>
            <StackInfo />
        </Wrapper>
    )
}

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

export default stack;