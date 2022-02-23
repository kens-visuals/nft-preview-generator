import ImageUploader from '../ImageUploader/ImageUploader.index';

import {
  UploadWrapper,
  UploadHeading,
  UploadImagesWrapper,
} from './UploadContainer.styles';

export default function UploadContainer({
  nftImage,
  onNftChange,
  userImage,
  onUserChange,
}) {
  return (
    <UploadWrapper>
      <UploadHeading>Upload Images</UploadHeading>
      <UploadImagesWrapper>
        <ImageUploader
          nftImage={nftImage}
          onNftChange={onNftChange}
          text={'Click or Drag NFT Image Here'}
        />
        <ImageUploader
          user
          userImage={userImage}
          onUserChange={onUserChange}
          text={'Click or Drag Creator’s Image Here'}
        />
      </UploadImagesWrapper>
    </UploadWrapper>
  );
}
