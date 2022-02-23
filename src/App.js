import { useState } from 'react';
import styled from 'styled-components';

// components
import UploadContainer from './UploadContainer/UploadContainer.index';
import Card from './Card/Card.index';

// styles
import './App.css';
import { colors } from './styleVariables';

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
  const [nftImage, setNftImage] = useState([]);
  const [userImage, setUserImage] = useState([]);

  const onNftChange = (imageList) => setNftImage(imageList);
  const onUserChange = (imageList) => setUserImage(imageList);

  const previewProps = { nftImage, onNftChange, userImage, onUserChange };

  return (
    <div className="App">
      <Container>
        <Title>NFT Preview Generator</Title>

        <UploadContainer
          onNftChange={onNftChange}
          nftImage={nftImage}
          onUserChange={onUserChange}
          userImage={userImage}
        />

        <Card {...previewProps} />
      </Container>
    </div>
  );
}

export default App;
