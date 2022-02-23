import styled from 'styled-components';

import { colors } from '../styleVariables';

const ImageContainer = styled.div`
  width: 11rem;
  height: 11rem;
  color: ${colors['secondary--light']};
  background-color: ${colors['primary--dark']};
  border-radius: ${(props) => (props.user ? '50%' : '1rem')};
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  margin: 2rem 0 4rem 0;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const ImagePreview = styled.div`
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: -1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.user ? '50%' : '1rem')};
  object-fit: cover;
`;

const Button = styled.button`
  width: 100%;
  color: ${colors['red']};
  background-color: transparent;
  border: 0.15rem solid ${colors['red']};
  border-radius: 1rem;
  font-size: clamp(1.4rem, 2vw, 2rem);
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  transition: all 0.3s;

  &:hover {
    color: ${colors['secondary--light']};
    background-color: ${colors['red']};
    cursor: pointer;
  }
`;

export { ImageContainer, ImagePreview, Image, Button };
