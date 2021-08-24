import { boolToString, toColor, kebabCase, toPx } from './utils';

type IHandlers = {
	[key: string]: any;
};

export const normalizeProps = (props: any) => {
	return Object.keys(props).reduce((acc, curr) => {
		const mjmlProp = kebabCase(curr);

		return {
			...acc,
			[mjmlProp]: handleMjmlProp(mjmlProp, props[curr]),
		};
	}, {});
};

const handleMjmlProp = (name: any, value: any) => {
	if (typeof value === 'undefined' || value === null) {
		return undefined;
	}

	const handler = handlers[name] || ((_name: any, value_: any) => value_);

	return handler(name, value);
};

const handlers: IHandlers = {
	inline: boolToString,
	'full-width': boolToString,
	width: toPx,
	height: toPx,
	'border-radius': toPx,
	'border-width': toPx,
	'background-size': toPx,
	padding: toPx,
	'padding-top': toPx,
	'padding-right': toPx,
	'padding-bottom': toPx,
	'padding-left': toPx,
	'font-size': toPx,
	'letter-spacing': toPx,
	'line-height': toPx,
	'icon-padding': toPx,
	'text-padding': toPx,
	color: toColor,
	'border-color': toColor,
	'background-color': toColor,
	'container-background-color': toColor,
	'inner-background-color': toColor,
	thumbnails: boolToString,
};
