import React from 'react';
import { FC } from 'react';

import { ERaw } from './eRaw';

export type ICommentProps = {
  /**
   * Condition (if gte mso 9, if IE)
   */
  condition?: string;
  /**
   * Height for badge size
   */
  children: string;
};

export const EComment: FC<ICommentProps> = (props) => {
  const { condition, children } = props;

  if (!children || children.trim().length === 0) {
    throw new Error('You must specify a children for EComment');
  }

  return (
    <ERaw>
      {condition
        ? `<!--[${condition}]>${children}<![endif]-->`
        : `<!--${children}-->`}
    </ERaw>
  );
};

EComment.displayName = 'EComment';
