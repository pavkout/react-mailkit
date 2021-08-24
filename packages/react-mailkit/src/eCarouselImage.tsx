import { createElement, FC } from 'react';

import { normalizeProps } from './normalizers';
import { IMJClass, ITarget } from './propTypes/globalProps';

export type ICarouselImageProps = {
	/**
	 * Image description
	 */
	alt?: string;
	/**
	 * Class name, added to the root HTML element created
	 */
	cssClass?: string;
	/**
	 * Link to redirect to on click
	 */
	href?: string;
	/**
	 * Specify the rel attribute
	 */
	rel?: string;
	/**
	 * Image source
	 */
	src: string;
	/**
	 * Link target on click
	 */
	target?: ITarget;
	/**
	 * Image source to have a thumbnail different than the image it's linked to
	 */
	thumbnailsSrc?: string;
	/**
	 * Tooltip & Accessibility
	 */
	title?: string;
} & IMJClass;

export const ECarouselImage: FC<ICarouselImageProps> = (props) =>
	createElement('mj-carousel-image', normalizeProps(props), null);
