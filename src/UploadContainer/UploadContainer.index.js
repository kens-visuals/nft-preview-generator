import ImageUploader from '../ImageUploader/ImageUploader.index';

import {
  Wrapper,
  SecondaryHeading,
  ImagesWrapper,
} from './UploadContainer.styles';

export default function UploadContainer() {
  return (
    <Wrapper>
      <SecondaryHeading>Upload Images</SecondaryHeading>
      <ImagesWrapper>
        <ImageUploader text={'Click or Drag  NFT Image Here'} />
        <ImageUploader user text={'Click or Drag  Creator’s Image Here'} />
      </ImagesWrapper>
    </Wrapper>
  );
}
