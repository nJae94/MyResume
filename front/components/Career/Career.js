import React from 'react'
import styled from 'styled-components';
import './index.scss';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column; 
`;

const Career = styled.div`
    width:100%;
`;

export default function career() {
    return (
        <Wrapper>
            <Career>
                <div className="Title">웨인테크놀로지</div>
                <div className="Date">2019.04 ~ 현재</div>
                <Tooltip title="Detail">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
            </Career>
            <Career>
                <div className="Title">신성에프에이</div>
                <div className="Date">2019.08 ~ 2019.01(인턴)</div>
                <Tooltip title="Detail">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
            </Career>
            <Career>
                <div className="Title">캔 시스템</div>
                <div className="Date">2018.06 ~ 2018.08(인턴)</div>
                <Tooltip title="Detail">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
            </Career>
        </Wrapper>
    )
}
