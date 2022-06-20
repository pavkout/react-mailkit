import { createElement, FC, ReactElement } from 'react';
import * as CSS from 'csstype';

// Import Types of components
import { IAccordionElementProps } from './eAccordionElement';

import { IMJClass, IPaddingProps } from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { GoC } from './propTypes/global';

import { normalizeProps } from './normalizers';

enum IconPosition {
  left = 'left',
  right = 'right',
}

// Accepted types for Accordion component
export type IAccordionChildren = GoC<ReactElement<IAccordionElementProps>>;

export type IDefaultAccordionProps = {
  /**
   * CSS border format
   */
  border?: string;
  /**
   * Background-color of the cel
   */
  containerBackgroundColor?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Font
   */
  fontFamily?: string;
  /**
   * Icon alignment
   */
  iconAlign?: CSS.Property.VerticalAlign;
  /**
   * Icon height
   */
  iconHeight?: px;
  /**
   * Icon width
   */
  iconWidth?: px;
  /**
   * Display icon left or right
   */
  iconPosition?: IconPosition;
  /**
   * Alt text when accordion is unwrapped
   */
  iconUnwrappedAlt?: string;
  /**
   * Icon when accordion is unwrapped
   */
  iconUnwrappedUrl?: string;
  /**
   * Alt text when accordion is wrapped
   */
  iconWrappedAlt?: string;
  /**
   * Icon when accordion is wrapped
   */
  iconWrappedUrl?: string;
};

export type IAccordionProps = {
  /**
   * Background-color of the cell
   */
  containerBackgroundColor?: string;
  /**
   * Children
   */
  children: IAccordionChildren;
} & IDefaultAccordionProps &
  IPaddingProps &
  IMJClass;

export const EAccordion: FC<IAccordionProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mj-accordion', normalizeProps(rest), children);
};

EAccordion.displayName = 'EAccordion';
