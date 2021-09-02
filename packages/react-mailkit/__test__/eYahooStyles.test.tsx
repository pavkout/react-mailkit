import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EYahooStyles } from '../src/eYahooStyles';

const testStyle = `@media screen yahoo { .blue-text div { color: blue !important; }}`;

const Style = <EYahooStyles>{testStyle}</EYahooStyles>;

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Style);
		expect(container).not.toBeUndefined();
	});

	it('should render EStyle', () => {
		const { container } = render(Style);
		expect(container.querySelector('mj-style')).toBeInTheDocument();
	});

	it('should have correct content', () => {
		const { container } = render(Style);
		expect(container.querySelector('mj-style')).toHaveTextContent(testStyle);
	});

	it('renders correctly', () => {
		expect(renderer.create(Style).toJSON()).toMatchSnapshot();
	});
});
