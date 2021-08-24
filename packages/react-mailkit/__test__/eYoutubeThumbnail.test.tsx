import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EYoutubeThumbnail } from '../src/eYoutubeThumbnail';

const YoutubeThumbnail = (
	<EYoutubeThumbnail id="smGTQrwvOc8" imageQuality="maxres" />
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(YoutubeThumbnail);
		expect(container).not.toBeUndefined();
	});

	it('should render EImage', () => {
		const { container } = render(YoutubeThumbnail);
		expect(container.querySelector('mj-image')).toBeInTheDocument();
	});

	it('should have border-radius attribute', () => {
		const { container } = render(YoutubeThumbnail);
		expect(
			container.querySelector('mj-image')?.hasAttribute('border-radius'),
		).toBeTruthy();
	});

	it('should have 0px as border-radius attribute', () => {
		const { container } = render(YoutubeThumbnail);
		expect(
			container.querySelector('mj-image')?.getAttribute('border-radius'),
		).toStrictEqual('0px');
	});

	it('should have src attribute', () => {
		const { container } = render(YoutubeThumbnail);
		expect(
			container.querySelector('mj-image')?.hasAttribute('src'),
		).toBeTruthy();
	});

	it('should have correct src attribute', () => {
		const { container } = render(YoutubeThumbnail);
		expect(
			container.querySelector('mj-image')?.getAttribute('src'),
		).toStrictEqual('https://img.youtube.com/vi/smGTQrwvOc8/maxresdefault.jpg');
	});

	it('renders correctly', () => {
		expect(renderer.create(YoutubeThumbnail).toJSON()).toMatchSnapshot();
	});
});
