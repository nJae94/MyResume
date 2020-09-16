import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectInfo from '../../components/Project/ProductInfo';
import Link from 'next/link';
import {Plus} from '../../style/Icon';
import '../../style/font.scss';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_PROJECT_REQUEST } from '../../reducers/project';
import Router from 'next/router';
import { LOAD_USER_REQUEST } from '../../reducers/user';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../../store/configureStore';

const Section = styled.section`
  width: 100%;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 92%;
  }
`;

const Header = styled.div`
  display: flex;

`;

const TitleText = styled.h1`
  font-weight: 700;
  margin-right: 1rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
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



export default function ProjectForm() {


  const {Project, loadProjectDone} = useSelector((state) => state.project);

  const {user, loadUserDone} = useSelector((state)=> state.user);

  const dispatch = useDispatch();


  useEffect(()=> {

    if(loadUserDone && !user)
    {
      alert("로그인 후 확인 하실 수 있습니다.");
      Router.replace('/');
    }

    else{

      dispatch({
        type: LOAD_PROJECT_REQUEST,
        data: 1,
      });

    }

  },[user]);

 

  
    return (
        <Section>
          <Header>
            <TitleText className="Title">나의 프로젝트</TitleText>
           {user && user.id === 1 ? <Link href="/Edit/project"><a><Plus/></a></Link> : null} 
          </Header>
            
            <ProjectList>
              
               {Project.map((p,index)=> {
                 return (
              
                  <ProjectInfo key={index} project={p}/>
              
                 );
               })}
            </ProjectList>
        </Section>
        
    )
}
