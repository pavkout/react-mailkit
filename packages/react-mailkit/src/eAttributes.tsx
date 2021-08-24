import { createElement, FC } from 'react';

export type IAttributesProps = {
	/**
	 * Children
	 */
	children: any;
};

export const EAttributes: FC<IAttributesProps> = (props) =>
	createElement('mj-attributes', null, props.children);
