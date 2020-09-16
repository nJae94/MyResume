import axios from 'axios';
import React from 'react';
import { END } from 'redux-saga';
import Main from '../components/Main/';
import { LOAD_POST_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';



const Home = () => {

    return (
      <Main/>
    );

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

  context.store.dispatch({
      type: LOAD_POST_REQUEST,
          data: 1,
  });

  context.store.dispatch(END);

  await context.store.sagaTask.toPromise();
});

export default Home;