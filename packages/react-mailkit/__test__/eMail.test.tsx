import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { EMail } from '../src/eMail';
import { EBody } from '../src/eBody';
import { ESection } from '../src/eSection';
import { EColumn } from '../src/eColumn';
import { EText } from '../src/eText';

const Email = (
	<EMail>
		<EBody>
			<ESection>
				<EColumn>
					<EText>My Email</EText>
				</EColumn>
			</ESection>
		</EBody>
	</EMail>
);

describe('should be correct output', () => {
	it('should not be undefined', () => {
		const { container } = render(Email);
		expect(container).not.toBeUndefined();
	});

	it('should render Email', () => {
		const { container } = render(Email);
		expect(container.querySelector('mjml')).toBeInTheDocument();
	});

	it('should have one child', () => {
		const { container } = render(Email);
		expect(container.querySelector('mjml')?.childNodes.length).toStrictEqual(1);
	});

	it('should have EBody child as root', () => {
		const { container } = render(Email);
		expect(
			container.querySelector('mjml')?.childNodes[0].nodeName,
		).toStrictEqual('MJ-BODY');
	});

	it(`should haven't EText as root child`, () => {
		const { container } = render(Email);
		expect(
			container.querySelector('mjml')?.childNodes[0].nodeName,
		).not.toStrictEqual('MJ-TEXT');
	});

	it('renders correctly', () => {
		expect(renderer.create(Email).toJSON()).toMatchSnapshot();
	});
});
