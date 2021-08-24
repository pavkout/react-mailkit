import React, { FC } from 'react';

import { EWrapper } from './eWrapper';
import { ESection } from './eSection';
import { EColumn } from './eColumn';
import { EImage } from './eImage';
import { EText } from './eText';
import { ESocial } from './eSocial';
import { ESocialElement } from './eSocialElement';

export type ISocialPostProps = {
  /**
   * The Social media
   */
  name: string;
  /**
   * The src of the social media
   */
  imageSrc: string;
  /**
   * The href for social icon
   */
  href?: string;
  /**
   * The title of the post
   */
  title: string;
  /**
   * The content of the post
   */
  text: string;
} & typeof defaultProps;

const defaultProps = {
  name: 'facebook',
  imageSrc: 'https://place-hold.it/250x150',
  title: 'My Social Media Post Title',
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
};

export const ESocialPost: FC<ISocialPostProps> = props => {
  const { name, imageSrc, href, title, text } = props;

  if (!imageSrc || imageSrc.trim().length === 0) {
    throw new Error('You must specify a "src" for ESocialPost');
  }

  return (
    <EWrapper>
      <ESection padding='0'>
        <EColumn borderRadius='5px 5px 0px 0px' width={250}>
          <EImage
            borderRadius='5px 5px 0px 0px'
            height={150}
            width={250}
            padding='0'
            src={imageSrc}
          />
        </EColumn>
      </ESection>
      <ESection padding='0'>
        <EColumn
          borderRadius='0px 0px 5px 5px'
          width={250}
          backgroundColor='#f3f3f3'
        >
          <EText padding='15px 20px 5px 20px' fontSize='16px'>
            {title}
          </EText>
          <EText padding='5px 20px 10px 20px' color='#616161'>
            {text}
          </EText>
          <ESocial align='left' padding='10px 20px' iconSize={24}>
            <ESocialElement
              padding='0'
              borderRadius={50}
              name={name}
              href={href}
            />
          </ESocial>
        </EColumn>
      </ESection>
    </EWrapper>
  );
};

ESocialPost.defaultProps = defaultProps;
