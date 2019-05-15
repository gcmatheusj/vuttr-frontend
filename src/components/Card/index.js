import React from 'react';
import PropTypes from 'prop-types';

import { Container, CardHeader, Title } from './styles';

import Button from '../Button';

export default function Card({ title }) {
  return (
    <Container>
      <CardHeader>
        <Title>{title}</Title>
        <Button color="#F95E5A">Remover</Button>
      </CardHeader>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};
