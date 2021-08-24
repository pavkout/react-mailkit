import { createElement, FC, ReactElement } from 'react';
import * as CSS from 'csstype';

// Import Types of components
import { ICarouselImageProps } from './eCarouselImage';

import { px } from './propTypes/lengthUnit';
import { GoC } from './propTypes/global';
import { IMJClass } from './propTypes/globalProps';
import { normalizeProps } from './normalizers';

// Accepted types for Carousel component
export type ICarouselChildren = GoC<ReactElement<ICarouselImageProps>>;

export type ICarouselProps = {
	/**
	 * Horizontal alignment
	 */
	align?: string;
	/**
	 * Column background color
	 */
	backgroundColor?: string;
	/**
	 * Border radius
	 */
	borderRadius?: px;
	/**
	 * Class name, added to the root HTML element created
	 */
	cssClass?: string;
	/**
	 * Width of the icons on left and right of the main image
	 */
	iconWidth?: px;
	/**
	 * Icon on the left of the main image
	 */
	leftIcon?: string;
	/**
	 * Icon on the right of the main image
	 */
	rightIcon?: string;
	/**
	 * Border of the thumbnails
	 */
	tbBorder?: string;
	/**
	 * Border-radius of the thumbnails
	 */
	tbBorderRadius?: px;
	/**
	 * CSS border color of the hovered thumbnail
	 */
	tbHoverBorderColor?: CSS.Property.BorderColor;
	/**
	 * CSS border color of the selected thumbnail
	 */
	tbSelectedBorderColor?: CSS.Property.BorderColor;
	/**
	 * Thumbnail width
	 */
	tbWidth?: px;
	/**
	 * Display or not the thumbnails (visible or hidden)
	 */
	thumbnails?: string;
	/**
	 * Children
	 */
	children: ICarouselChildren;
} & IMJClass;

export const ECarousel: FC<ICarouselProps> = (props) => {
	const { children, ...rest } = props;

	return createElement('mj-carousel', normalizeProps(rest), children);
};
