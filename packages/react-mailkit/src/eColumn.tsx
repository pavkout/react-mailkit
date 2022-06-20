import { createElement, FC, ReactElement } from 'react';

import {
  IBorderProps,
  IMJClass,
  IPaddingProps,
  IVerticalAlign,
} from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type IColumnProps = {
  /**
   * Background color for a column
   */
  backgroundColor?: string;
  /**
   * Requires: a padding, inner background color for column
   */
  innerBackgroundColor?: string;
  /**
   * Border radius (percent/px)
   */
  borderRadius?: px;
  /**
   * CSS border format
   */
  innerBorder?: string;
  /**
   * CSS border format, requires a padding
   */
  innerBorderTop?: string;
  /**
   * CSS border format, requires a padding
   */
  innerBorderBottom?: string;
  /**
   * CSS border format, requires a padding
   */
  innerBorderRight?: string;
  /**
   * CSS border format, requires a padding
   */
  innerBorderLeft?: string;
  /**
   * Border radius (percent/px)
   */
  innerBorderRadius?: px;
  /**
   * Column width (percent/px)
   */
  width?: px;
  /**
   * middle/top/bottom
   */
  verticalAlign?: IVerticalAlign;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Children
   */
  children?: ReactElement | ReactElement[];
} & IPaddingProps &
  IBorderProps &
  IMJClass;

export const EColumn: FC<IColumnProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mj-column', normalizeProps(rest), children);
};

EColumn.displayName = 'EColumn';
