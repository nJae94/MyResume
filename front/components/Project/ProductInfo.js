import React from 'react'
import styled from "styled-components";

const CardContainer = styled.div`

  display: flex;
  flex-grow: 1;
  flex-basis: 25%;
  flex-direction: column;
  width: 100%;
  
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;

  margin: auto;

  @media (max-width: 2000px) {

    padding: 0 0.45rem;

    &:first-child {
      padding-left: 0;
    }
    &:nth-child(4n) {
      padding-right: 0;
    }
  }
  @media (max-width: 950px) {
    padding: 0;
    flex-basis: 50%;
    position: relative;
    max-width: 47%;
    margin-bottom: 2rem;
  }
  @media (max-width: 400px) {
    max-width: 100%;
    float: unset;
    position: unset;
    flex-basis: 100%;
    margin-bottom: 2rem;
  }
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

const CardInfo = styled.div`
  margin-top: 0.5rem;
`;

const CardCategory = styled.span`
  font-weight: 700;
  font-size: 90%;
  width: 100%;
  display: block;
  color: dodgerblue;
  font-size: 12px;
  margin-bottom: 0.25rem;
`;

const CardPartList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const CardPart = styled.span`
  font-weight: 800;
  background-color: white;
  display: inline-block;
  width: fit-content;
  margin-bottom: 0.5rem;
  font-size: 16px;
  padding: 1px 5px;
  border-radius: 4px;
  box-shadow: 1px 1px 30px 3px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled.span`
  font-weight: 700;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  overflow: hidden;
  width: 100%;
  letter-spacing: -0.5px;
  font-size: 20px;
  line-height: 0.9;
`;

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
`;

export default function ProductInfo({project}) {

  const tags = project.tag.split(',');

    return (
       <CardContainer>

            <CardImage src={`http://localhost:3065/${project.Images[0].src}`}>

            <CardPartList>
              {tags.map((t,index)=> {
                return (
                  <CardPart key={t}>{t}</CardPart>
                )
              })}
                
            </CardPartList>
            </CardImage>

            <CardInfo>
                <CardCategory >{project.kinds}</CardCategory>

                <CardTitle>{project.title}</CardTitle>

                <CardMeta>
                    <label>{project.category}</label>
                    <label>{project.createdAt}</label>
                </CardMeta>
            </CardInfo>
           
       </CardContainer>
    )
}
