import { ReactElement } from 'react';
import { htmlToText } from 'html-to-text';

import { MJMLJsonObject, MJMLParsingOptions } from 'mjml-core';

import mjml2html from 'mjml';

// @ts-ignore: Unreachable code error
import json2mjml from 'json2mjml';

// @ts-ignore: Unreachable code error
import mjml2json from 'mjml2json';

// @ts-ignore: Unreachable code error
import mjml2fastmail from '@react-mailkit/cli';

import { convertToMjml } from './utils';

/**
 * This hook returns the mjml result plus the text from html.
 * @param email The given react-mailkit markup.
 * @param options Compailation options for mjml.
 * @returns Object contain mjml result plus the text from html.
 */
export const useEmail = (email: ReactElement, options?: MJMLParsingOptions) => {
  const { html, json, errors } = mjml2html(convertToMjml(email), options);

  // Return the mjml object plus the text from the html.
  return { html, json, errors, text: htmlToText(html) };
};

/**
 * Convert the given json to mjml.
 * @param json The given json .
 * @returns The converted Mjml.
 */
export const jsonToMjml = (json: MJMLJsonObject) => json2mjml(json);

/**
 * Convert the given mjml to fastmail.
 * @param mjml The given mjml.
 * @returns return the converted mjml with fastmail syntax.
 */
export const mjmlTofastmail = (mjml: any) => mjml2fastmail(mjml);

/**
 * Convert the given mjml to json.
 * @param mjml The given mjml.
 * @returns The converted json.
 */
export const mjmlToJson = (mjml: any) => mjml2json(mjml);

export * from './exports';
