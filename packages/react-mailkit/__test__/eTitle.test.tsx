import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ETitle } from '../src/eTitle';

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(<ETitle>Hello Fastmail!</ETitle>);
		expect(container).not.toBeUndefined();
	});

	it('should render ETitle', () => {
		const { container } = render(<ETitle>Hello Fastmail!</ETitle>);
		expect(container.querySelector('mj-title')).toBeInTheDocument();
	});

	it('should have correct content', () => {
		const { container } = render(<ETitle>Hello Fastmail!</ETitle>);
		expect(container.querySelector('mj-title')).toHaveTextContent(
			'Hello Fastmail!',
		);
	});

	it('renders correctly', () => {
		expect(
			renderer.create(<ETitle>Hello Fastmail!</ETitle>).toJSON(),
		).toMatchSnapshot();
	});
});
