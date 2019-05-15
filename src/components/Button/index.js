import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  contained: PropTypes.bool.isRequired,
};
