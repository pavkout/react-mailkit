import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { ISelectorProps } from './eSelector';

import { GoC } from './propTypes/global';

// Accepted types for HtmlAttributes component
export type IHtmlAttributesChildren = GoC<ReactElement<ISelectorProps>>;

export type IHtmlAttributesProps = {
  /**
   * Children
   */
  children: IHtmlAttributesChildren;
};

export const EHtmlAttributes: FC<IHtmlAttributesProps> = (props) =>
  createElement('mj-html-attributes', null, props.children);

EHtmlAttributes.displayName = 'EHtmlAttributes';
