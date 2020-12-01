import React, { useCallback } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from '../../reducers/user';
import { createFromIconfontCN } from '@ant-design/icons';
import {LogOut} from '../../style/Icon'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .font {
        display:block;
    }
    
    .icon {
        display:none;
    }


    @media screen and (max-width: 768px) {
        display:block;

        .font {
            display:none;
        }
        
        .icon {
            display:block;
        }

}
`;

const Button = styled.button`
    background-color: white;
    border:none;
    cursor: pointer;
`;
export default function UserInfo() {

    const dispatch = useDispatch();

    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
      });

    const {user}= useSelector((state) => state.user);
    
    const onLogout = useCallback(()=> {
    
        dispatch(logoutRequestAction());

    },[]);

    return (
        <Wrapper>
            <span>{user.name}님 환영합니다.</span>
            <Button className="font" onClick={onLogout}>로그아웃</Button>
            <div className="icon"  onClick={onLogout}>
                <LogOut/>
            </div>
        </Wrapper>
    )
};


