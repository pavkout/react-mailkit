import React, { FC } from 'react';

import { EImage } from './eImage';

import { px } from './propTypes/lengthUnit';

export type IQrCodeProps = {
  /**
   * The content encoded in your QR code
   */
  value: string;
  /**
   * The color of the QR code
   */
  color?: string;
  /**
   * The background of the QR code
   */
  backgroundColor?: string;
  /**
   * The number of QR blocks to leave empty around the QR code
   */
  margin?: px;
  /**
   * The QR error see https://en.wikipedia.org/wiki/QR_code#Error_correction
   * Level L (Low)	7% of data bytes can be restored.
   * Level M (Medium)	15% of data bytes can be restored.
   * Level Q (Quartile)[67]	25% of data bytes can be restored.
   * Level H (High)	30% of data bytes can be restored.
   */
  ecLevel?: 'L' | 'H' | 'M' | 'Q';
  /**
   * 	Width of the QR code image
   */
  width?: px;
  /**
   * The host of the QR image server
   */
  host?: string;
  /**
   * The protocol of the QR image server
   */
  protocol?: 'http' | 'https';
};

const defaultProps: Partial<IQrCodeProps> = {
  color: '#000000',
  backgroundColor: '#ffffff',
  margin: 4,
  ecLevel: 'M',
  width: 200,
  host: 'quickchart.io',
  protocol: 'https'
};

export const EQrCode: FC<IQrCodeProps> = props => {
  const {
    value,
    color,
    backgroundColor,
    margin,
    ecLevel,
    width,
    host,
    protocol
  } = props;

  if (!value) {
    throw new Error('You must specify a "value" attribute for qrCode');
  }

  const content = encodeURIComponent(value);
  const encodeColor = encodeURIComponent(color!.replace('#', ''));
  const encodeBackgroundColor = encodeURIComponent(backgroundColor!).replace(
    '#',
    ''
  );

  const imageSrc: string = `${protocol}://${host}/qr?text=${content}&size=${width}&dark=${encodeColor}&light=${encodeBackgroundColor}&ecLevel=${ecLevel}&margin=${margin}`;

  return <EImage src={imageSrc} width={width} />;
};

EQrCode.defaultProps = defaultProps;

EQrCode.displayName = 'EQrCode';
