// components
import ImageUploader from 'ImageUploader/ImageUploader.index';
import InputContainer from 'InputContainer/InputContainer.index';

// styles
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
  handleChange,
  values,
}) {
  return (
    <UploadWrapper>
      <UploadHeading>Insert information</UploadHeading>
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

      <InputContainer values={values} handleChange={handleChange} />
    </UploadWrapper>
  );
}
