import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EBreakpoint } from '../src/eBreakpoint';

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(<EBreakpoint width={320} />);
		expect(container).not.toBeUndefined();
	});

	it('should render mj-breakpoint', () => {
		const { container } = render(<EBreakpoint width={320} />);
		expect(container.querySelector('mj-breakpoint')).toBeInTheDocument();
	});

	it('should have width attribute', () => {
		const { container } = render(<EBreakpoint width={320} />);
		expect(
			container.querySelector('mj-breakpoint')?.hasAttribute('width'),
		).toBeTruthy();
	});

	it('should have 320px as width attribute', () => {
		const { container } = render(<EBreakpoint width={320} />);
		expect(
			container.querySelector('mj-breakpoint')?.getAttribute('width'),
		).toStrictEqual('320px');
	});

	it('renders correctly', () => {
		expect(
			renderer.create(<EBreakpoint width={320} />).toJSON(),
		).toMatchSnapshot();
	});
});
