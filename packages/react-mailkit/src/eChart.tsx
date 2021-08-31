import { createElement, FC } from 'react';

import { normalizeProps } from './normalizers';

export type IChartProps = {
  children: any;
};

export const EChart: FC<IChartProps> = props => {
  const { children, ...rest } = props;

  return createElement('mj-chart', normalizeProps(rest), children);
};

EChart.displayName = 'EChart';
