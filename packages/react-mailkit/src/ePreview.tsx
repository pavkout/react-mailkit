import { createElement, FC } from 'react';

export type IPreviewProps = {
	/**
	 * Children
	 */
	children: string;
};

export const EPreview: FC<IPreviewProps> = ({ children }) =>
	createElement('mj-preview', null, children);
