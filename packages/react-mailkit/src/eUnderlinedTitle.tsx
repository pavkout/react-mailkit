import React from 'react';

import { ESection, ISectionProps } from './eSection';
import { EColumn, IColumnProps } from './eColumn';
import { EDivider, IDividerProps } from './eDivider';
import { EText, ITextProps } from './eText';

export type IUnderlinedTitleProps = {
	/**
	 * Section props
	 */
	sectionProps?: ISectionProps;
	/**
	 * Column props
	 */
	columnProps?: IColumnProps;
	/**
	 * Divider props
	 */
	dividerProps?: IDividerProps;
	/**
	 * Text props
	 */
	textProps?: ITextProps;
	/**
	 * The title
	 */
	title: string;
};

const defaultProps = {
	textProps: {
		fontSize: 20,
	},
	dividerProps: {
		borderWidth: 1,
	},
};

export const EUnderlinedTitle = (props: IUnderlinedTitleProps) => {
	const { title, sectionProps, columnProps, dividerProps, textProps } = props;

	return (
		<ESection {...sectionProps}>
			<EColumn {...columnProps}>
				<EText {...defaultProps.textProps} {...textProps}>
					{title}
				</EText>
				<EDivider {...defaultProps.dividerProps} {...dividerProps} />
			</EColumn>
		</ESection>
	);
};

EUnderlinedTitle.defaultProps = defaultProps;
