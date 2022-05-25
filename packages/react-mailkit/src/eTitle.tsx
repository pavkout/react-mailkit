import { createElement, FC } from 'react';

export type ITitleProps = {
  /**
   * Children
   */
  children: string;
};

export const ETitle: FC<ITitleProps> = (props) =>
  createElement('mj-title', null, props.children);

ETitle.displayName = 'ETitle';
