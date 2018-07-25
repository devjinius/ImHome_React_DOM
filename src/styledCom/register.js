import styled, { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';
import backgroundImage from 'img/register/bg.png';
import headerBackground from 'img/register/up_bg.png';
import logo from 'img/register/logo.png';

/**
 * Google Font 호출해서 사용을 위한 webfont추가
 */
WebFont.load({
  google: {
    families: ['Nanum+Gothic:400,700,800', 'sans-serif']
  }
});

/**
 * body적용을 위한 css
 */
injectGlobal`
    html{
        margin: 0px;
    }
    body {
        background-image: url(${backgroundImage});
        margin: 0px;
        background-size: 100%;
    }
`;

/**
 * Header Div
 */
export const HeaderDiv = styled.div`
  width: 100%;
  height: 225px;
`;

/**
 * Header BackGround
 */
export const HeaderBackground = styled.div`
  background-image: url(${headerBackground});
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Logo
 */
export const Logo = styled.div`
  background-image: url(${logo});
  width: 300px;
  height: 106px;
`;

/**
 * Main Div
 */
export const Main = styled.div`
  background-color: #ffffff;
  width: 1026px;
  height: 1538px;
  margin: 0 auto;
`;

/**
 * RegTop
 */
export const RegTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 150px;
`;

/**
 * RegMain Div
 */
export const RegMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/**
 * RegRow Div
 * 입력창 각각 한줄
 */
export const RegRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  padding: 0px 50px;
  margin-bottom: 10px;
`;

/**
 * 가입하기 버튼
 */
export const RegisterButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #ffffff;
  border: solid 2px #fe4c8d;
  border-radius: 3px;
`;

/**
 * 회원가입 Default Input
 */
export const RegisterInput = styled.input`
  font-family: 'Nanum Gothic', sans-serif;
  width: 625px;
  height: 51px;
  border: solid 3px #c2c2c2;
`;

/**
 * 회원가입 Main Text
 */
export const HeadText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  color: #000000;
  font-size: 34px;
`;

/**
 * 회원가입 Sub Text
 */
export const SubText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  color: #707070;
  font-size: 24px;
`;

/**
 * 회원가입 Question Text
 */
export const ItemText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  color: #000000;
  font-size: 18px;
`;

/**
 * 큰 크기 Line
 */
export const BigLine = styled.hr`
  width: 1022px;
  border: solid 2px #c2c2c2;
  margin-bottom: 50px;
`;

/**
 * 중간 크기 Line
 */
export const MiddleLine = styled.hr`
  width: 900px;
  border: solid 2px #c2c2c2;
  margin: 50px 0px;
`;

/**
 * ButtonText
 */
export const ButtonText = styled.span`
  font-family: 'Nanum Gothic ExtraBold', sans-serif;
  font-weight: bold;
  font-size: 22px;
  color: #fe4c8d;
`;
