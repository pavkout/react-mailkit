import React, { ReactElement, FC } from 'react';

import { ESection, ISectionProps } from './eSection';
import { EColumn, IColumnProps } from './eColumn';
import { EImage, IImageProps } from './eImage';
import { EText, ITextProps } from './eText';

export type IImageTextProps = {
	imageSrc: string;
	imagePosition?: 'left' | 'right';
	sectionProps?: ISectionProps;
	columnProps?: IColumnProps;
	imageProps?: IImageProps;
	textProps?: ITextProps;
	text: string | ReactElement[];
};

const defaultProps: Partial<IImageTextProps> = {
	imagePosition: 'left',
};

export const EImageText: FC<IImageTextProps> = (props) => {
	const {
		text,
		imageSrc,
		imagePosition,
		sectionProps,
		columnProps,
		imageProps,
		textProps,
	} = props;

	const renderImage = () => {
		return (
			<EColumn {...columnProps} key="col-1">
				<EImage {...imageProps} src={imageSrc} />
			</EColumn>
		);
	};

	const renderText = () => {
		return (
			<EColumn {...columnProps} key="col-2">
				<EText {...textProps}>{text}</EText>
			</EColumn>
		);
	};

	// Render the image in the correct order.
	const content = [renderImage(), renderText()];

	// Create ordered content
	const orderedContent = imagePosition === 'left' ? content : content.reverse();

	return <ESection {...sectionProps}>{orderedContent}</ESection>;
};

EImageText.defaultProps = defaultProps;
