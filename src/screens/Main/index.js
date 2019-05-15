import React, { useState } from 'react';

import {
  Container, TitleWrapper, Title, Subtitle, ContentWrapper, HeaderWrapper,
} from './styles';

import { AutoContainer } from '../../styles/Globals';

import Input from '../../components/Input';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function Main() {
  const [data] = useState([
    {
      id: 0,
      title: 'Notion',
      description: 'Notion é um state com hooks',
      tags: ['Notion', 'Hooks', 'React'],
    },
    {
      id: 1,
      title: 'Hooks Teste',
      description: 'Notion é um teste com hooks',
      tags: ['Notion', 'Hooks', 'React'],
    },
  ]);

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

          {data.map(d => (
            <Card key={d.id} title={d.title} />
          ))}
        </ContentWrapper>
      </AutoContainer>
    </Container>
  );
}
