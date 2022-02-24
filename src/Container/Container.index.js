import { useState } from 'react';

// components
import UploadContainer from 'UploadContainer/UploadContainer.index';
import Card from 'Card/Card.index';

// styles
import { Title, MainBox } from './Container.styles';

export default function Container() {
  const [nftImage, setNftImage] = useState([]);
  const [userImage, setUserImage] = useState([]);

  const onNftChange = (imageList) => setNftImage(imageList);
  const onUserChange = (imageList) => setUserImage(imageList);

  const previewProps = { nftImage, onNftChange, userImage, onUserChange };

  return (
    <MainBox>
      <Title>NFT Preview Generator</Title>

      <UploadContainer
        onNftChange={onNftChange}
        nftImage={nftImage}
        onUserChange={onUserChange}
        userImage={userImage}
      />

      <Card {...previewProps} />
    </MainBox>
  );
}
