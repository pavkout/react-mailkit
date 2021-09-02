import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { IAccordionTitleProps } from './eAccordionTitle';
import { IAccordionTextProps } from './eAccordionText';
import { IDefaultAccordionProps } from './eAccordion';

import { normalizeProps } from './normalizers';
import { GoC } from './propTypes/global';
import { IMJClass } from './propTypes/globalProps';

// Accepted types for AccordionElement component
export type IAccordionElementChildren =
  | ReactElement<IAccordionTitleProps>
  | GoC<ReactElement<IAccordionTextProps>>;

export type IAccordionElementProps = {
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Children
   */
  children: IAccordionElementChildren;
} & IDefaultAccordionProps &
  IMJClass;

export const EAccordionElement: FC<IAccordionElementProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-accordion-element', normalizeProps(rest), children);
};

EAccordionElement.displayName = 'EAccordionElement';
