import { createElement, FC, ReactElement } from 'react';
import * as CSS from 'csstype';

import {
	IAlign,
	IBorderProps,
	IFontStyle,
	IMJClass,
	IPaddingProps,
	ITarget,
	ITextDecoration,
	ITextTransform,
} from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type IButtonProps = {
	/**
	 * Horizontal alignment
	 */
	align?: IAlign;
	/**
	 * Button background-color
	 */
	backgroundColor?: string;
	/**
	 * Border radius
	 */
	borderRadius?: px;
	/**
	 * Text color
	 */
	color?: string;
	/**
	 * Button container background color
	 */
	containerBackgroundColor?: string;
	/**
	 * Class name, added to the root HTML element created
	 */
	cssClass?: string;
	/**
	 * Text size
	 */
	fontSize?: px;
	/**
	 * Font Family
	 */
	fontFamily?: string;
	/**
	 * normal/italic/oblique
	 */
	fontStyle?: IFontStyle;
	/**
	 * Text thickness
	 */
	fontWeight?: number | string;
	/**
	 * Button height
	 */
	height?: px;
	/**
	 * Button width
	 */
	width?: px;
	/**
	 * Link to be triggered when the button is clicked
	 */
	href?: string;
	/**
	 * Inner button padding
	 */
	innerPadding?: string;
	/**
	 * Letter-spacing (px,em)
	 */
	letterSpacing?: px;
	/**
	 * Line-height on link (px/%/none)
	 */
	lineHeight?: px;
	/**
	 * Specify the rel attribute for the button link
	 */
	rel?: string;
	/**
	 * Specify the target attribute for the button link
	 */
	target?: ITarget;
	/**
	 * Text-align button content
	 */
	textAlign?: string;
	/**
	 * underline/overline/none
	 */
	textDecoration?: ITextDecoration;
	/**
	 * capitalize/uppercase/lowercase
	 */
	textTransform?: ITextTransform;
	/**
	 * Tooltip & Accessibility
	 */
	title?: string;
	/**
	 * Vertical alignment
	 */
	verticalAlign?: CSS.Property.VerticalAlign;
	/**
	 * Children
	 */
	children?: string | ReactElement | ReactElement[];
} & IPaddingProps &
	IBorderProps &
	IMJClass;

export const EButton: FC<IButtonProps> = (props) => {
	const { children, ...rest } = props;

	return createElement('mj-button', normalizeProps(rest), children);
};
