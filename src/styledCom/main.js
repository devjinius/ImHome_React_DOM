import styled, { injectGlobal } from "styled-components"
import WebFont from "webfontloader"
import logo from "img/main/m_logo.png"
import navImgB from "img/main/icon_b.png"

/**
 * Google Font 호출해서 사용을 위한 webfont추가
 */
WebFont.load({
  google: {
    families: ["Nanum+Gothic:400,700,800", "sans-serif"]
  }
})

/**
 * body적용을 위한 css
 */
injectGlobal`
    body {
      font-family: 'Nanum Gothic', sans-serif;
      background-color: #ffffff;
      margin: 0px;
    }
`

/**
 * Header Div
 */
export const HeaderDiv = styled.div`
  border-bottom: dotted 1px #fe4c8d;
  color: #ffffff;
  padding: 20px 20px 0px 20px;
`
/**
 * Nav Div
 */
export const NavDiv = styled.div`
  display: inline-block;
  /* position: absolute; */
  background-color: #ffffff;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 33px;
  height: 100%;
  padding-left: 20px;
`

/**
 * Main Div
 */
export const Main = styled.div`
  position: absolute;
  top: 226px;
  left: 230px;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  margin: 0;
`

/**
 * Logo
 */
export const Logo = styled.div`
  display: inline-block;
  background: url(${logo}) no-repeat;
  background-size: auto;
  width: 217px;
  height: 75px;
`

/**
<<<<<<< HEAD
 * Nav Image
 */
export const NavImg = styled.img.attrs({
  src: navImgB
})`
  width: 33px;
  height: 33px;
  :hover {
  }
`

/**
=======
>>>>>>> 11a080a034bb5b7ec229b5c27234b4c00150f3a7
 * Header 메뉴 Ul
 */
export const HeaderList = styled.ul`
  display: inline-block;
  float: right;
`

/**
 * Header 메뉴 List
 */
export const HeaderItem = styled.li`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  font-size: 31px;
  color: ${props => (props.checked == null ? "#000000" : "#fe4c8d")};
  cursor: pointer;
  list-style: none;
  padding: 10px;
  float: left;
  :hover {
    color: #fe4c8d;
  }
`

/**
<<<<<<< HEAD
 * Nav 메뉴 Ul
 */
export const NavList = styled.ul`
  display: block;
  padding: 0px 20px 20px 20px;
`
=======
 * Header 메뉴 Ul
 */
export const NavList = styled.ul`display: block;`
>>>>>>> 11a080a034bb5b7ec229b5c27234b4c00150f3a7

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
`

/**
 * Main Head Text 
 */
export const MainHeadText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  color: #000000;
  font-size: 34px;
`

/**
 * 큰 크기 Line
 */
export const BigLine = styled.hr`
  width: 70%;
  border: solid 1px #c2c2c2;
  margin: 0;
`

/**
 * Table  
 */
export const Table = styled.table`
  width: 100%;
  border-top: solid 4px #ed145b;
  border-bottom: solid 4px #ed145b;
  border-collapse: collapse;
  margin: 5px;
`

/**
 * Table 내 TR
 */
export const Tr = styled.tr`margin: 0px;`

/**
 * Table 내 TD
 */
export const Td = styled.td`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #000000;
  background-color: ${props => (props.gray == null ? "#ffffff" : "#f7f8f9")};
  margin: 0px;
  padding-left: 10px;
  border-bottom: solid 2px #d7d7d7;
  border-right: ${props => (props.last == null ? "solid 2px #d7d7d7" : "")};
`

/**
 * 노란색 버튼
 */
export const YellowButton = styled.button``
