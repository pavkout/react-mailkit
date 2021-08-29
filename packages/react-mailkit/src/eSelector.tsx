import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { IHtmlAttributeProps } from './eHtmlAttribute';

import { GoC } from './propTypes/global';
import { normalizeProps } from './normalizers';

// Accepted types for Selector component
export type ISelectorChildren = GoC<ReactElement<IHtmlAttributeProps>>;

export type ISelectorProps = {
  /**
   * Using the css selector
   */
  path?: string;
  /**
   * Children
   */
  children: ISelectorChildren;
};

export const ESelector: FC<ISelectorProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-selector', normalizeProps(rest), children);
};
