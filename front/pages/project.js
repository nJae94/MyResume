import React, { useEffect } from "react";
import styled from "styled-components";
import Project from '../container/ProjectForm'
import { useDispatch } from "react-redux";
import { LOAD_USER_REQUEST } from "../reducers/user";

const Wrapper = styled.div`
    width:80%;
`;



const project = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    },[]);
    
    return (
        <Wrapper>
            <Project/>
        </Wrapper>
    )
}



export default project;