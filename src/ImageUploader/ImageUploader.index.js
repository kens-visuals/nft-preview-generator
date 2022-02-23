import ImageUploading from 'react-images-uploading';

// styles
import {
  ImageContainer,
  ImagePreview,
  Image,
  Button,
} from './ImageUploader.styles';
import { colors } from '../styleVariables';

export default function ImageUploader({
  user,
  text,
  onNftChange,
  nftImage,
  onUserChange,
  userImage,
}) {
  return (
    <div>
      <ImageUploading
        maxNumber={1}
        value={nftImage || userImage}
        multiple={false}
        onChange={onNftChange || onUserChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <ImageContainer user={user} onClick={onImageUpload} {...dragProps}>
            <span style={isDragging ? { color: colors['cyan'] } : null}>
              {imageList.length < 1 && text}
            </span>

            {imageList.map((image, index) => (
              <ImagePreview key={index}>
                <Image user={user} src={image['data_url']} alt="preview" />
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onImageRemove(index);
                  }}
                >
                  Remove
                </Button>
              </ImagePreview>
            ))}
          </ImageContainer>
        )}
      </ImageUploading>
    </div>
  );
}
