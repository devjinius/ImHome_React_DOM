import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

//회원가입
// import {
//   RegisterButton,
//   RegisterInput,
//   HeadText,
//   SubText,
//   ItemText,
//   BigLine,
//   MiddleLine,
//   HeaderBackground,
//   Logo,
//   Main,
//   HeaderDiv
// } from "common/register"

//메인페이지
// import {
//   HeaderDiv,
//   NavDiv,
//   Main,
//   Logo,
//   HeaderItem,
//   NavItem,
//   MainHeadText,
//   BigLine,
//   Table,
//   Td,
//   Tr
// } from "common/main"

import { MainDiv, MainText, Button, SubText } from "common/userDel"

const App = props => {
  // return (
  //   // 회원가입 부분

  //      <Main>
  //     <HeaderDiv>
  //       <HeaderBackground>
  //         <Logo />
  //       </HeaderBackground>
  //     </HeaderDiv>
  //     <BigLine />
  //     <RegisterInput place />
  //     <HeadText>headText</HeadText>
  //     <SubText>subText</SubText>
  //     <ItemText>itemText</ItemText>
  //     <ItemText>itemText</ItemText>
  //     <ItemText>itemText</ItemText>
  //     <ItemText>itemText</ItemText>
  //     <MiddleLine />
  //     <RegisterButton />
  //   </Main>

  // )

  // 메인 페이지
  // return [
  //   <HeaderDiv>
  //     <Logo />
  //     <ul>
  //       <HeaderItem>ItemText</HeaderItem>
  //       <HeaderItem>ItemText</HeaderItem>
  //       <HeaderItem>ItemText</HeaderItem>
  //       <HeaderItem>ItemText</HeaderItem>
  //     </ul>
  //   </HeaderDiv>,
  //   <NavDiv>
  //     <ul>
  //       <NavItem>ItemText</NavItem>
  //       <NavItem>ItemText</NavItem>
  //       <NavItem>ItemText</NavItem>
  //       <NavItem>ItemText</NavItem>
  //     </ul>
  //   </NavDiv>,
  //   <Main>
  //     <MainHeadText>Main Head</MainHeadText>
  //     <BigLine />
  //     <Table>
  //       <Tr>
  //         <Td gray>test</Td>
  //         <Td>test</Td>
  //         <Td gray>test</Td>
  //         <Td last>test</Td>
  //       </Tr>
  //       <Tr>
  //         <Td gray>test</Td>
  //         <Td gray>test</Td>
  //         <Td gray>test</Td>
  //         <Td gray last>
  //           test
  //         </Td>
  //       </Tr>
  //       <Tr>
  //         <Td gray>test</Td>
  //         <Td>test</Td>
  //         <Td gray>test</Td>
  //         <Td last>test</Td>
  //       </Tr>
  //       <Tr>
  //         <Td gray>test</Td>
  //         <Td gray>test</Td>
  //         <Td gray>test</Td>
  //         <Td gray last>
  //           test
  //         </Td>
  //       </Tr>
  //     </Table>
  //   </Main>
  // ]

  //회원삭제
  return [
    <MainDiv>
      <MainText>MainText</MainText>
      <Button>취소하기</Button>
      <Button>삭제하기</Button>
      <SubText>삭제시 복구안됨</SubText>
    </MainDiv>
  ]
}

export default App
