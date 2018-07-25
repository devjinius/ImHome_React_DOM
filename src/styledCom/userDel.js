import styled, { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';
import backgroundImage from 'img/userInfo/bg.png';
import cancelImage from 'img/userInfo/cancel.png';

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
    body {
        margin: 0px;
    }
`;

/**
 * 회원 삭제 Main Div
 */
export const MainDiv = styled.div`
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: 100%
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 642px;
height: 332px;
padding: 50px 0px;
`;

/**
 * 회원 삭제 Main Text
 */
export const MainText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  color: #fe4c8d;
  font-size: 30px;
`;

/**
 * Header Div
 */
export const HeaderDiv = styled.div`
  width: 100%;
  height: 225px;
`;

/**
 * 버튼
 */
export const Button = styled.button`
  background-image: url(${cancelImage});
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
  margin: 0px;
  padding: 0px;
  width: 179px;
  height: 67px;
  border: 0px;
`;

/**
 * 회원 삭제 Sub Text
 */
export const SubText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  color: #999999;
  font-size: 21px;
`;
