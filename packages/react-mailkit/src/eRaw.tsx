import { createElement, FC, ReactElement } from 'react';

import { normalizeProps } from './normalizers';
import { GoC } from './propTypes/global';

export type IRawProps = {
	/**
	 * Children
	 */
	children: string | GoC<ReactElement>;
};

export const ERaw: FC<IRawProps> = (props) => {
	const { children, ...rest } = props;

	return createElement('mj-raw', normalizeProps(rest), children);
};
