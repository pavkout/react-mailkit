import { createElement, FC, ReactElement } from 'react';

import {
  IPaddingProps,
  IAlign,
  IFontStyle,
  ITextDecoration,
  ITextTransform,
  IMJClass
} from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type ITextProps = {
  /**
   * Text color
   */
  color?: string;
  /**
   * Font name
   */
  fontFamily?: string;
  /**
   * Font size
   */
  fontSize?: px;
  /**
   * Font style
   */
  fontStyle?: IFontStyle;
  /**
   * Text thickness
   */
  fontWeight?: number | string;
  /**
   * Space between the lines
   */
  lineHeight?: px;
  /**
   * Letter spacing (px,em)
   */
  letterSpacing?: px;
  /**
   * The height of the element
   */
  height?: px;
  /**
   * underline/overline/line-through/none
   */
  textDecoration?: ITextDecoration;
  /**
   * uppercase/lowercase/capitalize
   */
  textTransform?: ITextTransform;
  /**
   * left/right/center/justify
   */
  align?: IAlign | 'justify';
  /**
   * Inner element background color
   */
  containerBackgroundColor?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Children
   */
  children?: string | ReactElement | ReactElement[] | any[];
} & IPaddingProps &
  IMJClass;

export const EText: FC<ITextProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mj-text', normalizeProps(rest), children);
};

EText.displayName = 'EText';
