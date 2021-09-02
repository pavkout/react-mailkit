import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EHtmlAttributes } from '../src/eHtmlAttributes';
import { EHtmlAttribute } from '../src/eHtmlAttribute';
import { ESelector } from '../src/eSelector';

const HtmlAttributes = (
	<EHtmlAttributes>
		<ESelector path=".custom div">
			<EHtmlAttribute name="data-id">42</EHtmlAttribute>
		</ESelector>
	</EHtmlAttributes>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(HtmlAttributes);
		expect(container).not.toBeUndefined();
	});

	it('should render EHtmlAttributes', () => {
		const { container } = render(HtmlAttributes);
		expect(container.querySelector('mj-html-attributes')).toBeInTheDocument();
	});

	it('should have one children', () => {
		const { container } = render(HtmlAttributes);
		expect(
			container.querySelector('mj-html-attributes')?.childNodes.length,
		).toStrictEqual(1);
	});

	it('should have as first child an ESelector', () => {
		const { container } = render(HtmlAttributes);
		expect(
			container.querySelector('mj-html-attributes')?.childNodes[0].nodeName,
		).toStrictEqual('MJ-SELECTOR');
	});

	it('should render EHtmlAttribute', () => {
		const { container } = render(HtmlAttributes);
		expect(container.querySelector('mj-html-attribute')).toBeInTheDocument();
	});

	it('should have name attribute', () => {
		const { container } = render(HtmlAttributes);
		expect(
			container.querySelector('mj-html-attribute')?.hasAttribute('name'),
		).toBeTruthy();
	});

	it('should have data-id as name attribute', () => {
		const { container } = render(HtmlAttributes);
		expect(
			container.querySelector('mj-html-attribute')?.getAttribute('name'),
		).toStrictEqual('data-id');
	});

	it('should EHtmlAttribute have correct content', () => {
		const { container } = render(HtmlAttributes);
		expect(container.querySelector('mj-html-attribute')).toHaveTextContent(
			'42',
		);
	});

	it('renders correctly', () => {
		expect(renderer.create(HtmlAttributes).toJSON()).toMatchSnapshot();
	});
});
