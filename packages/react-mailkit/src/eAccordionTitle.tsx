import { createElement, FC, ReactElement } from 'react';

import { IMJClass, IPaddingProps } from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type IAccordionTitleProps = {
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
  fontSize?: px;
  /**
   * Children
   */
  children: string | ReactElement;
} & IPaddingProps &
  IMJClass;

export const EAccordionTitle: FC<IAccordionTitleProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-accordion-title', normalizeProps(rest), children);
};

EAccordionTitle.displayName = 'EAccordionTitle';
