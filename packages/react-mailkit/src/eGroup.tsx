import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { IColumnProps } from './eColumn';

import { IDirection, IMJClass, IVerticalAlign } from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { GoC } from './propTypes/global';
import { normalizeProps } from './normalizers';

// Accepted types for Group component
export type IGroupChildren = GoC<ReactElement<IColumnProps>>;

export type IGroupProps = {
  /**
   * Group width
   */
  width?: px;
  /**
   * middle/top/bottom
   */
  verticalAlign?: IVerticalAlign;
  /**
   * Background color for a group
   */
  backgroundColor?: string;
  /**
   * Set the display order of direct children
   * ltr / rtl
   */
  direction?: IDirection;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Children
   */
  children: IGroupChildren;
} & IMJClass;

export const EGroup: FC<IGroupProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mj-group', normalizeProps(rest), children);
};

EGroup.displayName = 'EGroup';
