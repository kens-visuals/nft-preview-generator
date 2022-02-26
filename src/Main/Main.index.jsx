import { useState } from 'react';

// components
import UploadContainer from 'UploadContainer/UploadContainer.index';
import Card from 'Card/Card.index';

// styles
import { Title, MainBox } from './Main.styles';

export default function Container() {
  const [nftImage, setNftImage] = useState([]);
  const [userImage, setUserImage] = useState([]);
  const [values, setValues] = useState({
    nftname: '',
    description: '',
    price: '',
    creatorName: '',
  });

  function handleChange(name, value) {
    setValues({ ...values, [name]: value });
  }

  const onNftChange = (imageList) => setNftImage(imageList);
  const onUserChange = (imageList) => setUserImage(imageList);

  const previewProps = { nftImage, onNftChange, userImage, onUserChange };

  return (
    <MainBox>
      <Title>NFT Preview Generator</Title>

      <UploadContainer
        {...previewProps}
        values={values}
        handleChange={handleChange}
      />

      <Card {...previewProps} values={values} />
    </MainBox>
  );
}
