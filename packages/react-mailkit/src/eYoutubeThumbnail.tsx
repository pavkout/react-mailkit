import React, { FC } from 'react';

import { EImage } from './eImage';
import { IPaddingProps } from './propTypes/globalProps';

import { px } from './propTypes/lengthUnit';

export type IQualityTypes =
	| 'default'
	| 'medium'
	| 'high'
	| 'standard'
	| 'maxres'
	| 0
	| 1
	| 2
	| 3;

export const ImageQuality = {
	default: 'default',
	medium: 'mqdefault',
	high: 'hqdefault',
	standard: 'sddefault',
	maxres: 'maxresdefault',
};

export type IYoutubeThumbnailProps = {
	/**
	 * The youtube video id
	 */
	id: string;
	/**
	 * The quality of the image
	 */
	imageQuality?: IQualityTypes;
	/**
	 * Border radius
	 */
	borderRadius?: px;
} & IPaddingProps;

const defaultProps: Partial<IYoutubeThumbnailProps> = {
	imageQuality: 'default',
	borderRadius: 0,
};

export const EYoutubeThumbnail: FC<IYoutubeThumbnailProps> = (props) => {
	const { id, imageQuality, padding, borderRadius } = props;

	if (!id) {
		throw new Error('You must specify a "id" attribute for EYoutube');
	}

	// Initialize the quality with default.
	let quality: string | number = ImageQuality.default;

	// Select the quality based on the given imageQuality props.
	if (typeof imageQuality === 'number' && imageQuality in [0, 1, 2, 3]) {
		quality = imageQuality;
	} else if (typeof imageQuality !== 'number' && imageQuality !== undefined) {
		quality = ImageQuality[imageQuality];
	}

	// Create the image url
	let baseUrl = `https://img.youtube.com/vi/${id}/${quality}.jpg`;

	return (
		<EImage
			alt="Youtube Thumbnail"
			src={baseUrl}
			borderRadius={borderRadius}
			padding={padding}
		/>
	);
};

EYoutubeThumbnail.defaultProps = defaultProps;
