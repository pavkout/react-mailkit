import React, { FC } from 'react';

import { EWrapper } from './eWrapper';
import { ESection } from './eSection';
import { EColumn } from './eColumn';
import { ESpacer } from './eSpacer';
import { EYoutubeThumbnail, IQualityTypes } from './eYoutubeThumbnail';
import { IPaddingProps } from './propTypes/globalProps';

export type IYoutubeProps = {
  /**
   * The youtube video id
   */
  id: string;
  /**
   * The quality of the image
   */
  imageQuality?: IQualityTypes;
} & IPaddingProps;

const defaultProps: Partial<IYoutubeProps> = {
  imageQuality: 'default'
};

export const EYoutube: FC<IYoutubeProps> = props => {
  const { id, imageQuality } = props;

  return (
    <EWrapper
      backgroundColor='#000000'
      backgroundUrl='https://www.marieclairemusic.com/wp-content/themes/music/images/player.png'
      backgroundRepeat='no-repeat'
      backgroundPosition='left bottom'
      backgroundSize='contain'
      padding='15px 0'
    >
      <ESection padding='0'>
        <EColumn padding='0'>
          <EYoutubeThumbnail
            id={id}
            imageQuality={imageQuality}
            padding='0px'
          />
        </EColumn>
      </ESection>
      <ESection padding='0px' fullWidth='fullWidth' textAlign='left'>
        <EColumn padding='0px'>
          <ESpacer padding='0px' height={45} />
        </EColumn>
      </ESection>
    </EWrapper>
  );
};

EYoutube.defaultProps = defaultProps;

EYoutube.displayName = 'EYoutube';
