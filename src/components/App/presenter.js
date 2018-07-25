import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Nav from 'components/Navigator';

// 회원가입;
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
  HeaderDiv,
  RegTop,
  RegMain,
  RegRow,
  ButtonText
} from 'common/register';

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

// import { MainDiv, MainText, Button, SubText } from 'common/userDel';

const App = props => {
  return (
    // 회원가입 부분
    <Main>
      <HeaderDiv>
        <HeaderBackground>
          <Logo />
        </HeaderBackground>
      </HeaderDiv>

      <BigLine />

      <RegTop>
        <div>
          <HeadText>가입 정보 입력</HeadText>
        </div>
        <div>
          <SubText>로그인 정보 및 가입 정보를 입력하세요</SubText>
        </div>
      </RegTop>
      <RegMain>
        <MiddleLine />
        <RegRow>
          <ItemText>사용하실 아이디</ItemText>
          <RegisterInput placeholder={'아이디'} />
        </RegRow>
        <RegRow>
          <ItemText>비밀번호</ItemText>
          <RegisterInput placeholder={'비밀번호(8자 이상)'} />
        </RegRow>
        <RegRow>
          <ItemText>비밀번호 재확인</ItemText>
          <RegisterInput placeholder={'비밀번호 재확인'} />
        </RegRow>
      </RegMain>

      <RegMain>
        <MiddleLine />

        <RegRow>
          <ItemText>대표 성함</ItemText>
          <RegisterInput placeholder={'대표 성함'} />
        </RegRow>
        <RegRow>
          <ItemText>사업자 번호</ItemText>
          <RegisterInput placeholder={'사업자 번호'} />
        </RegRow>
        <RegRow>
          <ItemText>사업장 주소</ItemText>
          <RegisterInput placeholder={'사업장 주소'} />
        </RegRow>
        <RegRow>
          <ItemText>회사명</ItemText>
          <RegisterInput placeholder={'사업장 등록증 상의 회사명'} />
        </RegRow>
        <RegRow>
          <ItemText>이메일 주소</ItemText>
          <RegisterInput
            placeholder={'세금계산서 받으실 수 있는 이메일 주소'}
          />
        </RegRow>
        <RegRow>
          <ItemText>휴대폰 번호</ItemText>
          <RegisterInput placeholder={'휴대폰 번호'} />
        </RegRow>
        <RegRow>
          <ItemText>지점명</ItemText>
          <RegisterInput placeholder={'지점명'} />
        </RegRow>

        <MiddleLine />

        <RegisterButton>
          <ButtonText>가입하기</ButtonText>
        </RegisterButton>
      </RegMain>
    </Main>
  );
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
  // return [
  //   <MainDiv>
  //     <div>
  //       <MainText>회원목록에서 삭제 하시겠습니까?</MainText>
  //     </div>
  //     <div>
  //       <Button>취소하기</Button>
  //       <Button>삭제하기</Button>
  //     </div>
  //     <div>
  //       <SubText>삭제가 되면 복구가 되지 않습니다.</SubText>
  //     </div>
  //   </MainDiv>
  // ];
  // return [<Header />, <Nav />]
};

export default App;
