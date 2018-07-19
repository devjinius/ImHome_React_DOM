import styled, { injectGlobal } from "styled-components"
import WebFont from "webfontloader"
import logo from "img/main/m_logo.png"

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
  background-color: #ffffff;
  width: 100%;
  height: 225px;
  border-bottom: dotted 1px #fe4c8d;
`
/**
 * Header Div
 */
export const NavDiv = styled.div`
  position: absolute;
  top: 226px;
  left: 0px;
  background-color: #ffffff;
  width: 200px;
  height: 100%;
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
  background-image: url(${logo});
  width: 219px;
  height: 77px;
`

/**
 * Header 메뉴 List
 */
export const HeaderItem = styled.li`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  font-size: 31px;
  color: #000000;
  list-style: none;
  float: left;
  :hover {
    color: #fe4c8d;
  }
`

/**
 * Nav 메뉴 List
 */
export const NavItem = styled.li`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 33px;
  color: #555555;
  list-style: none;
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
 *   Table 내 TR
 */
export const Tr = styled.tr`margin: 0px;`

/**
 *  Table 내 TD
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
export const YellowButton = styled.button`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  width: 200px;
  height: 50px;
  background-color: #ffffff;
  border: solid 2px #fe4c8d;
  border-radius: 3px;
`

//----------------------------------------------

/**
 * 가입하기 버튼
 */
export const RegisterButton = styled.button`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  width: 200px;
  height: 50px;
  background-color: #ffffff;
  border: solid 2px #fe4c8d;
  border-radius: 3px;
`

/**
 * 회원가입 Default Input 
 */
export const RegisterInput = styled.input`
  font-family: 'Nanum Gothic', sans-serif;
  width: 625px;
  height: 51px;
  border: solid 3px #c2c2c2;
`

/**
 * 회원가입 Main Text 
 */
export const HeadText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  color: #000000;
  font-size: 34px;
`

/**
 * 회원가입 Sub Text 
 */
export const SubText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  color: #707070;
  font-size: 24px;
`
