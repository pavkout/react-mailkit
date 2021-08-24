import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EAppStore } from '../src/eAppStore';

const Ios = (
	<EAppStore
		url="https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg"
		platform="ios"
	/>
);

const Android = (
	<EAppStore
		url="https://raw.github.com/yjb94/google-play-badge-svg/master/img/en_get.svg?sanitize=true"
		platform="android"
	/>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Ios);
		expect(container).not.toBeUndefined();
	});

	it('should render EAppStore', () => {
		const { container } = render(Android);
		expect(container.querySelector('mj-image')).toBeInTheDocument();
	});

	it('should EAppStore have attribute src', () => {
		const { container } = render(Ios);
		expect(
			container.querySelector('mj-image')?.hasAttribute('src'),
		).toBeTruthy();
	});

	it('should have correct src attribute', () => {
		const { container } = render(Ios);
		expect(
			container.querySelector('mj-image')?.getAttribute('src'),
		).toStrictEqual(
			'https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg',
		);
	});

	it('should EAppStore have attribute title', () => {
		const { container } = render(Ios);
		expect(
			container.querySelector('mj-image')?.hasAttribute('title'),
		).toBeTruthy();
	});

	it('should have Apple Store Button as title attribute', () => {
		const { container } = render(Ios);
		expect(
			container.querySelector('mj-image')?.getAttribute('title'),
		).toStrictEqual('Apple Store Button');
	});

	it('should EAppStore have attribute src', () => {
		const { container } = render(Android);
		expect(
			container.querySelector('mj-image')?.hasAttribute('src'),
		).toBeTruthy();
	});

	it('should have correct src attribute', () => {
		const { container } = render(Android);
		expect(
			container.querySelector('mj-image')?.getAttribute('src'),
		).toStrictEqual(
			'https://raw.github.com/yjb94/google-play-badge-svg/master/img/en_get.svg?sanitize=true',
		);
	});

	it('should EAppStore have attribute title', () => {
		const { container } = render(Android);
		expect(
			container.querySelector('mj-image')?.hasAttribute('title'),
		).toBeTruthy();
	});

	it('should have Android Store Button as title attribute', () => {
		const { container } = render(Android);
		expect(
			container.querySelector('mj-image')?.getAttribute('title'),
		).toStrictEqual('Android Store Button');
	});

	it('renders correctly', () => {
		expect(renderer.create(Android).toJSON()).toMatchSnapshot();
	});
});
