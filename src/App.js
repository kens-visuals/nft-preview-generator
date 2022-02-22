import styled from 'styled-components';

import { colors } from './styleVariables';

import UploadContainer from './UploadContainer/UploadContainer.index';

import './App.css';

const Title = styled.h1`
  color: ${colors['secondary--dark']};
  font-size: 3.2rem;
  text-align: center;
  margin-block: 2rem;
`;

const Container = styled.div`
  width: 90%;
  max-width: 90rem;
  background-color: ${colors['primary--dark']};
  border-radius: 1rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Title>NFT Preview Generator</Title>
        <UploadContainer />
      </Container>
    </div>
  );
}

export default App;
