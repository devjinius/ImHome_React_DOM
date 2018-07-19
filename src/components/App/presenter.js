import React from "react"
import { Route, Switch } from "react-router-dom"
import {
  RegisterButton,
  RegisterInput,
  HeadText,
  SubText,
  ItemText,
  BigLine,
  MiddleLine,
  HeaderBackground,
  Logo,
  Main,
  HeaderDiv
} from "common/register"

const App = props => {
  return (
    <Main>
      <HeaderDiv>
        <HeaderBackground>
          <Logo />
        </HeaderBackground>
      </HeaderDiv>
      <BigLine />
      <RegisterInput place />
      <HeadText>headText</HeadText>
      <SubText>subText</SubText>
      <ItemText>itemText</ItemText>
      <ItemText>itemText</ItemText>
      <ItemText>itemText</ItemText>
      <ItemText>itemText</ItemText>
      <MiddleLine />
      <RegisterButton />
    </Main>
  )
}

export default App
