import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { ISectionProps } from './eSection';
import { IWrapperProps } from './eWrapper';
import { IHeroProps } from './eHero';
import { IRawProps } from './eRaw';

import { GoC } from './propTypes/global';
import { px } from './propTypes/lengthUnit';
import { IMJClass } from './propTypes/globalProps';
import { normalizeProps } from './normalizers';

// Accepted types for Body component
export type IBodyChildren =
  | GoC<ReactElement<ISectionProps>>
  | GoC<ReactElement<IRawProps>>
  | GoC<ReactElement<IHeroProps>>
  | GoC<ReactElement<IWrapperProps>>;

export type IBodyProps = {
  /**
   * The general background color
   */
  backgroundColor?: string;
  /**
   * Class name, added to the root HTML element created
   */
  cssClass?: string;
  /**
   * Email's width
   */
  width?: px;
  /**
   * Children
   */
  children: IBodyChildren;
} & IMJClass;

export const EBody: FC<IBodyProps> = (props) => {
  const { children, ...rest } = props;

  return createElement('mj-body', normalizeProps(rest), children);
};

EBody.displayName = 'EBody';
