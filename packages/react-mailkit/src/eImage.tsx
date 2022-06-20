import { createElement, FC } from 'react';

import {
  IAlign,
  IBorderProps,
  IMJClass,
  IPaddingProps,
  ITarget,
} from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type IImageProps = {
  /**
   * Image alignment
   */
  align?: IAlign;
  /**
   * Image description
   */
  alt?: string;
  /**
   * Border radius
   */
  borderRadius?: px;
  /**
   * Inner element background color
   */
  containerBackgroundColor?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * If "true", will be full width on mobile even if width is set
   */
  fluidOnMobile?: string;
  /**
   * Image height
   */
  height?: px;
  /**
   * Image width
   */
  width?: px;
  /**
   * Link to redirect to on click
   */
  href?: string;
  /**
   * Specify the link name attribute
   */
  name?: string;
  /**
   * Specify the rel attribute
   */
  rel?: string;
  /**
   * Set width based on query
   */
  sizes?: string;
  /**
   * Image source
   */
  src: string;
  /**
   * Enables to set a different image source based on the viewport
   */
  srcSet?: string;
  /**
   * Link target on click
   */
  target?: ITarget;
  /**
   * Tooltip & Accessibility
   */
  title?: string;
  /**
   * Reference to image map, be careful, it isn't supported everywhere
   */
  useMap?: string;
} & IBorderProps &
  IPaddingProps &
  IMJClass;

export const EImage: FC<IImageProps> = (props) =>
  createElement('mj-image', normalizeProps(props), null);

EImage.displayName = 'EImage';
