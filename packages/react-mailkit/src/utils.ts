import { ReactElement } from 'react';
import ReactDOMServer from 'react-dom/server';

const Color = require('color');

type INormalizerProps = {
  name?: string;
  value: any;
};

type INormalizer = {
  [key: string]: ({
    name,
    value,
  }: INormalizerProps) => string | number | boolean | undefined;
};

export const kebabCase = (string: string) =>
  string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const boolToString = ({ name, value }: INormalizerProps) =>
  value ? name : undefined;

export const toPx = ({ value }: INormalizerProps) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

export const toColor = ({ value }: INormalizerProps) => {
  // Initialize the color.
  let color = null;

  // Create the actual color based on the given one.
  try {
    color = new Color(value);
  } catch (e) {
    console.warn(e);
  }

  // Return empty string if color does not exist.
  if (!color) {
    return '';
  }

  // Add the alpha for this color if it is not already.
  if (value[0] === '#' && value.length === 9) {
    const alpha = color.alpha().toFixed(2);
    return color.rgb().alpha(alpha).toString();
  }

  // Otherwise return the color as it is.
  return value;
};

/**
 * This function convert react-mailkit to mjml format
 * @param email The react-mailkit component
 * @returns The converted mjml format
 */
export const convertToMjml = (email: ReactElement) =>
  ReactDOMServer.renderToStaticMarkup(email);

export const normalizers: INormalizer = {
  width: toPx,
  height: toPx,
  margin: toPx,
  padding: toPx,
  color: toColor,
  inline: boolToString,
  thumbnails: boolToString,
  'full-width': boolToString,
  'border-radius': toPx,
  'border-width': toPx,
  'background-size': toPx,
  'padding-top': toPx,
  'padding-right': toPx,
  'padding-bottom': toPx,
  'padding-left': toPx,
  'font-size': toPx,
  'font-weight': toPx,
  'letter-spacing': toPx,
  'line-height': toPx,
  'text-padding': toPx,
  'border-color': toColor,
  'background-color': toColor,
  'container-background-color': toColor,
  'inner-background-color': toColor,
  'inner-padding': toPx,
  'inner-border-radius': toPx,
  'icon-weight': toPx,
  'icon-width': toPx,
  'icon-height': toPx,
  'icon-padding': toPx,
  'icon-size': toPx,
  'tb-border-radius': toPx,
  'tb-hover-border-color': toColor,
  'tb-selected-border-color': toColor,
  'tb-width': toPx,
  'background-height': toPx,
  'background-width': toPx,
  'ico-color': toColor,
  'ico-font-size': toPx,
  'ico-line-height': toPx,
  'ico-padding': toPx,
  'ico-padding-top': toPx,
  'ico-padding-right': toPx,
  'ico-padding-bottom': toPx,
  'ico-padding-left': toPx,
  'background-position-x': toPx,
  'background-position-y': toPx,
  'cell-padding': toPx,
  'cell-spacing': toPx,
};
