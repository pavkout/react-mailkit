import { createElement, FC } from 'react';

import { normalizeProps } from './normalizers';

export type IHtmlAttributeProps = {
  /**
   * Attribute name
   */
  name: string;
  /**
   * Children
   */
  children: string;
};

export const EHtmlAttribute: FC<IHtmlAttributeProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-html-attribute', normalizeProps(rest), children);
};

EHtmlAttribute.displayName = 'EHtmlAttribute';
