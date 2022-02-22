import ImageUploader from '../ImageUploader/ImageUploader.index';

import {
  Wrapper,
  SecondaryHeading,
  ImagesWrapper,
} from './UploadContainer.styles';

export default function UploadContainer() {
  return (
    <Wrapper>
      <SecondaryHeading>Upload Image</SecondaryHeading>
      <ImagesWrapper>
        <ImageUploader text={'Click or Drag  NFT Image Here'} />
        <ImageUploader text={'Click or Drag  Creator’s Image Here'} />
      </ImagesWrapper>
    </Wrapper>
  );
}
