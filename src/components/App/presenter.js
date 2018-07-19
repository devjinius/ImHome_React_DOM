import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"
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
import {
  HeaderDiv,
  NavDiv,
  Main,
  Logo,
  HeaderItem,
  NavItem,
  MainHeadText,
  BigLine,
  Table,
  Td,
  Tr
} from "common/main"

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

  return [
    <HeaderDiv>
      <Logo />
      <ul>
        <HeaderItem>ItemText</HeaderItem>
        <HeaderItem>ItemText</HeaderItem>
        <HeaderItem>ItemText</HeaderItem>
        <HeaderItem>ItemText</HeaderItem>
      </ul>
    </HeaderDiv>,
    <NavDiv>
      <ul>
        <NavItem>ItemText</NavItem>
        <NavItem>ItemText</NavItem>
        <NavItem>ItemText</NavItem>
        <NavItem>ItemText</NavItem>
      </ul>
    </NavDiv>,
    <Main>
      <MainHeadText>Main Head</MainHeadText>
      <BigLine />
      <Table>
        <Tr>
          <Td gray>test</Td>
          <Td>test</Td>
          <Td gray>test</Td>
          <Td last>test</Td>
        </Tr>
        <Tr>
          <Td gray>test</Td>
          <Td gray>test</Td>
          <Td gray>test</Td>
          <Td gray last>
            test
          </Td>
        </Tr>
        <Tr>
          <Td gray>test</Td>
          <Td>test</Td>
          <Td gray>test</Td>
          <Td last>test</Td>
        </Tr>
        <Tr>
          <Td gray>test</Td>
          <Td gray>test</Td>
          <Td gray>test</Td>
          <Td gray last>
            test
          </Td>
        </Tr>
      </Table>
    </Main>
  ]
}

export default App
