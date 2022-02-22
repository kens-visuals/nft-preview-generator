import { useState } from 'react';

import ImageUploading from 'react-images-uploading';

import {
  ImageContainer,
  ImagePreview,
  Image,
  Button,
} from './ImageUploader.styles';

import { colors } from '../styleVariables';

export default function ImageUploader(props) {
  const [images, setImages] = useState([]);

  const onChange = (imageList, addUpdateIndex) => setImages(imageList);

  return (
    <div>
      <ImageUploading
        maxNumber={1}
        value={images}
        multiple={true}
        onChange={onChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div>
            <ImageContainer
              user={props.user}
              onClick={onImageUpload}
              {...dragProps}
            >
              <span style={isDragging ? { color: colors['cyan'] } : null}>
                {imageList.length < 1 && props.text}
              </span>

              {imageList.map((image, index) => (
                <ImagePreview key={index}>
                  <Image
                    user={props.user}
                    src={image['data_url']}
                    alt="preview"
                  />
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
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
