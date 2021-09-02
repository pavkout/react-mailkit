import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EHead } from '../src/eHead';
import { EPreview } from '../src/ePreview';
import { EBreakpoint } from '../src/eBreakpoint';
import { ETitle } from '../src/eTitle';

const Head = (
	<EHead>
		<EPreview>Hello MJML</EPreview>
		<EBreakpoint width="320px" />
		<ETitle>Hello MJML</ETitle>
	</EHead>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Head);
		expect(container).not.toBeUndefined();
	});

	it('should render EHead', () => {
		const { container } = render(Head);
		expect(container.querySelector('mj-head')).toBeInTheDocument();
	});

	it('should have three children', () => {
		const { container } = render(Head);
		expect(container.querySelector('mj-head')?.childNodes.length).toStrictEqual(
			3,
		);
	});

	it('should have as first child an EPreview', () => {
		const { container } = render(Head);
		expect(
			container.querySelector('mj-head')?.childNodes[0].nodeName,
		).toStrictEqual('MJ-PREVIEW');
	});

	it('should have as second child an EBreakpoint', () => {
		const { container } = render(Head);
		expect(
			container.querySelector('mj-head')?.childNodes[1].nodeName,
		).toStrictEqual('MJ-BREAKPOINT');
	});

	it('should have as third child an ETitle', () => {
		const { container } = render(Head);
		expect(
			container.querySelector('mj-head')?.childNodes[2].nodeName,
		).toStrictEqual('MJ-TITLE');
	});

	it('renders correctly', () => {
		expect(renderer.create(Head).toJSON()).toMatchSnapshot();
	});
});
