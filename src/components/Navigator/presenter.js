import React from "react"
import { NavDiv, NavList, NavItem, NavImg } from "common/main"
import navImgB from "img/main/icon_b.png"

const Navigator = props => {
  return (
    <NavDiv>
      <NavList>
        <NavItem>
          <NavImg />품목관리
        </NavItem>
        <NavItem>주문내역관리</NavItem>
        <NavItem>출고내역조회</NavItem>
        <NavItem checked>회원정보</NavItem>
        <NavItem>로그아웃</NavItem>
      </NavList>
    </NavDiv>
  )
}

export default Navigator
