import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EPreview } from '../src/ePreview';

const Preview = <EPreview>Hello MJML</EPreview>;

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Preview);
		expect(container).not.toBeUndefined();
	});

	it('should render EPreview', () => {
		const { container } = render(Preview);
		expect(container.querySelector('mj-preview')).toBeInTheDocument();
	});

	it('should have one child', () => {
		const { container } = render(Preview);
		expect(
			container.querySelector('mj-preview')?.childNodes.length,
		).toStrictEqual(1);
	});

	it('should have content', () => {
		const { container } = render(Preview);
		expect(container.querySelector('mj-preview')).toHaveTextContent(
			'Hello MJML',
		);
	});

	it('renders correctly', () => {
		expect(renderer.create(Preview).toJSON()).toMatchSnapshot();
	});
});
