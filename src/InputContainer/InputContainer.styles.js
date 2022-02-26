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
  border: 0.1rem solid transparent;
  border-radius: 0.5rem;
  font-weight: 900;
  margin-top: 1.5rem;
  padding: 1rem;
  transition: all 0.3s;

  &:hover {
    color: ${colors.secondary};
    background-color: transparent;
    border: 0.1rem solid ${colors.cyan};
    cursor: pointer;
  }
`;
