import { createElement, FC } from 'react';

import { IMJClass, IPaddingProps } from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type ISpacerProps = {
  /**
   * Inner element background color
   */
  containerBackgroundColor?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Spacer height
   */
  height?: px;
} & IPaddingProps &
  IMJClass;

export const ESpacer: FC<ISpacerProps> = (props) =>
  createElement('mj-spacer', normalizeProps(props), null);

ESpacer.displayName = 'ESpacer';
