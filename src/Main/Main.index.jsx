import { useState } from 'react';
import FileSaver from 'file-saver';
import html2canvas from 'html2canvas';

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

  const handleChange = (name, value) => setValues({ ...values, [name]: value });

  const onNftChange = (imageList) => setNftImage(imageList);
  const onUserChange = (imageList) => setUserImage(imageList);

  const exportAsPicture = () => {
    const data = document.getElementById('Card');

    html2canvas(data, {
      scale: 2,
      backgroundColor: '#14263d',
      logging: false,
    }).then((canvas) => {
      console.log(canvas);
      canvas.toBlob((blob) => FileSaver.saveAs(blob, 'nft.png'));
    });
  };

  const previewProps = { nftImage, onNftChange, userImage, onUserChange };

  return (
    <MainBox>
      <Title>NFT Preview Generator</Title>

      <UploadContainer
        {...previewProps}
        values={values}
        handleChange={handleChange}
        exportAsPicture={exportAsPicture}
      />

      <Card {...previewProps} values={values} />
    </MainBox>
  );
}
