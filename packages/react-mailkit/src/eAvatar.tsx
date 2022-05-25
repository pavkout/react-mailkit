import React, { FC } from 'react';

import { EImage } from './eImage';

export type IAvatarProps = {
  /**
   * The alternative text
   */
  alt?: string;
  /**
   * The src of the avatar
   */
  src: string;
  /**
   * The size of the avatar
   */
  size?: number;
  /**
   * The shape of the avatar
   */
  shape?: 'circle' | 'rectangular';
};

const defaultProps: Partial<IAvatarProps> = {
  alt: 'avatar',
  size: 64,
  shape: 'circle'
};

export const EAvatar: FC<IAvatarProps> = (props) => {
  const { alt, src, size, shape } = props;

  if (!src || src.trim().length === 0) {
    throw new Error('You must specify a "src" for EAvatar');
  }

  const borderRadius = shape === 'circle' ? size : Number(0.13 * size!);

  return (
    <EImage
      alt={alt}
      src={src}
      width={size}
      height={size}
      align="center"
      borderRadius={borderRadius}
      padding="0px"
    />
  );
};

EAvatar.defaultProps = defaultProps;

EAvatar.displayName = 'EAvatar';
