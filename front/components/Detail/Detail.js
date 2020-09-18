import React from 'react';
import styled from 'styled-components';
import '../../style/font.scss';
import { Row, Col } from 'antd';
import Slider from "react-slick";

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    margin-top: 3rem;
`;

const TitleText = styled.div`
  text-align:center;
  vertical-align: middle;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 1.5rem;
`;

const CardImage = styled.div`

  height: 350px;
  min-width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 4px;
  
  @media (max-width: 400px) {
    height: 180px;
  }
`;


function Detail({project}) {

    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        initialSlide: 0,
      }

      console.log(project.Images);
    return (
        <Wrapper>
            <TitleText className='Title'> {project.title} </TitleText>

            <Row>
                <Col span={12}>
                    {project.Images.length === 1 ?
                          <div><img src={`http://localhost:3065/${project.Images[0].src}`} style={{width:'350px', height:'240px'}}/></div>  
                           :
                           <Slider {...settings} style={{width:'100%'}}>
                            {project.Images.map((v,i)=> (
                                <div key={v} style={{ display: 'inline-block'}}>
                                    <img src={`http://localhost:3065/${v.src}`} style={{width:'100%', height:'500px'}}/>
                                </div>
                            ))}
                         </Slider>
                    }
                </Col>

                <Col span={8} offset={4}>
                    col-8
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Detail
