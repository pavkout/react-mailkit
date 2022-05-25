// You can include external css files. They will be inserted the same way as when using a mj-style.
// You need to specify that you're including a css file using the type="css" attribute.
// If you want the css to be inlined, you can use the css-inline="inline" attribute.

// You can also include external html files. They will be inserted the same way as when using a mj-raw.
// You need to specify that you're including a html file using the type="html" attribute.

// # Example
// <!-- main.mjml -->
// <mj-include path="./styles.css" type="css" />
// <mj-include path="./inline-styles.css" type="css" css-inline="inline" />

import { createElement, FC } from 'react';

import { normalizeProps } from './normalizers';

export type IIncludeProps = {
  /**
   * The path of include file.
   */
  path?: string;
  /**
   * The type of include file. Ex. css, javascript, html e.t.c
   */
  type?: string;
  /**
   * Inline
   */
  cssInline?: 'inline';
};

export const EInclude: FC<IIncludeProps> = (props) =>
  createElement('mj-include', normalizeProps(props), null);

EInclude.displayName = 'EInclude';
