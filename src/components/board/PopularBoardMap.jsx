import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'

import {bookmark, bookmarkck, checked, eye, thumbup} from '../../shared/svg/A-index'

const PopularBoardMap = (props) => {
    const navigate = useNavigate()
    // const [category,setCategory] = useState()
    const {content} =props
console.log(content)

    // if(content?.category==="나만의 비밀 레시피"){
    //     setCategory("비밀")
    // }else if(content?.category==="카페 추천합니다"){

    // }    

const create = content?.createdAt.split("T")[0]
const moveToBoard = (e) =>{
    navigate(`/board/${content?.id}`)
}

    return (
        <ScBoardList>
                <ScHeader>
                    <div>
                        {content?.category==="나만의 비밀 레시피"&&<ScMyrecipe>{content?.category}</ScMyrecipe>}
                        {content?.category==="카페 추천합니다"&&<ScRecommend>{content?.category}</ScRecommend>}
                        {content?.category==="기타"&&<ScEtc>{content?.category}</ScEtc>}
                        {/* <span>{content?.nickname}</span> */}
                    </div>
                  </ScHeader>  
                    <ScTitle onClick={moveToBoard}>{content?.title}</ScTitle>
                    <ScBottom>
                        <span>{content?.nickname}</span>
                    </ScBottom>
                     <Scbar>
                        <img src={bookmark}/>
                        <span>북마크</span>
                        <img src={thumbup}/>
                        <span>13</span>
                        <img src={eye}/>
                        <span>10</span>
                    </Scbar>
        </ScBoardList>
    )
    }

export default PopularBoardMap

const ScBoardList = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: space-between;
    /* border: 1px #ddd solid; */
    width: 220px;
    height: 217px;
    padding: 17px 20px 15px 20px;
    border-radius: 12px;
    font-size: 14px;
    margin: 24px 30px 24px 0;
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.185);
`
const ScHeader =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Scbar =styled.div`
    display: flex;
    gap: 5px;
`
const ScCategory =styled.span`
    border: 1px #2C278C solid;
    color: #2C278C;
    border-radius: 100px;
    padding: 2px 12px;
    font-size: 14px;
`
const ScTitle =styled.div`
    font-size: 22px;
    font-weight: 600;
    height: 83px;
    overflow: hidden;
`
const ScBottom =styled.div`
     display: flex;
    align-items: center;
    justify-content: space-between;
`

const ScMyrecipe =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F1E3E8;
  border-radius: 100px;
  color: #D86F96;
  padding: 2px 12px;
  cursor: pointer;
`
const ScRecommend =styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  background: #EDE2F2;
border-radius: 100px;
padding: 2px 12px;
color: #A454CA;
cursor: pointer;
`
const ScEtc= styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  background: rgba(255, 201, 15, 0.2);
border-radius: 100px;
color: #F6C720;
cursor: pointer;
`