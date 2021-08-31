import React from 'react';
import map from 'lodash.map';

import { ESocial, ISocialProps } from './eSocial';
import { ESocialElement, ISocialElementProps } from './eSocialElement';

export interface IMedia {
  name: string;
  href: string;
}

export type ISocialMediaProps = {
  media: IMedia[];
  socialProps?: ISocialProps;
  socialElementProps?: ISocialElementProps;
};

export const ESocialMedia = (props: ISocialMediaProps) => {
  const { media, socialProps, socialElementProps } = props;

  if (!media || media.length === 0) {
    throw new Error('You must specify a "media" attribute for SocialMedia');
  }

  return (
    <ESocial {...socialProps}>
      {map(media, (m: IMedia) => (
        <ESocialElement
          key={m.name}
          name={m.name}
          href={m.href}
          {...socialElementProps}
        >
          {m.name}
        </ESocialElement>
      ))}
    </ESocial>
  );
};

ESocialMedia.displayName = 'ESocialMedia';
