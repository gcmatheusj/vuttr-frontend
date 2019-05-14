import React from 'react';

import {
  Container, TitleWrapper, Title, Subtitle, ContentWrapper, HeaderWrapper,
} from './styles';

import { AutoContainer } from '../../styles/Globals';

import Input from '../../components/Input';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function Main() {
  return (
    <Container>
      <AutoContainer>
        <TitleWrapper>
          <Title>VUTTR</Title>
          <Subtitle>Very Userful Tools To Remeber</Subtitle>
        </TitleWrapper>

        <ContentWrapper>
          <HeaderWrapper>
            <Input />
            <Button bgColor="#0dcb7d" contained>
              Add
            </Button>
          </HeaderWrapper>

          <Card />
          <Card />
          <Card />
          <Card />
        </ContentWrapper>
      </AutoContainer>
    </Container>
  );
}
