import ImageUploading from 'react-images-uploading';

// styles
import {
  CardBox,
  CardImg,
  CardNftContainer,
  CardUserWrapper,
  CardUserImgContainer,
  CardUserImg,
} from './Card.styles';

// assests
import nftPlaceholder from '../images/image-equilibrium.jpg';
import userPlaceholder from '../images/image-avatar.png';

export default function Card({
  nftImage,
  onNftChange,
  userImage,
  onUserChange,
}) {
  return (
    <CardBox>
      {nftImage.length > 0 ? (
        <ImageUploading
          value={nftImage}
          onChange={onNftChange}
          dataURLKey="data_url"
        >
          {({ imageList }) =>
            imageList.map((image, index) => (
              <CardNftContainer key={index}>
                <CardImg src={image.data_url} alt="nft preview" />
              </CardNftContainer>
            ))
          }
        </ImageUploading>
      ) : (
        <CardNftContainer>
          <CardImg src={nftPlaceholder} alt="nft preview" />
        </CardNftContainer>
      )}

      <CardUserWrapper>
        {userImage.length > 0 ? (
          <ImageUploading
            value={userImage}
            onChange={onUserChange}
            dataURLKey="data_url"
          >
            {({ imageList }) =>
              imageList.map((image, index) => (
                <CardUserImgContainer key={index} className="image-item">
                  <CardUserImg src={image.data_url} alt="user preview" />
                </CardUserImgContainer>
              ))
            }
          </ImageUploading>
        ) : (
          <CardUserImgContainer>
            <CardUserImg src={userPlaceholder} alt="nft preview" />
          </CardUserImgContainer>
        )}
      </CardUserWrapper>
    </CardBox>
  );
}
