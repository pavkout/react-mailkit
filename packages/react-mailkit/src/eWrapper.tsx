import { createElement, FC, ReactElement } from 'react';
import * as CSS from 'csstype';

// Import Types of components
import { ISectionProps } from './eSection';

import { IBorderProps, IMJClass, IPaddingProps } from './propTypes/globalProps';
import { GoC } from './propTypes/global';
import { px } from './propTypes/lengthUnit';
import { BackgroundPosition } from './propTypes/positionUnit';

import { normalizeProps } from './normalizers';

// Accepted types for Section component
export type IWrapperChildren = GoC<ReactElement<ISectionProps>>;

export type IWrapperProps = {
  /**
   * Section color
   */
  backgroundColor?: string;
  /**
   * CSS background position (see outlook limitations in mj-section doc)
   * percent / 'left','top',... (2 values max)
   */
  backgroundPosition?: BackgroundPosition;
  /**
   * CSS background position x (percent / keyword)
   */
  backgroundPositionX?: CSS.Property.BackgroundPositionX;
  /**
   * CSS background position y (percent / keyword)
   */
  backgroundPositionY?: CSS.Property.BackgroundPositionY;
  /**
   * CSS background repeat
   */
  backgroundRepeat?: CSS.Property.BackgroundRepeat;
  /**
   * CSS background size
   */
  backgroundSize?: px | 'cover' | 'contain';
  /**
   * Background url
   */
  backgroundUrl?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Make the wrapper full-width
   */
  fullWidth?: string;
  /**
   * CSS text-align
   */
  textAlign?: CSS.Property.TextAlign;
  /**
   * Children
   */
  children: IWrapperChildren;
} & IPaddingProps &
  IBorderProps &
  IMJClass;

export const EWrapper: FC<IWrapperProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mj-wrapper', normalizeProps(rest), children);
};

EWrapper.displayName = 'EWrapper';
