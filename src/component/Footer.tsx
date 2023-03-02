import React from "react";
import {Base,Section,Statistics,Summary,Emphasis,Container,ContentWrapper,Left,Right,TermAndpolicy,TermAndPolicyItem} from './FooterStyle'
const Footer=()=>{
    return (
      <Base>
        <Section>
          <Statistics>
            <Summary>
              지금까지 &nbsp;
              <Emphasis>* 644,934,343 개의 평가가</Emphasis>
              &nbsp; 쌓였엉.
            </Summary>
          </Statistics>
          <Container>
            <ContentWrapper>
              <Left>
                <TermAndpolicy>
                  <TermAndPolicyItem>서비스 이용약관</TermAndPolicyItem>
                  <TermAndPolicyItem>개인정보 처리방침</TermAndPolicyItem>
                  <TermAndPolicyItem>회사 정보</TermAndPolicyItem>
                </TermAndpolicy>
              </Left>
              <Right/>
            </ContentWrapper>
          </Container>
        </Section>
      </Base>
    );
}
export default Footer
