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

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex); // DEL
    setImages(imageList);
  };

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
              style={isDragging ? { color: colors['red'] } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <span>{props.text}</span>

              {imageList.map((image, index) => (
                <ImagePreview key={index}>
                  <Image src={image['data_url']} alt="preview" />
                  <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </ImagePreview>
              ))}
            </ImageContainer>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
