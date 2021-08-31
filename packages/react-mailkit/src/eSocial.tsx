import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { ISocialElementProps } from './eSocialElement';

import {
  IAlign,
  IMJClass,
  IPaddingProps,
  ITextDecoration
} from './propTypes/globalProps';
import { GoC } from './propTypes/global';
import { px } from './propTypes/lengthUnit';

import { normalizeProps } from './normalizers';

// Accepted types for Social component
export type ISocialChildren = GoC<ReactElement<ISocialElementProps>>;

export type ISocialProps = {
  /**
   * left/right/center
   */
  align?: IAlign;
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
   * Inner element background color
   */
  containerBackgroundColor?: string;
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
   * Icon height, overrides icon-size
   */
  iconHeight?: px;
  /**
   * Icon size (width and height)
   */
  iconSize?: px;
  /**
   * Social network surrounding padding
   */
  innerPadding?: string;
  /**
   * Space between lines (percent/px)
   */
  lineHeight?: px;
  /**
   * vertical/horizontal
   */
  mode?: 'vertical' | 'horizontal';
  /**
   * Padding around the icons
   */
  iconPadding?: string;
  /**
   * Padding around the texts
   */
  textPadding?: string;
  /**
   * underline/overline/none
   */
  textDecoration?: ITextDecoration;
  /**
   * Children
   */
  children: ISocialChildren;
} & IPaddingProps &
  IMJClass;

export const ESocial: FC<ISocialProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-social', normalizeProps(rest), children);
};

ESocial.displayName = 'ESocial';
