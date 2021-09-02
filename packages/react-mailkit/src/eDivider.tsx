import { createElement, FC } from 'react';

import { IAlign, IMJClass, IPaddingProps } from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type IDividerProps = {
  /**
   * Divider color
   */
  borderColor?: string;
  /**
   * dashed/dotted/solid
   */
  borderStyle?:
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inset'
    | 'none'
    | 'outset'
    | 'ridge'
    | 'solid';
  /**
   * Divider's border width
   */
  borderWidth?: px;
  /**
   * Inner element background color
   */
  containerBackgroundColor?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * divider width
   */
  width?: px;
  /**
   * Alignment
   */
  align?: IAlign;
} & IPaddingProps &
  IMJClass;

export const EDivider: FC<IDividerProps> = props =>
  createElement('mj-divider', normalizeProps(props), null);

EDivider.displayName = 'EDivider';
