import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EClass } from '../src/eClass';

const Class = <EClass name="blue" color="blue" fontSize="20px" />;

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Class);
		expect(container).not.toBeUndefined();
	});

	it('should render mj-class', () => {
		const { container } = render(Class);
		expect(container.querySelector('mj-class')).toBeInTheDocument();
	});

	it('should have name attribute', () => {
		const { container } = render(Class);
		expect(
			container.querySelector('mj-class')?.hasAttribute('name'),
		).toBeTruthy();
	});

	it('should have color attribute', () => {
		const { container } = render(Class);
		expect(
			container.querySelector('mj-class')?.hasAttribute('color'),
		).toBeTruthy();
	});

	it('should have font-size attribute', () => {
		const { container } = render(Class);
		expect(
			container.querySelector('mj-class')?.hasAttribute('font-size'),
		).toBeTruthy();
	});

	it('should have blue as name attribute', () => {
		const { container } = render(Class);
		expect(
			container.querySelector('mj-class')?.getAttribute('name'),
		).toStrictEqual('blue');
	});

	it('should have blue as color attribute', () => {
		const { container } = render(Class);
		expect(
			container.querySelector('mj-class')?.getAttribute('color'),
		).toStrictEqual('blue');
	});

	it('should have 20px as font-size attribute', () => {
		const { container } = render(Class);
		expect(
			container.querySelector('mj-class')?.getAttribute('font-size'),
		).toStrictEqual('20px');
	});

	it('renders correctly', () => {
		expect(renderer.create(Class).toJSON()).toMatchSnapshot();
	});
});
