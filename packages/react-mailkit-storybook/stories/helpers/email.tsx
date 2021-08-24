import React, { FC, ReactElement } from 'react';

import { EMail, EBody, ESection, ISectionProps, EColumn, IColumnProps } from '@react-mailkit/core';

export type EmailProps = {
	sectionProps?: ISectionProps;
	columnProps?: IColumnProps;
	children: ReactElement;
};

export const Email: FC<EmailProps> = ({
	sectionProps,
	columnProps,
	children,
}) => (
	<EMail>
		<EBody width={600}>
			<ESection
				{...sectionProps}
				backgroundColor="#ffffff"
				borderRadius={4}
				padding="20px">
				<EColumn width={600} {...columnProps}>
					{children}
				</EColumn>
			</ESection>
		</EBody>
	</EMail>
);
