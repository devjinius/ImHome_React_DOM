import styled, { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';
import logo from 'img/main/m_logo.png';
import navImgB from 'img/main/icon_b.png';
import delButton from 'img/main/m-del-bt.png';
import reviseButton from 'img/main/revise-bt.png';

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
 * + ul태그에 있는 기본 css 속성 제거
 */
injectGlobal`
    body {
      font-family: 'Nanum Gothic', sans-serif;
      background-color: #ffffff;
      margin: 0px;
    }

    ul {
      margin: 0;
      padding: 0;
    }
  `;

/**
 * Header Div
 */
export const HeaderDiv = styled.div`
  border-bottom: dotted 1px #fe4c8d;
  color: #ffffff;
  padding: 20px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
/**
 * Nav Div
 */
export const NavDiv = styled.div`
  display: inline-block;
  /* position: absolute; */
  background-color: #ffffff;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 25px;
  padding-left: 20px;
  width: 260px;
`;

/**
 * Content Div
 */
export const ContentDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  margin-top: 50px;
`;

/**
 * Content Div
 */
export const ContentTopDiv = styled.div`
  background-color: #ffffff;
  margin-bottom: 50px;
`;

/**
 * Content Div
 */
export const ContentBottomDiv = styled.div`
  background-color: #ffffff;
  margin-bottom: 50px;
`;

/**
 * Main Div
 */
export const Main = styled.div`
  background-color: #ffffff;
  width: 1700px;
  padding-right: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/**
 * Logo
 */
export const Logo = styled.div`
  display: inline-block;
  background: url(${logo}) no-repeat;
  background-size: auto;
  width: 217px;
  height: 75px;
`;

/**
 * Nav Image
 */
export const NavImg = styled.img.attrs({
  src: navImgB
})`
  width: 33px;
  height: 33px;
  :hover {
  }
`;

/**
 * Header 메뉴 Ul
 */
export const HeaderList = styled.ul`
  display: inline-block;
  float: right;
`;

/**
 * Header 메뉴 List
 */
export const HeaderItem = styled.li`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  font-size: 23px;
  color: ${props => (props.checked == null ? '#000000' : '#fe4c8d')};
  cursor: pointer;
  list-style: none;
  padding: 10px;
  float: left;
  :hover {
    color: #fe4c8d;
  }
`;

/**
 * Nav 메뉴 Ul
 */
export const NavList = styled.ul`
  display: block;
  padding: 0px 20px 20px 20px;
`;

/**
 * Nav 메뉴 List
 */
export const NavItem = styled.li`
  color: #555555;
  list-style: none;
  padding: 20px 20px 10px 20px;
  :hover {
    background-color: #fe4c8d;
    color: #ffffff;
  }
`;

/**
 * Main Head Text
 */
export const MainHeadText = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  color: #000000;
  font-size: 26px;
`;

/**
 * 큰 크기 Line
 */
export const BigLine = styled.hr`
  width: 100%;
  border: solid 1px #c2c2c2;
  margin: 5px 0px;
`;

/**
 * Table
 */
export const Table = styled.table`
  width: 100%;
  border-top: solid 4px #ed145b;
  border-bottom: solid 4px #ed145b;
  border-collapse: collapse;
  margin: 20px 5px 20px 5px;
`;

/**
 * Table 내 TR
 */
export const Tr = styled.tr`
  margin: 0px;
  height: 45px;
`;

/**
 * Table 내 TD
 */
export const Td = styled.td`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  background-color: ${props => (props.gray == null ? '#ffffff' : '#f7f8f9')};
  margin: 0px;
  padding-left: 10px;
  border-bottom: solid 2px #d7d7d7;
  border-right: ${props => (props.last == null ? 'solid 2px #d7d7d7' : '')};
`;

/**
 * Nav 내 Icon
 */
export const NavIcon = styled.img`
  width: 20px;
  height: 20px;
`;

/**
 * 삭제 버튼
 */
export const DelButton = styled.button`
  background-image: url(${delButton});
  width: 134px;
  height: 55px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  height: 67px;
  border: 0px;
  float: right;
`;

/**
 * 수정 버튼
 */
export const ReviseButton = styled.button`
  background-image: url(${reviseButton});
  width: 200px;
  height: 65px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  border: 0px;
  float: right;
`;
