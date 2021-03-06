import ImageUploading from 'react-images-uploading';

// styles
import {
  ImageContainer,
  ImagePreview,
  OverlaySpan,
  Image,
  RemoveButton,
} from './ImageUploader.styles';

export default function ImageUploader({
  user,
  text,
  onNftChange,
  nftImage,
  onUserChange,
  userImage,
}) {
  return (
    <>
      <ImageUploading
        maxNumber={1}
        multiple={false}
        dataURLKey="data_url"
        value={nftImage || userImage}
        onChange={onNftChange || onUserChange}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <ImageContainer user={user} onClick={onImageUpload} {...dragProps}>
            <OverlaySpan isDragging={isDragging}>
              {imageList.length < 1 && text}
            </OverlaySpan>

            {imageList.map((image, index) => (
              <ImagePreview key={index}>
                <Image
                  user={user}
                  style={{ backgroundImage: `url(${image['data_url']})` }}
                />
                <RemoveButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onImageRemove(index);
                  }}
                >
                  Remove
                </RemoveButton>
              </ImagePreview>
            ))}
          </ImageContainer>
        )}
      </ImageUploading>
    </>
  );
}
