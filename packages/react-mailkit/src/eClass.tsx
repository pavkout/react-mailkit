import { createElement, FC } from 'react';

import { IAllChildProps } from './propTypes/allChildProps';
import { normalizeProps } from './normalizers';

export type IClassProps = {
  name: string;
} & IAllChildProps;

export const EClass: FC<IClassProps> = (props) =>
  createElement('mj-class', normalizeProps(props), null);

EClass.displayName = 'EClass';
