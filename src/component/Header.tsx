import React from "react";

import {AiOutlineSearch} from 'react-icons/ai'
import {Base,
  Navigetion,
  MenuListWrapper,
  MenuList,
  Menu,
  MenuButton,
  SearchMenu,
  Link,
  TextLogo,
  SearchContainer,
  SearchForm,
  SearchFormWrapper,
  SearchLable,
  SearchInput,
  SignIn,
  SignUp,} from './HeaderStyle'

const Header = () => {
    const handleKeyword =()=>{

    }
  return (
    <Base>
      <Navigetion>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href="/">
                <TextLogo>
                  <span className="primary">WATCHOUT</span>
                  <span>PEDIA</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href="/">
                <MenuButton>영화</MenuButton>
              </Link>
              <Link href="/">
                <MenuButton>TV 프로그램</MenuButton>
              </Link>
            </Menu>
            <SearchMenu>
              <SearchContainer>
                <SearchFormWrapper>
                  <SearchForm>
                    <SearchLable>
                      <SearchInput
                        placeholder="콘텐츠,인물,컬렉션,유저를 검색해보세요."
                        onChange={handleKeyword}
                      />
                      <AiOutlineSearch />
                    </SearchLable>
                  </SearchForm>
                </SearchFormWrapper>
              </SearchContainer>
            </SearchMenu>
            <Menu>
              <SignIn>로그인</SignIn>
            </Menu>
            <Menu>
              <SignUp>회원가입</SignUp>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigetion>
    </Base>
  );
};
export default Header;


