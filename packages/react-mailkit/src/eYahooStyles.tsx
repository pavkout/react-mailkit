import React from 'react';

import { EStyle } from './eStyle';

export type IYahooStylesProps = {
	/**
	 * Height for badge size
	 */
	children: string;
};

export const EYahooStyles = (props: IYahooStylesProps) => {
	const { children } = props;

	if (!children || children.trim().length === 0) {
		throw new Error('You must specify a "children" for Comment');
	}

	return <EStyle>{`@media screen yahoo {${children}}`}</EStyle>;
};
