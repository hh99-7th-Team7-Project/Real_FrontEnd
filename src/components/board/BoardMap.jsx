import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  bookmark,
  bookmarkck,
  checked,
  eye,
  thumbup,
} from '../../shared/svg/A-index';

const BoardMap = (props) => {
  const navigate = useNavigate();
  // const [category,setCategory] = useState()
  const { content } = props;
  // console.log(content)

  // if(content?.category==="나만의 비밀 레시피"){
  //     setCategory("비밀")
  // }else if(content?.category==="카페 추천합니다"){

  // }

  const create = content?.createdAt.split('T')[0];
  const moveToBoard = (e) => {
    navigate(`/board/${content?.id}`);
  };

  return (
    <ScBoardList>
      <ScHeader>
        <div>
          {content?.category === '나만의 비밀 레시피' && (
            <ScMyrecipe>{content?.category}</ScMyrecipe>
          )}
          {content?.category === '카페 추천합니다' && (
            <ScRecommend>{content?.category}</ScRecommend>
          )}
          {content?.category === '기타' && <ScEtc>{content?.category}</ScEtc>}
        </div>
        <Scbar>
          {content?.bookmark ? (
            <img src={bookmarkck} alt="" />
          ) : (
            <img src={bookmark} alt="" />
          )}
          <span>북마크</span>
          <img src={thumbup} alt="" />
          <span>{content?.totalLove}</span>
          <img src={eye} alt="" />
          <span>{content?.view}</span>
        </Scbar>
      </ScHeader>
      <ScTitle onClick={moveToBoard}>{content?.title}</ScTitle>
      <ScBottom>
        <span>{content?.nickname}</span>
        <span>{create}</span>
      </ScBottom>
    </ScBoardList>
  );
};

export default BoardMap;

const ScBoardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-between;
  border: 1px #ddd solid;
  max-width: 1200px;
  width: 100%;
  height: 120px;
  padding: 17px 20px 15px 20px;
  border-radius: 12px;
  font-size: 14px;
  margin: 24px auto;
  background-color: white;
`;
const ScHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Scbar = styled.div`
  display: flex;
  gap: 5px;
`;
const ScCategory = styled.span`
  border: 1px #2c278c solid;
  color: #2c278c;
  border-radius: 100px;
  padding: 2px 12px;
  font-size: 14px;
`;
const ScTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
const ScBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ScMyrecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1e3e8;
  border-radius: 100px;
  color: #d86f96;
  padding: 2px 12px;
  cursor: pointer;
`;
const ScRecommend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ede2f2;
  border-radius: 100px;
  padding: 2px 12px;
  color: #a454ca;
  cursor: pointer;
`;
const ScEtc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  background: rgba(255, 201, 15, 0.2);
  border-radius: 100px;
  color: #f6c720;
  cursor: pointer;
`;
