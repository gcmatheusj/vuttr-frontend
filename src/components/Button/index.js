import React from 'react';

import { Container } from './styles';

export default function Button({
  bgColor, color, children, contained,
}) {
  return (
    <Container bgColor={bgColor} color={color} contained={contained}>
      {children}
    </Container>
  );
}
