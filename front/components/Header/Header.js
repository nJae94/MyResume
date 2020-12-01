import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown, message } from 'antd';
import {MenuIcon, LoginIcon} from '../../style/Icon'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import UserInfo from './UserInfo';
import {
  LoginOutlined
} from '@ant-design/icons'

const HeaderWrapper = styled.div`
  width: 100%;
  border: 0;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 10px 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  z-index: 2;
  flex-wrap : no-wrap;
`;

const HeaderColumn = styled.div`
  flex-basis:33%;
  text-align: center;
  vertical-align: middle;
  flex-shrink:1;
  .logo {
    font-size: 30px;
    font-weight: 450;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    div {
      transform: rotateZ(-15deg);
      margin: 0px -3px;
    }

    span {
      font-size:24px;
      font-weight: 200;
      color:#6690FF;
      margin-bottom: 0.2rem;
    }

    @media screen and (max-width: 768px) {
      display:none;
    }

  }

  &:first-child {
    text-align: center;
  }

  
  &:last-child {
    text-align: center;

    span {
      display:inline-block;
      &:first-child {
        margin-right: 10px;
        border-right: solid 1px #F0F0F3;
        padding: 10px;
      }
    }

    @media screen and (max-width: 768px) {
      
      span {
        display:none;
      }
    }
  }
`;

const Login = styled.div`
  display:none;

  @media screen and (max-width: 768px) {

    display:block;
  
    div {
      border: none;
      background-color:white;
    }
  }
`;

const Header = () => {

  const router = useRouter();

  const { user } = useSelector((state) => state.user);

  console.log(user);

  const onClick = ({ key }) => {
     router.push(`${key}`);
  };

  const menu = (

    <Menu onClick={onClick}>
      <Menu.Item key="/stack">스택</Menu.Item>
      <Menu.Item key="/project">프로젝트</Menu.Item>
      <Menu.Item key="/blog">방명록</Menu.Item>
    </Menu>
  );
    
    return (
        <HeaderWrapper className="nomal">
          <HeaderColumn>
          <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <MenuIcon/>
              </a>
          </Dropdown>
          </HeaderColumn>
          <HeaderColumn>
            <Link href="/">
              <a style={{color:'#000000'}}>
              <div className='logo'>
                R
                <div>E</div>
                SUME
                <span>@nJae94</span>
              </div>
              </a>
            </Link>
          </HeaderColumn>
          
          <HeaderColumn>
          {user ? <UserInfo/>
          :

           <>
              <span> 
                <Link href="/login"><a style={{color: '#000000'}}>로그인</a></Link>
              </span>
                            
                <span> 
                  <Link href="/singup"><a style={{color: '#000000'}}>회원가입</a></Link>
                </span>

                <Login>
                  <Link href="/login"><a><LoginIcon /></a></Link>
                </Login>
           </>
          }
          </HeaderColumn>
        </HeaderWrapper>
    );
};

export default Header;