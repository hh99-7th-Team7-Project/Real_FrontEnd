import React, { useState } from 'react';
import styled from 'styled-components';
import Styled from 'styled-components';
import RandomModalBg from './image/RandomModalBg.png';
import RandomBackBg from './image/RamdomResultBg.webp';
import RandomLogo from './svg/RandomImage.svg';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import apis from '../../shared/api/main'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import { createTheme } from '@mui/material/styles';
import './flipcard.css';

import { withSentryReactRouterV6Routing } from '@sentry/react';

const RandomPicker = ({closeModal}) => {

  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [ status , setStatus ] = useState();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2c278c',
      },
    },
  });

  
  const [ selectBrandValue , setSelectBrandValue ] = useState();
  const [ selectCategoryValue , setSelectCategoryValue ] = useState();
  const [ value, setValue ] = useState([2000, 8000]);

  const [ randomCoffee , setRandomCoffee ] = useState();

  


  function valuetext(value) {
    return `${value}원`;
  }

  console.log("min",value[0],"max",value[1]);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBrandChange = (e) => {
    // console.log(e.target.value);
    setSelectBrandValue(e.target.value);
  }

  const handleCategoryChange = (e) => {
    // console.log(e.target.value);
    setSelectCategoryValue(e.target.value);
  }

  console.log(selectBrandValue);
  console.log(selectCategoryValue);


  const randomCoffeePick = async () => {
    await apis.randomCoffee(
        selectBrandValue,
        selectCategoryValue,
        value[0],
        value[1]
    )
    .then((res)=>{
      console.log("response",res?.data);
      setRandomCoffee(res?.data);
    })
    .catch((error)=>{
      console.log("에러로그",error.response.status);
      if (error.response.status === 404) {
        Swal.fire({
          title: '해당하는 커피를 찾을 수 없습니다.',
          icon: 'warning',
          confirmButtonText: '확인',
        });
        closeModal();
      }
      Sentry.captureException(error);
    })
  }


  const coffeeBrand = randomCoffee?.brand;
  const coffeeName = randomCoffee?.name;
  const coffeeImg = randomCoffee?.img;
  const coffeePrice = randomCoffee?.pricePair[0].price;
  const coffeeStar = randomCoffee?.star;




  return (
    <Background>
    <ScTotal className="container" click={click}>
      <ScWrap className="item front">      
      <ScRandomWrap>
        <ScTitleImgWrap>
          <ScTitleWrap>
            <ScTitle1>오늘은</ScTitle1>
            <ScTitle2>어떤 음료를 마셔볼까 ?</ScTitle2>
            <ScTitle3>선택이 어려운 당신에게 딱맞는 음료를 추천해드립니다.</ScTitle3>
          </ScTitleWrap>
          <ScImgWrap>
            <ScImg src={RandomLogo} alt=""/>
          </ScImgWrap>
        </ScTitleImgWrap>
        <ScBrandWrap>
            <h4>브랜드별</h4>
            <ScBrandRadioWrap>
              <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="스타벅스" 
                  value="스타벅스"
                  checked={selectBrandValue === "스타벅스"}                   
                  onChange={handleBrandChange}
                  />
                <label htmlFor="스타벅스">스타벅스</label>
              </ScBrandAlign>
              <ScBrandAlign>              
                  <ScInput 
                    type="radio" 
                    id="이디야" 
                    value="이디야" 
                    checked={selectBrandValue === "이디야"}                 
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="이디야">이디야</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="탐앤탐스"
                    value="탐앤탐스"
                    checked={selectBrandValue === "탐앤탐스"}                  
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="탐앤탐스">탐앤탐스</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="빽다방" 
                    value="빽다방" 
                    checked={selectBrandValue === "빽다방"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="빽다방">빽다방</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="드롭탑" 
                    value="드롭탑" 
                    checked={selectBrandValue === "드롭탑"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="드롭탑">드롭탑</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="더벤티" 
                    value="더벤티" 
                    checked={selectBrandValue === "더벤티"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="더벤티">더벤티</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="엔제리너스" 
                    value="엔제리너스" 
                    checked={selectBrandValue === "엔제리너스"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="엔제리너스">엔제리너스</label>
                </ScBrandAlign>
                <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="커피빈" 
                  value="커피빈" 
                  checked={selectBrandValue === "커피빈"}
                  onChange={handleBrandChange}
                  />
                <label htmlFor="커피빈">커피빈</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="컴포즈" 
                    value="컴포즈" 
                    checked={selectBrandValue === "컴포즈"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="컴포즈">컴포즈</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="할리스" 
                    value="할리스" 
                    checked={selectBrandValue === "할리스"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="할리스">할리스</label>
                </ScBrandAlign>
                <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="카페베네" 
                  value="카페베네" 
                  checked={selectBrandValue === "카페베네"}
                  onChange={handleBrandChange}
                  />
                <label htmlFor="카페베네">카페베네</label>
                </ScBrandAlign>
                <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="폴바셋" 
                  value="폴바셋" 
                  checked={selectBrandValue === "폴바셋"}
                  onChange={handleBrandChange}
                  />
                <label htmlFor="폴바셋">폴바셋</label>
              </ScBrandAlign>
              <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="메가커피" 
                  value="메가커피" 
                  checked={selectBrandValue === "메가커피"}
                  onChange={handleBrandChange}
                  />
                <label htmlFor="메가커피">메가커피</label>
              </ScBrandAlign>
            </ScBrandRadioWrap>
        </ScBrandWrap>
        <ScCategoryWrap>
            <h4>종류</h4>
            <ScCateRadioWrap>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="COFFEE" 
                    value="COFFEE" 
                    checked={selectCategoryValue === "COFFEE"}
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="COFFEE">커피</label>
                </ScCateAlign>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="NONCOFFEE" 
                    value="NONCOFFEE" 
                    checked={selectCategoryValue === "NONCOFFEE"}
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="NONCOFFEE">논커피</label>
                </ScCateAlign>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="SMOOTHIE" 
                    value="SMOOTHIE"
                    checked={selectCategoryValue === "SMOOTHIE"} 
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="SMOOTHIE">스무디</label>
                </ScCateAlign>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="ADE" 
                    value="ADE" 
                    checked={selectCategoryValue === "ADE"}
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="ADE">에이드</label>
                </ScCateAlign>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="TEA" 
                    value="TEA" 
                    checked={selectCategoryValue === "TEA"}
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="TEA">티</label>
                </ScCateAlign>
            </ScCateRadioWrap>
        </ScCategoryWrap>
        <ScPriceWrap>
            <h4>가격대</h4>
            <ScMobile>
              <div>W2000</div>
              <div>W7000+</div>
            </ScMobile>
            <ScPriceAlign>
              <Box style={{width:"508px"}}>
              <Slider
                  theme={theme}
                  getAriaLabel={() => 'Price range'}
                  value={value}
                  defaultValue={[2000, 7000]}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}                    
                  step={1000}
                  marks
                  min={2000}
                  max={7000}
                />
              </Box>
            </ScPriceAlign>
        </ScPriceWrap>                 
        <ScX onClick={closeModal}>✖</ScX>
        <ScButton onClick={()=>{
          randomCoffeePick(
            selectBrandValue,
            selectCategoryValue,
            value[0],
            value[1]);
          setClick(!click);
        }}>선택 완료</ScButton>
      </ScRandomWrap>    
      </ScWrap>
      <ScWrap className="item back">        
        <ScRandomWrapBack>          
          <ScBackTitleWrap>
            <ScBackTitle>{coffeeBrand}</ScBackTitle>
            <ScBackCoffee>{coffeeName}</ScBackCoffee>
            {coffeeBrand === "엔제리너스" || coffeeBrand === "더벤티" ? <ScimgAngel src={coffeeImg} alt=""/> :
            <Scimg src={coffeeImg} alt=""/> }
          </ScBackTitleWrap>
          <ScStarPriceWrap>
            <ScStarTitle>총 별점</ScStarTitle>
            <ScPriceTitle>가격</ScPriceTitle>
          </ScStarPriceWrap>
          <ScStarPriceBox>
          {coffeeStar === "NaN" ? <ScStar2>별점이 없습니다.</ScStar2> : 
            <ScStar>{coffeeStar}</ScStar> }          
            <ScPrice>￦{coffeePrice}</ScPrice>
          </ScStarPriceBox>
        <ScX onClick={closeModal}>✖</ScX>
        <ScReturnBtn onClick={()=>{setClick(!click)}}>다시 뽑기</ScReturnBtn>
        </ScRandomWrapBack>
      </ScWrap>
    </ScTotal>
    </Background>
  );
};

export default RandomPicker;

const ScTotal = styled.div`
  .item.front {
    transform: ${(props) =>
      props.click ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  }
  .item.back {
    transform: ${(props) =>
      props.click ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  }

  
  `;

const ScWrap = styled.div`
  display: flex;
  background-image: url('/checker.png');
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* width: 38vw;
  height: 330px; */
  border: 1px #bbb solid;
  border-radius: 12px;
  margin-left: 30px;
  background-color: white; 
`;


const Background = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.30);
    z-index: 1;
`;

const ScRandomWrap = Styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 756px;
    height: 800px;
    background-color: #FFF;
    background-image: url(${RandomModalBg});
    background-size: cover;
    border-radius: 32px;
    display: flex;
    flex-direction: column;    
    align-items: center;
    text-align: center;
    font-size: 1em; 
    @media screen and (max-width: 768px) {
    width: 350px;
    height: 500px;
    margin: -100px auto;
    font-size: 0.7em;
  }   
`;

const ScRandomWrapBack = Styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 756px;
    height: 800px;
    background-image: url(${RandomBackBg});
    background-size: cover;
    background-position: center;
    border-radius: 32px;
    display: flex;
    flex-direction: column;    
    align-items: center;
    text-align: center;
    font-size: 1em;
    @media screen and (max-width: 768px) {
      width: 350px;
      height: 500px;
      margin: -100px auto;
      font-size: 0.7em;
    }  
`;

const ScX = Styled.div`
  position: absolute;
  top:0px;
  right: -30px;
  width: 26.39px;
  height: 26.39px;
  color: rgba(44,39,140,1);
  transform: rotate(90deg);
  font-size: 2.0em;
  font-weight: 600;  
  &:hover {
    cursor: pointer;
  }
`;

const ScTitleImgWrap = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
  width: 700px;
  @media screen and (max-width: 768px) {
      font-size: 0.7em;
      width: 350px;
      height: 400px;      
      margin-top: 30px;
      margin-left: 5px;
    } 
`;

const ScTitleWrap = Styled.div`  
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 94px;
  @media screen and (max-width: 768px) {
    font-size: 0.7em;
    margin: 5px auto;
  }
`;

const ScTitle1 = Styled.h1`  
  text-align: left;
  line-height: 47px;
  font-size: 2.75em;
  font-weight: 400;
  @media screen and (max-width: 768px) {
      line-height: 2px;     
    } 
`;

const ScTitle2 = Styled.h1`  
  text-align: left;
  line-height: 47px;
  font-size: 2.75em;
  font-weight: 600;
  @media screen and (max-width: 768px) {
      line-height: 40px;    
    }
`;

const ScTitle3 = Styled.h3`
  text-align: left;
  line-height: 23.27px;
  font-size: 1.125em;
  font-weight: 300;
  @media screen and (max-width: 768px) {
      line-height: 10px;    
    }
`;

const ScImgWrap = Styled.div`
  @media screen and (max-width: 768px) {
      width: 30%;
    }
`;

const ScImg = Styled.img`
  @media screen and (max-width: 768px) {
      width: 120px;
      height: 80px;   
    }
`;


const ScBrandWrap = Styled.div`
  width: 674px;
  height: 101px;
  margin: -50px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 32px;
  gap: 10px;
  @media screen and (max-width: 768px) {
      width: 300px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column; 
      margin-top: -100px;
      margin-left: -20px; 
    }  
`;

const ScBrandRadioWrap = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  @media screen and (max-width: 768px) {
    
    width: 350px;
    height: 40px;
    margin-top: -20px;
  }
`;


const ScBrandAlign = Styled.div`
  display: flex;
  flex-direction: flex-start;
  border: 1px solid #2c278c;
  background-color: white;
  color: #2c278c;
  border-radius: 23px;
  width: 80px;
  height: 30px;
  align-items: center;
  margin: 5px;
  justify-content: center;
  font-size: 0.815em;
  @media (max-width: 768px) {
    width: 15%;
    font-size: 0.4em;
  }  
  input:checked + label {
    border: 1px solid #2c278c;
    background-color: #2c278c;
    color: white;
    border-radius: 23px;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;     
  label {
    &:hover {
    cursor: pointer;
  } 
  }
  
  }
`;

const ScInput = Styled.input`
  display: none;
  &:hover {
    cursor: pointer;
  } 
`;

const ScCategoryWrap = Styled.div`  
  width: 674px;
  height: 101px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px auto;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
      width: 350px;
      height: 40px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      margin-top: 130px;
      margin-left: 2px;
    }  
`;

const ScCateRadioWrap = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  @media screen and (max-width: 768px) {
    
    width: 350px;
    height: 40px;
    
  }
`;

const ScCateAlign = Styled.div`  
  display: flex;
  flex-direction: flex-start;
  border: 1px solid #2c278c;
  background-color: white;
  color: #2c278c;
  border-radius: 23px;
  width: 80px;
  height: 30px;
  align-items: center;
  margin: 5px;
  justify-content: center;
  font-size: 0.815em;
  @media (max-width: 768px) {
    width: 15%;
    font-size: 0.4em;
  }  
  input:checked + label {
    border: 1px solid #2c278c;
    background-color: #2c278c;
    color: white;
    border-radius: 23px;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;     
  label {
    &:hover {
    cursor: pointer;
  } 
  }  
  }
`;

const ScPriceWrap = Styled.div`  
  width: 674px;
  height: 101px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px auto;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
  }
`;

const ScMobile = Styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  width: 550px;
  margin: 20px auto;
  @media screen and (max-width: 768px) {
    
    width: 350px;
    justify-content: space-around;
    margin: -20px auto;
  }
`;

const ScPriceAlign = Styled.div`
  display: flex;  
  width: 674px;
  justify-content: center;
  font-size: 0.915em;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 180px;
    justify-content: center;
    margin: -40px auto;
  }
`;


const ScButton = Styled.div`
  background-color: #2c278c;
  color: white;
  width: 756px;
  height: 100px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    height: 200px;
    margin: -45px auto;
  }
`;

const ScBackTitleWrap = Styled.div`  
  width: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 350px;
    margin: 10px auto;
    font-size: 0.9em;
  }

`;

const ScBackTitle = Styled.h2`
  border: 1px solid black;
  width: 150px;
  height: 27px;
  border-radius: 100px;
  padding: 8px 20px;
  margin: auto;
  font-size: 1.9em;
  font-weight: 600;
   
`;

const ScBackCoffee = Styled.h3`
  margin: 40px auto;
  font-size: 1.8em;
  font-weight: 700;
  color: #2c278c;
  @media screen and (max-width: 768px) {
    font-size: 0.9em;
  } 
`;

const Scimg = Styled.img`
  margin: auto;
  width: 400px;
  height: 400px;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: -30px auto;
  } 
`;

const ScimgAngel = Styled.img`
  margin: auto;
  width: 200px;
  height: 400px;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 200px;
    margin: -30px auto;
  } 
`;

const ScStarPriceWrap = Styled.div`  
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {    
    width: 350px;
    
  } 
 
`;

const ScStarTitle = Styled.h3`
  font-size: 1.9em;
  width: 300px;
  color: #2c278c; 
  @media screen and (max-width: 768px) {    
    width: 175px;
    font-size: 0.9em;
  } 
`;

const ScPriceTitle = Styled.h3`
  font-size: 1.9em;
  width: 300px;
  color: #2c278c;
  @media screen and (max-width: 768px) {    
    width: 175px;
    font-size: 0.9em;
  } 

`;

const ScStarPriceBox = Styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  @media screen and (max-width: 768px) { 
    width: 350px;
  } 
`;

const ScStar = Styled.h5`
  font-size: 1.7em;
  width: 300px;
  @media screen and (max-width: 768px) {    
    font-size: 0.9em;
    width: 175px;
  } 
`;

const ScStar2 = Styled.h5`
  font-size: 1.7em;
  width: 300px;
  color: red;
  @media screen and (max-width: 768px) {    
    font-size: 0.9em;
    width: 175px;
  } 
`;

const ScPrice = Styled.h5`
  font-size: 1.7em;
  width: 300px;
  @media screen and (max-width: 768px) {    
    font-size: 1.1em;
    width: 175px;
  } 
`;

const ScReturnBtn = Styled.div`
  display: flex;
  border: 1px solid #2c278c;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-bottom: 20px;
  background-color: #2c278c;
  color: white;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    width: 350px;
    height: 100px;
    margin: 68px auto;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    font-size: 1.2em;
  }
`;
