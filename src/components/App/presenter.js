import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Nav from 'components/Navigator';

// 회원가입;
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
//   HeaderDiv,
//   RegTop,
//   RegMain,
//   RegRow,
//   ButtonText
// } from 'common/register';

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
//   Tr,
//   ContentDiv,
//   NavIcon,
//   DelButton,
//   ReviseButton,
//   ContentBottomDiv,
//   ContentTopDiv
// } from 'common/main';
// import navIcon from 'img/main/icon_b.png';

import {
  MainDiv,
  TopDiv,
  CloseButton,
  MainText,
  MainButtonDiv,
  Button,
  SubText
} from 'common/userDel';

const App = props => {
  // return (
  //   // 회원가입 부분
  //   <Main>
  //     <HeaderDiv>
  //       <HeaderBackground>
  //         <Logo />
  //       </HeaderBackground>
  //     </HeaderDiv>

  //     <BigLine />

  //     <RegTop>
  //       <div>
  //         <HeadText>가입 정보 입력</HeadText>
  //       </div>
  //       <div>
  //         <SubText>로그인 정보 및 가입 정보를 입력하세요</SubText>
  //       </div>
  //     </RegTop>
  //     <RegMain>
  //       <MiddleLine />
  //       <RegRow>
  //         <ItemText>사용하실 아이디</ItemText>
  //         <RegisterInput placeholder={'아이디'} />
  //       </RegRow>
  //       <RegRow>
  //         <ItemText>비밀번호</ItemText>
  //         <RegisterInput placeholder={'비밀번호(8자 이상)'} />
  //       </RegRow>
  //       <RegRow>
  //         <ItemText>비밀번호 재확인</ItemText>
  //         <RegisterInput placeholder={'비밀번호 재확인'} />
  //       </RegRow>
  //     </RegMain>

  //     <RegMain>
  //       <MiddleLine />

  //       <RegRow>
  //         <ItemText>대표 성함</ItemText>
  //         <RegisterInput placeholder={'대표 성함'} />
  //       </RegRow>
  //       <RegRow>
  //         <ItemText>사업자 번호</ItemText>
  //         <RegisterInput placeholder={'사업자 번호'} />
  //       </RegRow>
  //       <RegRow>
  //         <ItemText>사업장 주소</ItemText>
  //         <RegisterInput placeholder={'사업장 주소'} />
  //       </RegRow>
  //       <RegRow>
  //         <ItemText>회사명</ItemText>
  //         <RegisterInput placeholder={'사업장 등록증 상의 회사명'} />
  //       </RegRow>
  //       <RegRow>
  //         <ItemText>이메일 주소</ItemText>
  //         <RegisterInput
  //           placeholder={'세금계산서 받으실 수 있는 이메일 주소'}
  //         />
  //       </RegRow>
  //       <RegRow>
  //         <ItemText>휴대폰 번호</ItemText>
  //         <RegisterInput placeholder={'휴대폰 번호'} />
  //       </RegRow>
  //       <RegRow>
  //         <ItemText>지점명</ItemText>
  //         <RegisterInput placeholder={'지점명'} />
  //       </RegRow>

  //       <MiddleLine />

  //       <RegisterButton>
  //         <ButtonText>가입하기</ButtonText>
  //       </RegisterButton>
  //     </RegMain>
  //   </Main>
  // );
  // 메인 페이지
  // return [
  //   <HeaderDiv>
  //     <Logo />
  //     <ul>
  //       <HeaderItem>품목관리</HeaderItem>
  //       <HeaderItem>주문내역조회</HeaderItem>
  //       <HeaderItem>출고내역조회</HeaderItem>
  //       <HeaderItem>회원정보</HeaderItem>
  //       <HeaderItem>로그아웃</HeaderItem>
  //     </ul>
  //   </HeaderDiv>,
  //   <ContentDiv>
  //     <NavDiv>
  //       <ul>
  //         <NavItem>
  //           <NavIcon src={navIcon} alt={'navIcon'} />분당점
  //         </NavItem>
  //         <NavItem>
  //           <NavIcon src={navIcon} alt={'navIcon'} />백현점
  //         </NavItem>
  //         <NavItem>
  //           <NavIcon src={navIcon} alt={'navIcon'} />광주탄천점
  //         </NavItem>
  //         <NavItem>
  //           <NavIcon src={navIcon} alt={'navIcon'} />이대본점
  //         </NavItem>
  //         <NavItem>
  //           <NavIcon src={navIcon} alt={'navIcon'} />용인죽전점
  //         </NavItem>
  //       </ul>
  //     </NavDiv>
  //     <Main>
  //       <ContentTopDiv>
  //         <MainHeadText>회원정보 조회</MainHeadText>
  //         <BigLine />
  //         <Table>
  //           <Tr>
  //             <Td gray>지점명</Td>
  //             <Td>분당점</Td>
  //             <Td gray />
  //             <Td last />
  //           </Tr>
  //           <Tr>
  //             <Td gray>대표자</Td>
  //             <Td gray>최장길</Td>
  //             <Td gray>아이디</Td>
  //             <Td gray last>
  //               imhome
  //             </Td>
  //           </Tr>
  //           <Tr>
  //             <Td gray>회사명</Td>
  //             <Td>아임홈 분당점</Td>
  //             <Td gray>사업자 번호</Td>
  //             <Td last>426-50-00326 </Td>
  //           </Tr>
  //           <Tr>
  //             <Td gray>사업장주소</Td>
  //             <Td gray>경기도 성남시 분당구 황새울로 85번길 12 1층</Td>
  //             <Td gray>이메일 주소</Td>
  //             <Td gray last>
  //               imhome@imhome.com
  //             </Td>
  //           </Tr>
  //           <Tr>
  //             <Td gray>연락처</Td>
  //             <Td>000-000-0000</Td>
  //             <Td gray>/</Td>
  //             <Td last>/</Td>
  //           </Tr>
  //         </Table>
  //         <ReviseButton>회원정보수정</ReviseButton>
  //       </ContentTopDiv>
  //       <ContentBottomDiv>
  //         <MainHeadText>회원목록 및 정보</MainHeadText>
  //         <Table>
  //           <Tr>
  //             <Td gray>등록일자</Td>
  //             <Td gray>지점명</Td>
  //             <Td gray>대표자</Td>
  //             <Td gray>아이디</Td>
  //             <Td gray>사업자번호</Td>
  //             <Td gray last>
  //               총 거래금액(원)
  //             </Td>
  //           </Tr>
  //           <Tr>
  //             <Td>2018-01-25</Td>
  //             <Td>분당점</Td>
  //             <Td>최창길</Td>
  //             <Td>imhome</Td>
  //             <Td>426-50-00326</Td>
  //             <Td last>10,000,500</Td>
  //           </Tr>
  //           <Tr>
  //             <Td>2018-01-25</Td>
  //             <Td>분당점</Td>
  //             <Td>최창길</Td>
  //             <Td>imhome</Td>
  //             <Td>426-50-00326</Td>
  //             <Td last>5,000,500</Td>
  //           </Tr>
  //           <Tr>
  //             <Td>2018-01-25</Td>
  //             <Td>백현점</Td>
  //             <Td>최창길</Td>
  //             <Td>imhome</Td>
  //             <Td>426-50-00326</Td>
  //             <Td last>800,500</Td>
  //           </Tr>
  //         </Table>
  //         <DelButton>회원삭제</DelButton>
  //       </ContentBottomDiv>
  //     </Main>
  //   </ContentDiv>
  // ];
  // 회원삭제
  return [
    <MainDiv>
      <TopDiv>
        <CloseButton />
      </TopDiv>
      <div>
        <MainText>회원목록에서 삭제 하시겠습니까?</MainText>
      </div>
      <MainButtonDiv>
        <Button>취소하기</Button>
        <Button>삭제하기</Button>
      </MainButtonDiv>
      <div>
        <SubText>삭제가 되면 복구가 되지 않습니다.</SubText>
      </div>
    </MainDiv>
  ];
  // return [<Header />, <Nav />]
};

export default App;
