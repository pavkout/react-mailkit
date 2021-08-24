import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EInclude } from '../src/eInclude';

const Include = (
	<EInclude path="./inline-styles.css" type="css" cssInline="inline" />
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Include);
		expect(container).not.toBeUndefined();
	});

	it('should render EInclude', () => {
		const { container } = render(Include);
		expect(container.querySelector('mj-include')).toBeInTheDocument();
	});

	it('should have path attribute', () => {
		const { container } = render(Include);
		expect(
			container.querySelector('mj-include')?.hasAttribute('path'),
		).toBeTruthy();
	});

	it('should have correct path attribute', () => {
		const { container } = render(Include);
		expect(
			container.querySelector('mj-include')?.getAttribute('path'),
		).toStrictEqual('./inline-styles.css');
	});

	it('should have cssInline attribute', () => {
		const { container } = render(Include);
		expect(
			container.querySelector('mj-include')?.hasAttribute('css-inline'),
		).toBeTruthy();
	});

	it('should have inline as cssInline attribute', () => {
		const { container } = render(Include);
		expect(
			container.querySelector('mj-include')?.getAttribute('css-inline'),
		).toStrictEqual('inline');
	});

	it('should have type attribute', () => {
		const { container } = render(Include);
		expect(
			container.querySelector('mj-include')?.hasAttribute('type'),
		).toBeTruthy();
	});

	it('should have css as type attribute', () => {
		const { container } = render(Include);
		expect(
			container.querySelector('mj-include')?.getAttribute('type'),
		).toStrictEqual('css');
	});

	it('renders correctly', () => {
		expect(renderer.create(Include).toJSON()).toMatchSnapshot();
	});
});
