import { createElement, FC, ReactElement } from 'react';
import * as CSS from 'csstype';

// Import Types of components
import { IColumnProps } from './eColumn';

import {
  IBorderProps,
  IDirection,
  IMJClass,
  IPaddingProps
} from './propTypes/globalProps';
import { BackgroundPosition } from './propTypes/positionUnit';
import { px } from './propTypes/lengthUnit';
import { GoC } from './propTypes/global';
import { normalizeProps } from './normalizers';

// Accepted types for Section component
export type ISectionChildren = GoC<ReactElement<IColumnProps>>;

export type ISectionProps = {
  /**
   * Section color
   */
  backgroundColor?: string;
  /**
   * CSS background position (see outlook limitations below)
   * percent / 'left','top'...(2 values max)
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
   * CSS background size (px/percent/'cover'/'contain')
   */
  backgroundSize?: px | 'cover' | 'contain';
  /**
   * Background url
   */
  backgroundUrl?: string;
  /**
   * Border radius
   */
  borderRadius?: px;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Set the display order of direct children
   */
  direction?: IDirection;
  /**
   * Make the section full-width
   */
  fullWidth?: string;
  /**
   * CSS text-align
   */
  textAlign?: CSS.Property.TextAlign;
  /**
   * Children
   */
  children?: ISectionChildren;
} & IPaddingProps &
  IBorderProps &
  IMJClass;

export const ESection: FC<ISectionProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-section', normalizeProps(rest), children);
};

ESection.displayName = 'ESection';
