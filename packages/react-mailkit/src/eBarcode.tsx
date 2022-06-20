import React, { FC } from 'react';

import { EImage } from './eImage';

import { px } from './propTypes/lengthUnit';

export type IBarcodeTypes =
  | 'auspost'
  | 'azteccode'
  | 'azteccodecompact'
  | 'aztecrune'
  | 'bc412'
  | 'channelcode'
  | 'codablockf'
  | 'code11'
  | 'code128'
  | 'code16k'
  | 'code2of5'
  | 'code32'
  | 'code39'
  | 'code39ext'
  | 'code49'
  | 'code93'
  | 'code93ext'
  | 'codeone'
  | 'coop2of5'
  | 'daft'
  | 'databarexpanded'
  | 'databarexpandedcomposite'
  | 'databarexpandedstacked'
  | 'databarexpandedstackedcomposite'
  | 'databarlimited'
  | 'databarlimitedcomposite'
  | 'databaromni'
  | 'databaromnicomposite'
  | 'databarstacked'
  | 'databarstackedcomposite'
  | 'databarstackedomni'
  | 'databarstackedomnicomposite'
  | 'databartruncated'
  | 'databartruncatedcomposite'
  | 'datalogic2of5'
  | 'datamatrix'
  | 'datamatrixrectangular'
  | 'datamatrixrectangularextension'
  | 'dotcode'
  | 'ean13'
  | 'ean13composite'
  | 'ean14'
  | 'ean2'
  | 'ean5'
  | 'ean8'
  | 'ean8composite'
  | 'flattermarken'
  | 'gs1-128'
  | 'gs1-128composite'
  | 'gs1-cc'
  | 'gs1datamatrix'
  | 'gs1datamatrixrectangular'
  | 'gs1dotcode'
  | 'gs1northamericancoupon'
  | 'gs1qrcode'
  | 'hanxin'
  | 'hibcazteccode'
  | 'hibccodablockf'
  | 'hibccode128'
  | 'hibccode39'
  | 'hibcdatamatrix'
  | 'hibcdatamatrixrectangular'
  | 'hibcmicropdf417'
  | 'hibcpdf417'
  | 'hibcqrcode'
  | 'iata2of5'
  | 'identcode'
  | 'industrial2of5'
  | 'interleaved2of5'
  | 'isbn'
  | 'ismn'
  | 'issn'
  | 'itf14'
  | 'japanpost'
  | 'kix'
  | 'leitcode'
  | 'mailmark'
  | 'matrix2of5'
  | 'maxicode'
  | 'micropdf417'
  | 'microqrcode'
  | 'msi'
  | 'onecode'
  | 'pdf417'
  | 'pdf417compact'
  | 'pharmacode'
  | 'pharmacode2'
  | 'planet'
  | 'plessey'
  | 'posicode'
  | 'postnet'
  | 'pzn'
  | 'qrcode'
  | 'rationalizedCodabar'
  | 'raw'
  | 'rectangularmicroqrcode'
  | 'royalmail'
  | 'sscc18'
  | 'symbol'
  | 'telepen'
  | 'telepennumeric'
  | 'ultracode'
  | 'upca'
  | 'upcacomposite'
  | 'upce'
  | 'upcecomposite';

export type IBarcodeProps = {
  /**
   * The content encoded in your barcode
   */
  value: string;
  /**
   * The x-axis scaling factor. Must be an integer > 0. Default is 2.
   */
  scaleX?: string;
  /**
   * The y-axis scaling factor. Must be an integer > 0. Default is scaleX.
   */
  scaleY?: string;
  /**
   * Sets both the x-axis and y-axis scaling factors. Must be an integer > 0.
   */
  scale?: number;
  /**
   * Allows rotating the image to one of the four orthogonal orientations:
   * N : Normal (not rotated). This is the default.
   * R : Clockwise 90 degree rotation.
   * L : Counter-clockwise 90 degree rotation.
   * I : Inverted 180 degree rotation.
   */
  rotate?: 'N' | 'R' | 'L' | 'I';
  /**
   * Sets the image text to render in monochrome. The default is 256-level gray-scale anti-aliased.
   */
  monochrome?: boolean;
  /**
   * Set true to display the text
   */
  includetext?: boolean;
  /**
   * BWIPP Barcode Types
   */
  bcid?: IBarcodeTypes;
  /**
   * The width of the image
   */
  width?: px;
  /**
   * The height of the image
   */
  height?: px;
};

const defaultProps: Partial<IBarcodeProps> = {
  bcid: 'code128',
  width: 300,
  height: 150,
};

export const EBarcode: FC<IBarcodeProps> = (props) => {
  const {
    width,
    height,
    bcid,
    value,
    scaleX,
    scaleY,
    scale,
    rotate,
    monochrome,
    includetext,
  } = props;

  if (!bcid) {
    throw new Error('You must specify a "bcid" attribute for barcode');
  }

  if (!value) {
    throw new Error('You must specify a "value" attribute for barcode');
  }

  // Change the width and the height based on the given rotate value.
  const barcodeWidth = rotate === 'L' || rotate === 'R' ? height : width;
  const barcodeHeight = rotate === 'L' || rotate === 'R' ? width : height;

  let barcodeUrl = `http://bwipjs-api.metafloor.com/?bcid=${bcid}&text=${value}`;

  if (scale) {
    barcodeUrl += `&scale=${scale}`;
  }

  if (scaleX) {
    barcodeUrl += `&scaleX=${scaleX}`;
  }

  if (scaleY) {
    barcodeUrl += `&scaleY=${scaleY}`;
  }

  if (rotate) {
    barcodeUrl += `&rotate=${rotate}`;
  }

  if (monochrome) {
    barcodeUrl += `&monochrome`;
  }

  if (includetext) {
    barcodeUrl += `&includetext`;
  }

  return (
    <EImage src={barcodeUrl} width={barcodeWidth} height={barcodeHeight} />
  );
};

EBarcode.defaultProps = defaultProps;

EBarcode.displayName = 'EBarcode';
