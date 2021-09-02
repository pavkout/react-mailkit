import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ETracking } from '../src/eTracking';

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(<ETracking url="www.google.com" />);
		expect(container).not.toBeUndefined();
	});

	it('should render EImage', () => {
		const { container } = render(<ETracking url="www.google.com" />);
		expect(container.querySelector('mj-image')).toBeInTheDocument();
	});

	it('should have width attribute', () => {
		const { container } = render(<ETracking url="www.google.com" />);
		expect(
			container.querySelector('mj-image')?.hasAttribute('width'),
		).toBeTruthy();
	});

	it('should have 1px as width attribute', () => {
		const { container } = render(<ETracking url="www.google.com" />);
		expect(
			container.querySelector('mj-image')?.getAttribute('width'),
		).toStrictEqual('1px');
	});

	it('should have src attribute', () => {
		const { container } = render(<ETracking url="www.google.com" />);
		expect(
			container.querySelector('mj-image')?.hasAttribute('src'),
		).toBeTruthy();
	});

	it('should have www.google.com src attribute', () => {
		const { container } = render(<ETracking url="www.google.com" />);
		expect(
			container.querySelector('mj-image')?.getAttribute('src'),
		).toStrictEqual('www.google.com');
	});

	it('renders correctly', () => {
		expect(
			renderer.create(<ETracking url="www.google.com" />).toJSON(),
		).toMatchSnapshot();
	});
});
