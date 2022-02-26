import styled from 'styled-components';

import { colors } from 'styleVariables';

export const Label = styled.label`
  font-size: 1.8rem;
  color: ${colors.secondaryDark};
  margin-bottom: 0.5rem;
  display: inline-block;
`;

export const Inpt = styled.input`
  width: 100%;
  color: ${colors.secondaryDark};
  background-color: ${colors.primaryDark};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  transition: all 0.1s;

  &:focus-visible {
    outline: 0.1rem solid ${colors.secondaryDark};
  }
`;
