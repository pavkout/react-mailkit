import React, { FC } from 'react';

import {
  EMail,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EButton,
  useEmail
} from '@react-mailkit/core';

export const proofMarkup = (
  <EMail>
    <EBody backgroundColor='#ffffff'>
      <ESection>
        <EColumn>
          <EImage src='http://i.imgur.com/6wwIX3R.png' width='162px'></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#f3f3f3'>
        <EColumn>
          <EImage src='http://i.imgur.com/nwNZ0TW.png' width='170px'></EImage>
        </EColumn>
        <EColumn>
          <EText
            align='justify'
            color='#000'
            fontFamily='helvetica'
            fontSize='24px'
            fontWeight='bold'
          >
            Article Title
          </EText>
          <EText
            align='justify'
            color='#000'
            fontFamily='helvetica'
            fontSize='15px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet ipsum consequat.
          </EText>
          <EButton
            align='left'
            backgroundColor='#8ccaca'
            borderRadius='40px'
            fontFamily='helvetica'
            fontSize='12px'
          >
            READ MORE
          </EButton>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EImage src='http://i.imgur.com/2aRBc7u.png' width='165px'></EImage>
          <EText
            align='center'
            color='#000'
            fontFamily='helvetica'
            fontSize='16px'
            fontWeight='bold'
          >
            Article Title
          </EText>
          <EText
            align='justify'
            color='#000'
            fontFamily='helvetica'
            fontSize='13px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </EText>
          <EButton
            backgroundColor='#8ccaca'
            borderRadius='40px'
            fontFamily='helvetica'
            fontSize='12px'
          >
            READ MORE
          </EButton>
        </EColumn>
        <EColumn>
          <EImage src='http://i.imgur.com/L7Q88fd.png' width='165px'></EImage>
          <EText
            align='center'
            color='#000'
            fontFamily='helvetica'
            fontSize='16px'
            fontWeight='bold'
          >
            Article Title
          </EText>
          <EText
            align='justify'
            color='#000'
            fontFamily='helvetica'
            fontSize='13px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </EText>
          <EButton
            backgroundColor='#8ccaca'
            borderRadius='40px'
            fontFamily='helvetica'
            fontSize='12px'
          >
            READ MORE
          </EButton>
        </EColumn>
        <EColumn>
          <EImage src='http://i.imgur.com/0NBMznR.png' width='165px'></EImage>
          <EText
            align='center'
            color='#000'
            fontFamily='helvetica'
            fontSize='16px'
            fontWeight='bold'
          >
            Article Title
          </EText>
          <EText
            align='justify'
            color='#000'
            fontFamily='helvetica'
            fontSize='13px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </EText>
          <EButton
            backgroundColor='#8ccaca'
            borderRadius='40px'
            fontFamily='helvetica'
            fontSize='12px'
          >
            READ MORE
          </EButton>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

const Proof: FC<any> = () => {
  const { html } = useEmail(proofMarkup, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Proof;
