import { createElement, FC } from 'react';

import { normalizeProps } from './normalizers';

export type IStyleProps = {
  /**
   * Set to "inline" to inline styles
   */
  inline?: string;
  /**
   * Children
   */
  children?: string;
  /**
   * Styles
   */
  style?: string;
};

export const EStyle: FC<IStyleProps> = props => {
  const { children, style, ...rest } = props;

  return createElement('mj-style', {
    ...normalizeProps(rest),
    dangerouslySetInnerHTML: { __html: children || style }
  });
};

EStyle.displayName = 'EStyle';
