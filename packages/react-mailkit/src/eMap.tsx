import React, { FC } from 'react';
import {
  Marker,
  MarkerGroup,
  Path,
  PathGroup,
  // @ts-ignore: Unreachable code error
  staticMapUrl
} from 'static-google-map';

import { EImage } from './eImage';

export type IMapProps = {
  /**
   * Width for badge size
   */
  width?: number;
  /**
   * Height for badge size
   */
  height?: number;
  /**
   * The dimensions of the image in pixels
   *
   * @type {string}
   * @memberof GoogleMapImageProps
   */
  size?: string;
  /**
   * The scale of the image
   *
   * @type {('1' | '2' | '4' | 1 | 2 | 4)}
   * @memberof GoogleMapImageProps
   * @default 1
   */
  scale?: '1' | '2' | '4' | 1 | 2 | 4;
  /**
   * The format of the image to return
   *
   * @type {('png' | 'png8' | 'png32' | 'gif' | 'jpg' | 'jpg-baseline')}
   * @memberof GoogleMapImageProps
   * @default png
   */
  format?: 'png' | 'png8' | 'png32' | 'gif' | 'jpg' | 'jpg-baseline';
  /**
   * The type of map to return
   *
   * @type {('roadmap' | 'satellite' | 'terrain' | 'hybrid')}
   * @memberof GoogleMapImageProps
   * @default roadmap
   */
  maptype?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
  /**
   * The language to use for the text on the map
   *
   * @type {string}
   * @memberof GoogleMapImageProps
   * @default en
   */
  language?: string;
  /**
   * The region
   */
  region?: string;
  /**
   * Specified the center of the image
   *
   * @type {string}
   * @memberof GoogleMapImageProps
   */
  center?: string;
  /**
   * DSPecifies the zoom level of the image
   *
   * @type {(string | number)}
   * @memberof GoogleMapImageProps
   * @default 0
   */
  zoom?: string | number;
  /**
   * Visible
   */
  visible?: string;
  /**
   * The map style
   */
  style?: string;
  /**
   * Paths to show on the map
   *
   * @type {string}
   * @memberof GoogleMapImageProps
   */
  path?: string;
  /**
   * The ClientID for premium users
   *
   * @type {string}
   * @memberof GoogleMapImageProps
   */
  client?: string;
  /**
   * Your API key
   *
   * @type {string}
   * @memberof GoogleMapImageProps
   */
  key?: string;
  /**
   * Digital signature
   *
   * @type {string}
   * @memberof GoogleMapImageProps
   */
  signature?: string;
  /**
   * Channel for premium users
   *
   * @type {string}
   * @memberof GoogleMapImageProps
   */
  channel?: string;
  /**
   * The alternative text for image
   */
  alt?: string;
  /**
   * The market array
   */
  markers?: Marker;
  /**
   * The markerGroups
   */
  markerGroups?: MarkerGroup;
  /**
   * The paths
   */
  paths?: Path[];
  /**
   * The PathGroup
   */
  pathGroups?: PathGroup[];
};

const defaultProps: Partial<IMapProps> = {
  key: 'AIzaSyCd5ZoMYrDuVeDkXnpztEodrQ-IyXInnek',
  scale: 1,
  width: 600,
  height: 300,
  format: 'png',
  maptype: 'roadmap',
  alt: 'Static Image Map'
};

export const EMap: FC<IMapProps> = props => {
  const { key, scale, format, maptype, height, width, markers, size, alt } =
    props;

  if (!key) {
    throw new Error('You must specify a "key" attribute for map');
  }

  const src = staticMapUrl({
    key,
    scale,
    size: size || `${width}x${height}`,
    format,
    maptype,
    markers
  });

  return <EImage alt={alt} src={src} width={width} height={height} />;
};

EMap.defaultProps = defaultProps;

EMap.displayName = 'EMap';
