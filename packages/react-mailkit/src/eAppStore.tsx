import React, { FC } from 'react';

import { EImage } from './eImage';
import { ITarget } from './propTypes/globalProps';

import { px } from './propTypes/lengthUnit';

const HEIGHT_RATIO = 3.375;

export type IAppStoreProps = {
  /**
   * Url of App Store and Play Store
   */
  url: string;
  /**
   * Select platform
   */
  platform: 'ios' | 'android';
  /**
   * Default locale code
   */
  defaultLocale?: string;
  /**
   * Locale name
   */
  locale?: string;
  /**
	/* Width for badge size
	 */
  width?: px;
  /**
   * Height for badge size
   */
  height?: px;
  /**
   * Target for url to be opened
   */
  target?: ITarget;
};

const defaultProps: Partial<IAppStoreProps> = {
  defaultLocale: 'en-us',
  locale: (typeof navigator !== 'undefined' && navigator.language) || 'en-us',
  width: 135,
  height: 135 / HEIGHT_RATIO,
  target: '_blank',
};

const expeptionLocale = ['zh-cn', 'zh-tw'];

const getImage = (locale = 'en-us', platform = 'ios') => {
  if (platform === 'ios') {
    return `https://linkmaker.itunes.apple.com/images/badges/${locale}/badge_appstore-lrg.svg`;
  }

  let code = locale.toLowerCase();

  if (expeptionLocale.indexOf(locale) === -1) {
    code = locale.split(/[_-]/)[0];
  }

  return `https://raw.github.com/yjb94/google-play-badge-svg/master/img/${code}_get.svg?sanitize=true`;
};

export const EAppStore: FC<IAppStoreProps> = (props) => {
  const { url, platform, defaultLocale, locale, height, width, target } = props;

  if (!url) {
    throw new Error('You must specify a "url" attribute for eAppStore');
  }

  if (!platform) {
    throw new Error('You must specify a "platform" attribute for eAppStore');
  }

  const src = getImage(locale!.toLowerCase() || defaultLocale, platform);

  return (
    <EImage
      href={url}
      src={src}
      width={width}
      height={height}
      target={target}
      title={`${platform === 'ios' ? 'Apple' : 'Android'} Store Button`}
    />
  );
};

EAppStore.defaultProps = defaultProps;
EAppStore.displayName = 'EAppStore';
