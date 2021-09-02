import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ESocialPost } from '../src/eSocialPost';

const SocialPost = (
	<ESocialPost
		name="facebook"
		imageSrc={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPdpXj3y0aAwHAHICOaU-fwqbahRFDWxL7Q&usqp=CAU`}
		title="My Social Media Post Title"
		text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
	/>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(SocialPost);
		expect(container).not.toBeUndefined();
	});

	it('should render EWrapper', () => {
		const { container } = render(SocialPost);
		expect(container.querySelector('mj-wrapper')).toBeInTheDocument();
	});

	it('should have two children', () => {
		const { container } = render(SocialPost);
		expect(
			container.querySelector('mj-wrapper')?.childNodes.length,
		).toStrictEqual(2);
	});

	it('should all children be ESection', () => {
		const { container } = render(SocialPost);
		container.querySelector('mj-wrapper')?.childNodes.forEach((child) => {
			expect(child.nodeName).toEqual('MJ-SECTION');
		});
	});

	it('should have as second child an EImage inside EColumn', () => {
		const { container } = render(SocialPost);
		expect(
			container.querySelector('mj-wrapper')?.childNodes[0].childNodes[0]
				.childNodes[0].nodeName,
		).toStrictEqual('MJ-IMAGE');
	});

	it('should have Title', () => {
		const { container } = render(SocialPost);
		expect(
			container.querySelector('mj-wrapper')?.childNodes[1].childNodes[0]
				.childNodes[0].nodeName,
		).toStrictEqual('MJ-TEXT');
	});

	it('should have Content text', () => {
		const { container } = render(SocialPost);
		expect(
			container.querySelector('mj-wrapper')?.childNodes[1].childNodes[0]
				.childNodes[1].nodeName,
		).toStrictEqual('MJ-TEXT');
	});

	it('should have ESocial', () => {
		const { container } = render(SocialPost);
		expect(
			container.querySelector('mj-wrapper')?.childNodes[1].childNodes[0]
				.childNodes[2].nodeName,
		).toStrictEqual('MJ-SOCIAL');
	});

	it('should have name attribute into ESocialElement', () => {
		const { container } = render(SocialPost);
		expect(
			container.querySelector('mj-wrapper')?.childNodes[1].childNodes[0]
				.childNodes[2].childNodes[0],
		).toHaveAttribute('name');
	});

	it('renders correctly', () => {
		expect(renderer.create(SocialPost).toJSON()).toMatchSnapshot();
	});
});
