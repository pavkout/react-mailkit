import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { ITextProps } from './eText';
import { IButtonProps } from './eButton';
import { IImageProps } from './eImage';
import { IDividerProps } from './eDivider';
import { INavbarProps } from './eNavbar';
import { ISocialProps } from './eSocial';
import { ISpacerProps } from './eSpacer';

import {
  IMJClass,
  IPaddingProps,
  IVerticalAlign
} from './propTypes/globalProps';
import { GoC } from './propTypes/global';
import { px } from './propTypes/lengthUnit';
import { BackgroundPosition } from './propTypes/positionUnit';
import { normalizeProps } from './normalizers';

// Accepted types for Hero component
export type IHeroChildren =
  | GoC<ReactElement<ITextProps>>
  | GoC<ReactElement<IButtonProps>>
  | GoC<ReactElement<IImageProps>>
  | GoC<ReactElement<IDividerProps>>
  | GoC<ReactElement<INavbarProps>>
  | GoC<ReactElement<ISocialProps>>
  | GoC<ReactElement<ISpacerProps>>;

export type IHeroProps = {
  /**
   * Hero background color
   */
  backgroundColor?: string;
  /**
   * Height of the image used (mandatory in fixed-height mode)
   */
  backgroundHeight?: px;
  /**
   * Background image position
   */
  backgroundPosition?: BackgroundPosition;
  /**
   * Absolute background url
   */
  backgroundUrl?: string;
  /**
   * Width of the image used
   */
  backgroundWidth?: px;
  /**
   * Border radius
   */
  borderRadius?: px;
  /**
   * Hero section height (required for fixed-height mode)
   */
  height?: px;
  /**
   * Hero container width
   */
  width?: px;
  /**
   * Choose if the height is fixed based on the height attribute or fluid
   */
  mode?: 'fluid-height' | 'fixed-height';
  /**
   * Content vertical alignment
   */
  verticalAlign?: IVerticalAlign;
  /**
   * Children
   */
  children: IHeroChildren;
} & IPaddingProps &
  IMJClass;

export const EHero: FC<IHeroProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-hero', normalizeProps(rest), children);
};

EHero.displayName = 'EHero';
