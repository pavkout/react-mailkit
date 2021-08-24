import { ReactElement } from 'react';
import ReactDOMServer from 'react-dom/server';

const Color = require('color');

export const kebabCase = (string: string) =>
  string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const boolToString = (name: any, value: any) =>
  value ? name : undefined;

export const toPx = (name: any, value: any) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

export const toColor = (name: any, value: any) => {
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
