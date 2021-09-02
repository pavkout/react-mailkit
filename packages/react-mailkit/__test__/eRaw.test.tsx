import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ERaw } from '../src/eRaw';

const Raw = <ERaw>{`<!-- Your content goes here -->`}</ERaw>;

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Raw);
		expect(container).not.toBeUndefined();
	});

	it('should render ERaw', () => {
		const { container } = render(Raw);
		expect(container.querySelector('mj-raw')).toBeInTheDocument();
	});

	it('should have one child', () => {
		const { container } = render(Raw);
		expect(container.querySelector('mj-raw')?.childNodes.length).toStrictEqual(
			1,
		);
	});

	it('should have content', () => {
		const { container } = render(Raw);
		expect(container.querySelector('mj-raw')).toHaveTextContent(
			'<!-- Your content goes here -->',
		);
	});

	it('renders correctly', () => {
		expect(renderer.create(Raw).toJSON()).toMatchSnapshot();
	});
});
