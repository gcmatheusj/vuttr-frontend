import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => (props.bgColor ? props.bgColor : '#fff')};
  color: ${props => (props.color ? props.color : '#fff')};
  border: 0;
  border-radius: 5px;
  width: ${props => (props.contained ? '174px' : '')};
  cursor: pointer;
  font-size: 18px;
`;
