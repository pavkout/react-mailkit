import { px } from './lengthUnit';

export type IPaddingProps = {
  /**
   * Supports up to 4 parameters
   */
  padding?: string;
  /**
   * Top offset
   */
  paddingTop?: px;
  /**
   * Bottom offset
   */
  paddingBottom?: px;
  /**
   * Left offset
   */
  paddingLeft?: px;
  /**
   * Right offset
   */
  paddingRight?: px;
};

export type IBorderProps = {
  /**
   * CSS border definition
   */
  border?: string;
  /**
   * CSS border definition
   */
  borderTop?: string;
  /**
   * CSS border definition
   */
  borderBottom?: string;
  /**
   * CSS border definition
   */
  borderLeft?: string;
  /**
   * CSS border definition
   */
  borderRight?: string;
};

export type IMJClass = {
  mjClass?: string;
};

export type ITarget = '_self' | '_blank' | '_parent' | '_top';

export type IFontStyle = 'normal' | 'italic' | 'oblique';

export type ITextDecoration = 'underline' | 'overline' | 'none';

export type IAlign = 'left' | 'center' | 'right';

export type ITextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

export type IVerticalAlign = 'top' | 'middle' | 'bottom';

export type IDirection = 'ltr' | 'rtl';
