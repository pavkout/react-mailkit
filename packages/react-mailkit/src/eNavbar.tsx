import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { INavbarLinkProps } from './eNavbarLink';

import {
  IAlign,
  IMJClass,
  ITextDecoration,
  ITextTransform,
} from './propTypes/globalProps';
import { GoC } from './propTypes/global';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

// Accepted types for Navbar component
export type INavbarChildren = GoC<ReactElement<INavbarLinkProps>>;

export type INavbarProps = {
  /**
   * Align content left/center/right
   */
  align?: IAlign;
  /**
   * Base url for children components
   */
  baseUrl?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Activate the hamburger navigation on mobile if the value is hamburger
   */
  hamburger?: string;
  /**
   * Hamburger icon alignment, left/center/right (hamburger mode required)
   */
  icoAlign?: IAlign;
  /**
   * Char code for a custom close icon (hamburger mode required)
   * ASCII code decimal
   */
  icoClose?: string;
  /**
   * Hamburger icon color (hamburger mode required)
   */
  icoColor?: string;
  /**
   * Hamburger icon font (only on hamburger mode)
   */
  icoFontFamily?: string;
  /**
   * Hamburger icon size (hamburger mode required)
   */
  icoFontSize?: px;
  /**
   * 	Hamburger icon line height (hamburger mode required)
   */
  icoLineHeight?: px;
  /**
   * Char code for a custom open icon (hamburger mode required)
   */
  icoOpen?: string | number;
  /**
   * Hamburger icon padding, supports up to 4 parameters (hamburger mode required)
   */
  icoPadding?: string;
  /**
   * Hamburger icon top offset (hamburger mode required)
   */
  icoPaddingTop?: px;
  /**
   * Hamburger icon bottom offset (hamburger mode required)
   */
  icoPaddingBottom?: px;
  /**
   * Hamburger icon left offset (hamburger mode required)
   */
  icoPaddingLeft?: px;
  /**
   * Hamburger icon right offset (hamburger mode required)
   */
  icoPaddingRight?: px;
  /**
   * Hamburger icon text decoration none/underline/overline/line-through (hamburger mode required)
   */
  icoTextDecoration?: ITextDecoration | 'line-through';
  /**
   * Hamburger icon text transformation none/capitalize/uppercase/lowercase (hamburger mode required)
   */
  icoTextTransform?: ITextTransform;
  /**
   * Children
   */
  children: INavbarChildren;
} & IMJClass;

export const ENavbar: FC<INavbarProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mj-navbar', normalizeProps(rest), children);
};

ENavbar.displayName = 'ENavbar';
