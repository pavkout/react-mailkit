import { createElement, FC, ReactElement } from 'react';
import * as CSS from 'csstype';

import { IAlign, IMJClass, IPaddingProps } from './propTypes/globalProps';
import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type ITableProps = {
	/**
	 * Self horizontal alignment
	 */
	align?: IAlign;
	/**
	 * Table external border
	 */
	border?: CSS.Property.Border;
	/**
	 * Space between cells
	 */
	cellpadding?: px;
	/**
	 * Space between cell and border
	 */
	cellspacing?: px;
	/**
	 * Text header & footer color
	 */
	color?: string;
	/**
	 * Inner element background color
	 */
	containerBackgroundColor?: string;
	/**
	 * Class name, added to the root HTML element created
	 */
	cssClass?: string;
	/**
	 * Font name
	 */
	fontFamily?: string;
	/**
	 * Font size
	 */
	fontSize?: px;
	/**
	 * Font style
	 */
	fontStyle?: string;
	/**
	 * Space between lines (percent/px)
	 */
	lineHeight?: px;
	/**
	 * Specify the role attribute (none/presentation)
	 */
	role?: 'none' | 'presentation';
	/**
	 * Sets the table layout.
	 */
	tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
	/**
	 * Table width
	 */
	width?: px;
	/**
	 * Children
	 */
	children: Node | ReactElement | ReactElement[];
} & IPaddingProps &
	IMJClass;

export const ETable: FC<ITableProps> = (props) => {
	const { children, ...rest } = props;

	return createElement('mj-table', normalizeProps(rest), children);
};
