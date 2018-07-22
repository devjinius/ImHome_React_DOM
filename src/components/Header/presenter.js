import React from "react"
import { HeaderDiv, Logo, HeaderItem, HeaderList } from "common/main"

const Header = props => {
  // 메인 페이지
  return [
    <HeaderDiv>
      <Logo />
      <HeaderList>
        <HeaderItem>품목관리</HeaderItem>
        <HeaderItem>주문내역관리</HeaderItem>
        <HeaderItem>출고내역조회</HeaderItem>
        <HeaderItem checked>회원정보</HeaderItem>
        <HeaderItem>로그아웃</HeaderItem>
      </HeaderList>
    </HeaderDiv>
  ]
}

export default Header
