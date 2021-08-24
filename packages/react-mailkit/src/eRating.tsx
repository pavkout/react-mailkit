import React from 'react';
import map from 'lodash.map';
import styled from 'styled-components';

import { ERaw } from './eRaw';

export type IRatingProps = {
  /**
   * The url for rating
   */
  url: string;
  /**
   *
   */
  urlPerStar: boolean;
  /**
   * Number of starts
   */
  stars?: number;
  /**
   * Font size for stars
   */
  size?: number;
} & typeof defaultProps;

const defaultProps = {
  stars: 5,
  urlPerStar: false,
  size: 36
};

const Rating = styled.div`
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: center;
  font-size: ${(props: { size: number }) => props.size}px;

  a {
    text-decoration: none;
    color: #dedede;
    text-shadow: 1px 1px 1px #666666;
  }

  > a {
    display: inline-block;
    position: relative;
    width: 1.1em;
  }

  > a:hover,
  > a:hover ~ a {
    color: transparent;
  }

  > a:hover:before,
  > a:hover ~ a:before {
    content: '\\2605';
    position: absolute;
    left: 1;
    color: #fdd017;
  }
`;

const Anchor = styled.a`
  &:hover {
    color: #fdd017 !important;
  }
`;

export const ERating = (props: IRatingProps) => {
  const { url, stars, urlPerStar, size } = props;

  if (!url) {
    throw new Error('You must specify a "url" attribute for Rating');
  }

  return (
    <ERaw>
      <Rating className='rating' size={size}>
        {map(Array.from(Array(stars).keys()).reverse(), value => (
          <Anchor
            key={value}
            href={urlPerStar ? `${url}${value + 1}` : url}
            title={`${value + 1}`}
          >
            ★
          </Anchor>
        ))}
      </Rating>
    </ERaw>
  );
};

ERating.defaultProps = defaultProps;
