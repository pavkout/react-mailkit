import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EDivider } from '../src/eDivider';

const Divider = (
	<EDivider borderColor="red" borderStyle="solid" borderWidth={1} width={500} />
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Divider);
		expect(container).not.toBeUndefined();
	});

	it('should render EDivider', () => {
		const { container } = render(Divider);
		expect(container.querySelector('mj-divider')).toBeInTheDocument();
	});

	it('should have width attribute', () => {
		const { container } = render(Divider);
		expect(
			container.querySelector('mj-divider')?.hasAttribute('width'),
		).toBeTruthy();
	});

	it('should have 500px as width attribute', () => {
		const { container } = render(Divider);
		expect(
			container.querySelector('mj-divider')?.getAttribute('width'),
		).toStrictEqual('500px');
	});

	it('renders correctly', () => {
		expect(renderer.create(Divider).toJSON()).toMatchSnapshot();
	});
});
