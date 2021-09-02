import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EAttributes } from '../src/eAttributes';
import { EText } from '../src/eText';
import { EClass } from '../src/eClass';
import { EAll } from '../src/eAll';

const Attributes = (
	<EAttributes>
		<EText padding="0px" />
		<EClass name="blue" color="blue" fontSize="20px" />
		<EAll fontFamily="Arial" />
	</EAttributes>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Attributes);
		expect(container).not.toBeUndefined();
	});

	it('should render mj-attributes', () => {
		const { container } = render(Attributes);
		expect(container.querySelector('mj-attributes')).toBeInTheDocument();
	});

	it('should have three children', () => {
		const { container } = render(Attributes);
		expect(
			container.querySelector('mj-attributes')?.childNodes.length,
		).toStrictEqual(3);
	});

	it('should EText exists', () => {
		const { container } = render(Attributes);
		expect(container.querySelector('mj-text')).toBeInTheDocument();
	});

	it('should EClass exists', () => {
		const { container } = render(Attributes);
		expect(container.querySelector('mj-class')).toBeInTheDocument();
	});

	it('should EAll exists', () => {
		const { container } = render(Attributes);
		expect(container.querySelector('mj-all')).toBeInTheDocument();
	});

	it('should have as first child an EText', () => {
		const { container } = render(Attributes);
		expect(
			container.querySelector('mj-attributes')?.childNodes[0].nodeName,
		).toStrictEqual('MJ-TEXT');
	});

	it('should have as second child an EClass', () => {
		const { container } = render(Attributes);
		expect(
			container.querySelector('mj-attributes')?.childNodes[1].nodeName,
		).toStrictEqual('MJ-CLASS');
	});

	it('should have as third child an EAll', () => {
		const { container } = render(Attributes);
		expect(
			container.querySelector('mj-attributes')?.childNodes[2].nodeName,
		).toStrictEqual('MJ-ALL');
	});

	it('should any of the children has children', () => {
		const { container } = render(Attributes);
		container.querySelector('mj-accordion')?.childNodes.forEach((child) => {
			expect(child.hasChildNodes()).toBeFalsy();
		});
	});

	it('should EText has attribute padding', () => {
		const { container } = render(Attributes);
		expect(
			container.querySelector('mj-text')?.hasAttribute('padding'),
		).toBeTruthy();
	});

	it('should EClass has attributes name, color, font-size', () => {
		const { container } = render(Attributes);
		expect(
			container.querySelector('mj-class')?.hasAttribute('name'),
		).toBeTruthy();
		expect(
			container.querySelector('mj-class')?.hasAttribute('color'),
		).toBeTruthy();
		expect(
			container.querySelector('mj-class')?.hasAttribute('font-size'),
		).toBeTruthy();
	});

	it('should EAll have attribute font-family', () => {
		const { container } = render(Attributes);
		expect(
			container.querySelector('mj-all')?.hasAttribute('font-family'),
		).toBeTruthy();
	});

	it('should EAll have Arial as font-family attribute', () => {
		const { container } = render(Attributes);
		expect(
			container.querySelector('mj-all')?.getAttribute('font-family'),
		).toStrictEqual('Arial');
	});

	it('renders correctly', () => {
		expect(renderer.create(Attributes).toJSON()).toMatchSnapshot();
	});
});
