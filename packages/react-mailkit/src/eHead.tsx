import { createElement, FC, ReactElement } from 'react';

// Import Types of components
import { IPreviewProps } from './ePreview';
import { IAttributesProps } from './eAttributes';
import { IHtmlAttributesProps } from './eHtmlAttributes';
import { IStyleProps } from './eStyle';
import { IFontProps } from './eFont';
import { ITitleProps } from './eTitle';
import { IRawProps } from './eRaw';
import { IBreakpointProps } from './eBreakpoint';

import { GoC } from './propTypes/global';

// Accepted types for Head component
export type IHeadChildren =
	| ReactElement<IPreviewProps>
	| ReactElement<IAttributesProps>
	| ReactElement<IHtmlAttributesProps>
	| ReactElement<ITitleProps>
	| ReactElement<IBreakpointProps>
	| GoC<ReactElement<IStyleProps>>
	| GoC<ReactElement<IFontProps>>
	| GoC<ReactElement<IRawProps>>;

export type IHeadProps = {
	/**
	 * Children
	 */
	children: IHeadChildren;
};

export const EHead: FC<IHeadProps> = (props) =>
	createElement('mj-head', null, props.children);
