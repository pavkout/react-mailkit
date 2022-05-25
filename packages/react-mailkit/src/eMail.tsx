import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { IHeadProps } from './eHead';
import { IBodyProps } from './eBody';

import { normalizeProps } from './normalizers';

// Accepted types for EMail component
export type IMailChildren =
  | ReactElement<IHeadProps>
  | ReactElement<IBodyProps>
  | ReactElement<IHeadProps | IBodyProps>[];

export type IMailProps = {
  /**
   * If set to "desktop", switch force desktop version for older
   * (self-hosted) version of Outlook.com that doesn't support media queries
   */
  owa?: string;
  /**
   * Used as <html lang=""> attribute
   */
  lang?: string;
  /**
   * Children
   */
  children: IMailChildren;
};

export const EMail: FC<IMailProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mjml', normalizeProps(rest), children);
};

EMail.displayName = 'EMail';
