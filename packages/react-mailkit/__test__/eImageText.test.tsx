import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EImageText } from '../src/EImageText';

const LeftImage = (
	<EImageText
		imagePosition="left"
		imageSrc="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg"
		sectionProps={{
			backgroundColor: '#56abe8',
		}}
		textProps={{
			color: '#ffffff',
			fontSize: 16,
		}}
		imageProps={{
			borderRadius: 50,
		}}
		text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.`}
	/>
);

const LeftText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;

const RightImage = (
	<EImageText
		imagePosition="right"
		imageSrc="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg"
		sectionProps={{ backgroundColor: '#cfe856' }}
		text={LeftText}
	/>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(LeftImage);
		expect(container).not.toBeUndefined();
	});

	it('should render ESection', () => {
		const { container } = render(LeftImage);
		expect(container.querySelector('mj-section')).toBeInTheDocument();
	});

	it('should have two children', () => {
		const { container } = render(LeftImage);
		expect(
			container.querySelector('mj-section')?.childNodes.length,
		).toStrictEqual(2);
	});

	it('should render EText', () => {
		const { container } = render(LeftImage);
		expect(container.querySelector('mj-text')).toBeInTheDocument();
	});

	it('should render EImage', () => {
		const { container } = render(LeftImage);
		expect(container.querySelector('mj-image')).toBeInTheDocument();
	});

	it('should have as first child an EImage', () => {
		const { container } = render(LeftImage);
		expect(
			container.querySelector('mj-section')?.childNodes[0].childNodes[0]
				.nodeName,
		).toStrictEqual('MJ-IMAGE');
	});

	it('should have as second child an EText', () => {
		const { container } = render(LeftImage);
		expect(
			container.querySelector('mj-section')?.childNodes[1].childNodes[0]
				.nodeName,
		).toStrictEqual('MJ-TEXT');
	});

	it('should have two children', () => {
		const { container } = render(RightImage);
		expect(
			container.querySelector('mj-section')?.childNodes.length,
		).toStrictEqual(2);
	});

	it('should EText have correct content in the RightImage', () => {
		const { container } = render(RightImage);
		expect(container.querySelector('mj-text')).toHaveTextContent(LeftText);
	});

	it('should EImage have attribute src', () => {
		const { container } = render(RightImage);
		expect(
			container.querySelector('mj-image')?.hasAttribute('src'),
		).toBeTruthy();
	});

	it('should EImage have correct imageSrc attribute', () => {
		const { container } = render(RightImage);
		expect(
			container.querySelector('mj-image')?.getAttribute('src'),
		).toStrictEqual(
			'https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg',
		);
	});

	it('should have as first child an EText', () => {
		const { container } = render(RightImage);
		expect(
			container.querySelector('mj-section')?.childNodes[0].childNodes[0]
				.nodeName,
		).toStrictEqual('MJ-TEXT');
	});

	it('should have as second child an EImage', () => {
		const { container } = render(RightImage);
		expect(
			container.querySelector('mj-section')?.childNodes[1].childNodes[0]
				.nodeName,
		).toStrictEqual('MJ-IMAGE');
	});

	it('renders correctly', () => {
		expect(renderer.create(RightImage).toJSON()).toMatchSnapshot();
	});
});
