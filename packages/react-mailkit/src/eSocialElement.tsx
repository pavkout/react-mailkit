// Supported networks with a share url:
// - facebook
// - twitter
// - google
// - pinterest
// - linkedin
// - tumblr
// - xing

// Without a share url:
// - github
// - instagram
// - web
// - snapchat
// - youtube
// - vimeo
// - medium
// - soundcloud
// - dribbble

// Example :

// <ESocialElement name="twitter-noshare" href="my-unchanged-url">
// 	Twitter
// </ESocialElement>

import { createElement, FC, ReactElement } from 'react';

import {
  IAlign,
  IMJClass,
  IPaddingProps,
  ITarget,
  ITextDecoration,
  IVerticalAlign
} from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type ISocialElementProps = {
  /**
   * left/right/center
   */
  align?: IAlign;
  /**
   * Image alt attribute
   */
  alt?: string;
  /**
   * Icon Color
   */
  backgroundColor?: string;
  /**
   * Border radius
   */
  borderRadius?: px;
  /**
   * Text color
   */
  color?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Font name
   */
  fontFamily?: string;
  /**
   * Font size (px/em)
   */
  fontSize?: px;
  /**
   * Font style
   */
  fontStyle?: string;
  /**
   * Font weight
   */
  fontWeight?: number | string;
  /**
   * Redirection url
   */
  href?: string;
  /**
   * Icon height, overrides icon-size (percent/px)
   */
  iconHeight?: px;
  /**
   * Icon size (width and height)
   */
  iconSize?: px;
  /**
   * Space between lines (percent/px)
   */
  lineHeight?: px;
  /**
   * Social network name, see supported list below
   */
  name: string;
  /**
   * Padding around the icon
   */
  iconPadding?: px;
  /**
   * Padding around the text
   */
  textPadding?: px;
  /**
   * Set icon width based on query
   */
  sizes?: string;
  /**
   * Image source
   */
  src?: string;
  /**
   * Set a different image source based on the viewport
   */
  srcset?: string;
  /**
   * Specify the rel attribute for the link
   */
  rel?: string;
  /**
   * Link target
   */
  target?: ITarget;
  /**
   * Img title attribute
   */
  title?: string;
  /**
   * underline/overline/none
   */
  textDecoration?: ITextDecoration;
  /**
   * top/middle/bottom
   */
  verticalAlign?: IVerticalAlign;
  /**
   * Children
   */
  children?: string | ReactElement;
} & IPaddingProps &
  IMJClass;

export const ESocialElement: FC<ISocialElementProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-social-element', normalizeProps(rest), children);
};

ESocialElement.displayName = 'ESocialElement';
