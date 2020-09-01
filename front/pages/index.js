import React, { useEffect } from 'react';
import Main from '../components/Main/';
import { useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    },[]);
    
    return (
      <Main/>
    );

}

export default Home;