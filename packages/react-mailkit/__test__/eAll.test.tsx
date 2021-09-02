import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EAll } from '../src/eAll';

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(<EAll fontFamily="Arial" />);
		expect(container).not.toBeUndefined();
	});

	it('should render mj-all', () => {
		const { container } = render(<EAll fontFamily="Arial" />);
		expect(container.querySelector('mj-all')).toBeInTheDocument();
	});

	it('should have font-family attribute', () => {
		const { container } = render(<EAll fontFamily="Arial" />);
		expect(
			container.querySelector('mj-all')?.hasAttribute('font-family'),
		).toBeTruthy();
	});

	it('should have Arial as font-family attribute', () => {
		const { container } = render(<EAll fontFamily="Arial" />);
		expect(
			container.querySelector('mj-all')?.getAttribute('font-family'),
		).toStrictEqual('Arial');
	});

	it('renders correctly', () => {
		expect(
			renderer.create(<EAll fontFamily="Arial" />).toJSON(),
		).toMatchSnapshot();
	});
});
