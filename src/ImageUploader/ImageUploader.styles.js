import styled from 'styled-components';

import { colors } from 'styleVariables';

export const ImageContainer = styled.div`
  width: 11rem;
  height: 11rem;
  color: ${colors.secondaryLight};
  background-color: ${colors.primaryDark};
  border-radius: ${(props) => (props.user ? '50%' : '1rem')};
  font-size: 1.2rem;
  margin: 2rem 0 4rem 0;
  padding: 0 2rem;
  cursor: pointer;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const ImagePreview = styled.div`
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: -1;
`;

export const OverlaySpan = styled.span`
  color: ${(props) => (props.isDragging ? colors.cyan : colors.secondaryLight)};
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => (props.user ? '50%' : '1rem')};
  /* object-fit: cover; */
`;

export const RemoveButton = styled.button`
  width: 100%;
  color: ${colors.red};
  background-color: transparent;
  border: 0.15rem solid ${colors.red};
  border-radius: 1rem;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  transition: all 0.3s;

  &:hover {
    color: ${colors.secondaryLight};
    background-color: ${colors['red']};
    cursor: pointer;
  }
`;
