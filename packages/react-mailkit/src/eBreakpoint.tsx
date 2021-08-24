import { createElement, FC } from 'react';

import { px } from './propTypes/lengthUnit';
import { normalizeProps } from './normalizers';

export type IBreakpointProps = {
	/**
	 * This tag allows you to control on which breakpoint the layout should go desktop/mobile.
	 * Breakpoint's value
	 */
	width: px;
};

export const EBreakpoint: FC<IBreakpointProps> = (props) =>
	createElement('mj-breakpoint', normalizeProps(props), null);
