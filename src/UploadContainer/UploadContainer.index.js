import ImageUploader from '../ImageUploader/ImageUploader.index';

import {
  Wrapper,
  SecondaryHeading,
  ImagesWrapper,
} from './UploadContainer.styles';

export default function UploadContainer({
  nftImage,
  onNftChange,
  userImage,
  onUserChange,
}) {
  return (
    <Wrapper>
      <SecondaryHeading>Upload Images</SecondaryHeading>
      <ImagesWrapper>
        <ImageUploader
          onNftChange={onNftChange}
          nftImage={nftImage}
          text={'Click or Drag NFT Image Here'}
        />
        <ImageUploader
          onUserChange={onUserChange}
          userImage={userImage}
          user
          text={'Click or Drag Creator’s Image Here'}
        />
      </ImagesWrapper>
    </Wrapper>
  );
}
