import React, {useState} from 'react'
import styled from 'styled-components';
import './index.scss';
import { Button, Tooltip, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column; 
`;

const Career = styled.div`
    width:100%;
`;



export default function career() {

    const [Wein, SetWein] = useState(false);
    const [Shin, SetShin] = useState(false);
    const [Can, SetCan] = useState(false);

    const showWeinModal = () => {

        SetWein(true);
    }

    const handleWeinOk = e => {

        SetWein(false);

    }

    const showShinModal = () => {

        SetShin(true);
    }

    const handleShinOk = e => {

        SetShin(false);

    }

    const showCanModal = () => {

        SetCan(true);
    }

    const handleCanOk = e => {

        SetCan(false);

    }
    return (
        <Wrapper>
            <Career>
                <div className="Title">웨인테크놀로지</div>
                <div className="Date">2019.04 ~ 2020.09</div>
                <Tooltip title="Detail">
                    <Button type="primary" shape="circle" onClick={showWeinModal} icon={<SearchOutlined />} />
                </Tooltip>

                <Modal
                    title="웨인 테크놀로지"
                    visible={Wein}
                    onOk={handleWeinOk}
                >
                    <p>웨인테크놀로지에서 휴테크 및 진영자산관리 대부의 PL로써 해당 업체의 전반적인 개발 및 유지보수의 담당
                        진행한 개발 건으로는 진영자산관리 대부의 거래원장 기능 리뉴얼 ,
                         MSI,BSI 대부업체의 나의 사건 검색 크롤링 기능과 신용정보원과 연계한 전문 개발을 진행하였으며 
                        스마트 크라우드, BF펀드와 같은 P2P 업체의 솔루션 운영 및 홈페이지 개발 및 유지보수를 진행 경험이 있습니다.</p>
                    <p>기간 : 2019.04 ~ 2020.09</p>
                    <p>역할 : 사원/ 웹 개발자</p>
                </Modal>
            </Career>
            <Career>
                <div className="Title">신성에프에이</div>
                <div className="Date">2019.08 ~ 2019.01(인턴)</div>
                <Tooltip title="Detail">
                    <Button type="primary" shape="circle" onClick={showShinModal} icon={<SearchOutlined />} />
                </Tooltip>

                <Modal
                    title="신성에프에이"
                    visible={Shin}
                    onOk={handleShinOk}
                >
                    <p>현장실습이 끝난 뒤 신성 FA라는 기업에 졸업 전까지 인턴으로 근무하였으며 근무하는 동안
                        본사인 분당 사옥에서 C#과 Anglur의 기본과 반도체 및 LCD 자동 물류화 장비인 스토커 및 OHT에 대해 배웠습니다.
                        천안 파견 시 현대 가동 중단된 아반시스 장비 재기동 점검 및 안정화를 진행하였으며 구미 SK 실트론에서는 실제 사용중인 장비가 오류가 발생했을 시
                        초기 대응 및 안정화 업무를 수행 하였습니다.</p>
                    <p>기간 : 2018.08 ~ 2019.01</p>
                    <p>역할 : 인턴</p>
                </Modal>
            </Career>
            <Career>
                <div className="Title">캔 시스템</div>
                <div className="Date">2018.06 ~ 2018.08(인턴)</div>
                <Tooltip title="Detail">
                    <Button type="primary" shape="circle" onClick={showCanModal} icon={<SearchOutlined />} />
                </Tooltip>

                <Modal
                    title="캔 시스템"
                    visible={Can}
                    onOk={handleCanOk}
                >
                    <p>대학교 4학년 여름방학 기간 대학교 교수님의 권유로 성남시 중원구에 위치한 캔 시스템이라는 기업에서
                        8주간 현장 실습을 통해 C#, .NET, DAQ 및 하드웨어 통신에 대해 배웠으며 실습 기간동안 불량 케이블을 검사해내는 
                        검사 프로그램을 개발하였습니다.</p>
                    <p>기간 : 2018.06 ~ 2018.08</p>
                    <p>역할 : 인턴</p>
                </Modal>
            </Career>
        </Wrapper>
    )
}
