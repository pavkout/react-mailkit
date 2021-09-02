import React from 'react';

import { EImage } from './eImage';

export type ITrackingProps = {
  /**
   * The tracking url
   */
  url: string;
};

export const ETracking = (props: ITrackingProps) => {
  const { url } = props;

  if (!url) {
    throw new Error('You must specify a "url" attribute for Tracking');
  }

  return <EImage src={url} border='none' padding='0' width={1} height={1} />;
};

ETracking.displayName = 'ETracking';
