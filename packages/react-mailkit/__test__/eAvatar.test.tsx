import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EAvatar } from '../src/eAvatar';

const Avatar = (
	<EAvatar
		src="https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024"
		shape="rectangular"
		size={40}
	/>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Avatar);
		expect(container).not.toBeUndefined();
	});

	it('should render EImage', () => {
		const { container } = render(Avatar);
		expect(container.querySelector('mj-image')).toBeInTheDocument();
	});

	it('should have border-radius attribute', () => {
		const { container } = render(Avatar);
		expect(
			container.querySelector('mj-image')?.hasAttribute('border-radius'),
		).toBeTruthy();
	});

	it('should have 5.2px as border-radius attribute', () => {
		const { container } = render(Avatar);
		expect(
			container.querySelector('mj-image')?.getAttribute('border-radius'),
		).toStrictEqual('5.2px');
	});

	it('should have src attribute', () => {
		const { container } = render(Avatar);
		expect(
			container.querySelector('mj-image')?.hasAttribute('src'),
		).toBeTruthy();
	});

	it('should have correct src attribute', () => {
		const { container } = render(Avatar);
		expect(
			container.querySelector('mj-image')?.getAttribute('src'),
		).toStrictEqual(
			'https://www.ethode.com/contentAsset/image/84e3be24-58bc-499c-9d50-f8088158f11a/image/filter/Resize/resize_w/1024',
		);
	});

	it('renders correctly', () => {
		expect(renderer.create(Avatar).toJSON()).toMatchSnapshot();
	});
});
