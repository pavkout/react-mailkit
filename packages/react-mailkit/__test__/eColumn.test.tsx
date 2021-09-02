import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EColumn } from '../src/eColumn';
import { EText } from '../src/eText';

const Column = (
	<EColumn width={250}>
		<EText
			fontStyle="italic"
			fontSize="20px"
			fontFamily="Helvetica Neue"
			color="#626262">
			My Awesome Text
		</EText>
	</EColumn>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Column);
		expect(container).not.toBeUndefined();
	});

	it('should render EColumn', () => {
		const { container } = render(Column);
		expect(container.querySelector('mj-column')).toBeInTheDocument();
	});

	it('should have one children', () => {
		const { container } = render(Column);
		expect(
			container.querySelector('mj-column')?.childNodes.length,
		).toStrictEqual(1);
	});

	it('should EText exists', () => {
		const { container } = render(Column);
		expect(container.querySelector('mj-text')).toBeInTheDocument();
	});

	it('should have width attribute', () => {
		const { container } = render(Column);
		expect(
			container.querySelector('mj-column')?.hasAttribute('width'),
		).toBeTruthy();
	});

	it('should have 250px as width attribute', () => {
		const { container } = render(Column);
		expect(
			container.querySelector('mj-column')?.getAttribute('width'),
		).toStrictEqual('250px');
	});

	it('should not render nested EColumn inside EColumn', () => {
		const { container } = render(Column);
		expect(
			container.querySelector('mj-column')?.querySelector('mj-column'),
		).toBeNull();
	});

	it('should not render nested ESection inside EColumn', () => {
		const { container } = render(Column);
		expect(
			container.querySelector('mj-column')?.querySelector('mj-section'),
		).toBeNull();
	});

	it('renders correctly', () => {
		expect(renderer.create(Column).toJSON()).toMatchSnapshot();
	});
});
