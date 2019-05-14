import React from 'react';

import { Container, CardHeader, Title } from './styles';

import Button from '../Button';

export default function Card() {
  return (
    <Container>
      <CardHeader>
        <Title>Notion</Title>
        <Button color="#F95E5A">Remover</Button>
      </CardHeader>
    </Container>
  );
}
