import React, { FC, ReactElement } from 'react';

import { EMail, EBody, ESection, EColumn } from '../../src/browser';
import { ISectionProps } from '../../src/eSection';
import { IColumnProps } from '../../src/eColumn';

export type EmailProps = {
  sectionProps?: ISectionProps;
  columnProps?: IColumnProps;
  children: ReactElement;
};

export const Email: FC<EmailProps> = ({
  sectionProps,
  columnProps,
  children
}) => (
  <EMail>
    <EBody width={600}>
      <ESection
        {...sectionProps}
        backgroundColor='#ffffff'
        borderRadius={4}
        padding='20px'
      >
        <EColumn width={600} {...columnProps}>
          {children}
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);
