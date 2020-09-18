import {useRouter} from 'next/router';
import { END } from 'redux-saga';
import { LOAD_USER_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import styled from 'styled-components';
import { LOAD_PROJECT_SINGLE_REQUEST } from '../../reducers/project';
import { useSelector } from 'react-redux';
import DetailPage from '../../components/Detail'

const Wrapper = styled.div`
    width:80%;
`;

const Detail = () => {

    const router = useRouter();

    const {singleProject} = useSelector((state)=> state.project);

    console.log(singleProject);

    return(
        <Wrapper>
            <DetailPage project={singleProject}/>
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

    context.store.dispatch({
        type:LOAD_PROJECT_SINGLE_REQUEST,
        data: context.params.id,
    })

    
    context.store.dispatch(END);
  
    await context.store.sagaTask.toPromise();
  });
  
export default Detail;