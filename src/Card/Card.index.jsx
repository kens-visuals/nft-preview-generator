import ImageUploading from 'react-images-uploading';

// styles
import * as C from './Card.styles';

// assests
import nftPlaceholder from 'images/image-equilibrium.jpg';
import userPlaceholder from 'images/image-avatar.png';
import eth from 'images/icon-ethereum.svg';

export default function Card({
  nftImage,
  onNftChange,
  userImage,
  onUserChange,
  values,
}) {
  return (
    <C.Box>
      {nftImage.length > 0 ? (
        <ImageUploading
          value={nftImage}
          onChange={onNftChange}
          dataURLKey="data_url"
        >
          {({ imageList }) =>
            imageList.map((image, index) => (
              <C.NftContainer key={index}>
                <C.Img src={image.data_url} alt="nft preview" />
              </C.NftContainer>
            ))
          }
        </ImageUploading>
      ) : (
        <C.NftContainer>
          <C.Img src={nftPlaceholder} alt="nft preview" />
        </C.NftContainer>
      )}

      <C.InfoWrapper>
        <C.Title>{values.nftname || "Your NFT's name"}</C.Title>
        <C.Desc>
          {values.description ||
            'Lorem ipsum, dolor sit amet consectetur elit.'}
        </C.Desc>

        <C.PriceWrapper>
          <C.Icon src={eth} alt="eth"></C.Icon>
          <C.Price>{values.price || 0} ETH</C.Price>
        </C.PriceWrapper>
      </C.InfoWrapper>

      <C.UserWrapper>
        {userImage.length > 0 ? (
          <ImageUploading
            value={userImage}
            onChange={onUserChange}
            dataURLKey="data_url"
          >
            {({ imageList }) =>
              imageList.map((image, index) => (
                <C.UserImgContainer key={index} className="image-item">
                  <C.UserImg src={image.data_url} alt="user preview" />
                </C.UserImgContainer>
              ))
            }
          </ImageUploading>
        ) : (
          <C.UserImgContainer>
            <C.UserImg src={userPlaceholder} alt="nft preview" />
          </C.UserImgContainer>
        )}
        <C.UserName>
          <C.UserNameSpan>Creation of</C.UserNameSpan> James
        </C.UserName>
      </C.UserWrapper>
    </C.Box>
  );
}
