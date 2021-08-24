type CssAbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';

type CssRelativeUnit =
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | '%';

export type LengthUnit =
  | number
  | `${number}${CssAbsoluteUnit | CssRelativeUnit}`;

export type px = LengthUnit | string;

export type CSSFourLengthUnit = px | `${px} ${px}` | `${px} ${px} ${px} ${px}`;
