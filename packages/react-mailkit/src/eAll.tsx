import { createElement, FC } from 'react';

import { normalizeProps } from './normalizers';
import { IAllChildProps } from './propTypes/allChildProps';

export type IAllProps = IAllChildProps;

export const EAll: FC<IAllProps> = props =>
  createElement('mj-all', normalizeProps(props), null);
