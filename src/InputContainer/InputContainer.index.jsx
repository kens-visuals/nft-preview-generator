import { useState } from 'react';

// components
import Input from 'Input/Input.index';

// styles
import { InputWrapper, Download } from './InputContainer.styles';

export default function InputContainer({
  handleChange,
  values,
  exportAsPicture,
}) {
  return (
    <InputWrapper>
      <Input
        label="NFT Name"
        name="nftname"
        placeholder="Equlibrium"
        value={values.name}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <Input
        label="NFT Description"
        name="description"
        placeholder="Our Equlibrium collection..."
        value={values.name}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <Input
        label="NFT Price (in ETH)"
        name="price"
        placeholder="0.041"
        value={values.name}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <Input
        label="Creactor's name"
        name="creatorName"
        placeholder="Jules Wyvern"
        value={values.name}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <Download onClick={exportAsPicture}>Download</Download>
    </InputWrapper>
  );
}
