import { createElement, FC } from 'react';

import { normalizeProps } from './normalizers';

export type IFontProps = {
  /**
   * URL of a hosted CSS file.
   */
  href: string;
  /**
   * Name of the font
   */
  name: string;
};

export const EFont: FC<IFontProps> = props =>
  createElement('mj-font', normalizeProps(props), null);

EFont.displayName = 'EFont';
