import React, { ReactElement } from 'react';
import map from 'lodash.map';

import { ESection, ISectionProps } from './eSection';
import { EColumn, IColumnProps } from './eColumn';

export type IRowContainerProps = {
  layout: string;
  sectionProps?: ISectionProps;
  columnProps?: IColumnProps;
  children: ReactElement[];
};

export const RowContainer = (props: IRowContainerProps) => {
  const { layout, sectionProps, columnProps, children } = props;
  if (!layout || layout.length === 0) {
    throw new Error('You must specify a "layout" attribute for SocialMedia');
  }

  const layoutLengths: string[] = layout.split('/');

  if (
    !children ||
    children.length === 0 ||
    layoutLengths.length !== children.length
  ) {
    throw new Error(
      'You must to have the same amount of children as in the layout'
    );
  }

  return (
    <ESection {...sectionProps}>
      {map(children, (child, index) => {
        const columnwidth = `${Number(layoutLengths[index])}0%`;
        return (
          <EColumn key={`col-${index}`} {...columnProps} width={columnwidth}>
            {child}
          </EColumn>
        );
      })}
    </ESection>
  );
};

RowContainer.displayName = 'RowContainer';
