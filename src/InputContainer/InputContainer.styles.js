import styled from 'styled-components';

import { colors } from 'styleVariables';

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: left;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Download = styled.button`
  width: 100%;
  color: ${colors.primary};
  background-color: ${colors.cyan};
  border: none;
  border-radius: 0.5rem;
  font-weight: 900;
  margin-top: 1.5rem;
  padding: 1rem;
`;
