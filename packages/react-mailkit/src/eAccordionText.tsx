import { createElement, FC, ReactElement } from 'react';

import { IMJClass, IPaddingProps } from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type IAccordionTextProps = {
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Font family
   */
  fontFamily?: string;
  /**
   * Font Size
   */
  fontSize?: number | string;
  /**
   * Text thickness
   */
  fontWeight?: number | string;
  /**
   * Letter spacing px, em
   */
  letterSpacing?: px;
  /**
   * Space between the lines
   */
  lineHeight?: px;
  /**
   * Children
   */
  children: string | ReactElement;
} & IPaddingProps &
  IMJClass;

export const EAccordionText: FC<IAccordionTextProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mj-accordion-text', normalizeProps(rest), children);
};

EAccordionText.displayName = 'EAccordionText';
