import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ESection } from '../src/eSection';
import { EColumn } from '../src/eColumn';
import { EText } from '../src/eText';

const Section = (
	<ESection backgroundColor="#ffffff">
		<EColumn>
			<EText color="#ffffff" fontSize="22px">
				Hello FastMail
			</EText>
		</EColumn>
	</ESection>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Section);
		expect(container).not.toBeUndefined();
	});

	it('should render ESection', () => {
		const { container } = render(Section);
		expect(container.querySelector('mj-section')).toBeInTheDocument();
	});

	it('should have one child', () => {
		const { container } = render(Section);
		expect(
			container.querySelector('mj-section')?.childNodes.length,
		).toStrictEqual(1);
	});

	it('should have EColumn as children', () => {
		const { container } = render(Section);
		container.querySelector('mj-section')?.childNodes.forEach((child) => {
			expect(child.nodeName).toEqual('MJ-COLUMN');
		});
	});

	it(`should haven't ESection as children`, () => {
		const { container } = render(Section);
		container.querySelector('mj-section')?.childNodes.forEach((child) => {
			expect(child.nodeName).not.toEqual('MJ-SECTION');
		});
	});

	it('should have background-color attribute', () => {
		const { container } = render(Section);
		expect(
			container.querySelector('mj-section')?.hasAttribute('background-color'),
		).toBeTruthy();
	});

	it('should have #ffffff as background-color attribute', () => {
		const { container } = render(Section);
		expect(
			container.querySelector('mj-section')?.getAttribute('background-color'),
		).toStrictEqual('#ffffff');
	});

	it('renders correctly', () => {
		expect(renderer.create(Section).toJSON()).toMatchSnapshot();
	});
});
