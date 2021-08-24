import { createElement, FC, ReactElement } from 'react';

import {
	IFontStyle,
	IMJClass,
	IPaddingProps,
	ITarget,
	ITextDecoration,
	ITextTransform,
} from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type INavbarLinkProps = {
	/**
	 * Text color
	 */
	color?: string;
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
	 * Link to redirect to on click
	 */
	href?: string;
	/**
	 * Letter-spacing (px,em)
	 */
	letterSpacing?: px;
	/**
	 * Space between the lines
	 */
	lineHeight?: px;
	/**
	 * Specify the rel attribute
	 */
	rel?: string;
	/**
	 * 	Link target on click
	 */
	target?: ITarget;
	/**
	 * underline/overline/none
	 */
	textDecoration?: ITextDecoration;
	/**
	 * capitalize/uppercase/lowercase/none
	 */
	textTransform?: ITextTransform;
	/**
	 *
	 */
	children?: string | ReactElement | ReactElement[];
} & IPaddingProps &
	IMJClass;

export const ENavbarLink: FC<INavbarLinkProps> = (props) => {
	const { children, ...rest } = props;

	return createElement('mj-navbar-link', normalizeProps(rest), children);
};
