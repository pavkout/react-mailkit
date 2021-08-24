import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EBarcode } from '../src/eBarcode';

const Barcode = <EBarcode value="1234567890" includetext={true} />;

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Barcode);
		expect(container).not.toBeUndefined();
	});

	it('should render EImage', () => {
		const { container } = render(Barcode);
		expect(container.querySelector('mj-image')).toBeInTheDocument();
	});

	it('should have height attribute', () => {
		const { container } = render(Barcode);
		expect(
			container.querySelector('mj-image')?.hasAttribute('height'),
		).toBeTruthy();
	});

	it('should have 150px as height attribute', () => {
		const { container } = render(Barcode);
		expect(
			container.querySelector('mj-image')?.getAttribute('height'),
		).toStrictEqual('150px');
	});

	it('should have src attribute', () => {
		const { container } = render(Barcode);
		expect(
			container.querySelector('mj-image')?.hasAttribute('src'),
		).toBeTruthy();
	});

	it('should have correct src attribute', () => {
		const { container } = render(Barcode);
		expect(
			container.querySelector('mj-image')?.getAttribute('src'),
		).toStrictEqual(
			'http://bwipjs-api.metafloor.com/?bcid=code128&text=1234567890&includetext',
		);
	});

	it('renders correctly', () => {
		expect(renderer.create(Barcode).toJSON()).toMatchSnapshot();
	});
});
