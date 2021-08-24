import React, { useState } from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const TryLiveContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: -250px;
	width: 1500px;
	position: relative;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const StyledProvider = styled(LiveProvider)`
	border-radius: ${polished.rem(3)};
	box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
	overflow: hidden;
	margin-bottom: ${polished.rem(100)};
`;

const StyledPreviewContainer = styled.div`
	background: rgb(242, 242, 242);
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	overflow: hidden;
	height: 1000px;
	width: 800px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
`;

const StyledPreview = styled(LivePreview)`
	position: relative;
	color: black;
	overflow-y: scroll;
	flex: 1;
	width: 500px;
`;

const StyledError = styled(LiveError)`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	border-radius: 6px;
	width: 80%;
	padding: ${polished.rem(8)};
	background: #ff5555;
	color: #f8f8f2;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
		rgba(0, 0, 0, 0.22) 0px 15px 12px;
	white-space: pre-wrap;
	text-align: left;
	font-size: 0.9em;
	font-family: 'Source Code Pro', monospace;
`;

const StypedPreviewHeader = styled.div`
	width: 100%;
	min-height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #797979;
	background-color: #262325;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
	transition: box-shadow 0.3s ease-in-out;
`;

const buttonStyle = css`
	width: 70px;
	height: 30px;
	border: none;
	color: #d6ed17ff;
	cursor: pointer;
`;

type IBuuton = {
	isSelected: boolean;
};

const StyledMobileButton = styled.button<IBuuton>`
	${buttonStyle}

	background-color: ${(props) => (props.isSelected ? '#3d3b3e' : '#010201')};
	border-right: 0.5px solid #d6ed17ff;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
`;

const StyledDesktopButton = styled.button<IBuuton>`
	${buttonStyle}

	background-color: ${(props) => (props.isSelected ? '#3d3b3e' : '#010201')};
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
`;

type IPreviewWrapperProps = {
	isMobile?: boolean;
	bodyWidth: string;
	breakpoint: string;
};

const StyledPreviewWrapper = styled.div<IPreviewWrapperProps>`
	width: 100%;
	max-width: ${(props) =>
		props.isMobile ? props.breakpoint : props.bodyWidth};
	height: calc(100% - 70px);
	display: flex;
	justify-content: center;
	padding: 10px 5px;

	transition: max-width 0.5s;
`;

const StyledTryItLiveLabel = styled.span`
	writing-mode: tb-rl;
	transform: rotate(180deg);
	color: #d6ed17ff;
	font-size: 32px;
	font-family: monospace;
	padding-top: 30px;
	padding-left: 6px;
	user-select: none;
`;

const StyledPreviewLabel = styled.span`
	writing-mode: vertical-rl;
	color: #d6ed17ff;
	font-size: 32px;
	font-family: monospace;
	padding-top: 30px;
	padding-left: 6px;
	user-select: none;
`;

type IProps = {
	noInline?: boolean;
	code: string;
	scope?: object;
	onChange?: (value: string) => void;
	validationLevel?: 'soft' | 'strict' | 'skip';
};

const LiveEdit = ({
	noInline = false,
	code,
	scope,
	onChange,
	validationLevel = 'soft',
}: IProps) => {
	const [mode, setMode] = useState('desktop');

	const previewCode = `
		Preview = () => {
			const { html } = useEmail(${code}, {
				validationLevel: '${validationLevel}',
			});

			return <div dangerouslySetInnerHTML={{ __html: html }} />
  	}`.trim();

	return (
		<TryLiveContainer>
			<StyledTryItLiveLabel>Try It Live</StyledTryItLiveLabel>
			<AceEditor
				placeholder="Begin the magic"
				mode="html"
				theme="monokai"
				name="liveEdit"
				onChange={onChange}
				fontSize={14}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				value={code}
				style={{
					width: '700px',
					height: '1000px',
					borderRadius: '10px 0 0 10px',
				}}
				setOptions={{
					enableBasicAutocompletion: true,
					enableLiveAutocompletion: true,
					enableSnippets: true,
					showLineNumbers: true,
					tabSize: 2,
				}}
			/>
			<StyledProvider
				code={previewCode.trim()}
				noInline={noInline}
				scope={scope}>
				<StyledPreviewContainer>
					<StypedPreviewHeader>
						<StyledMobileButton
							isSelected={mode === 'mobile'}
							onClick={() => setMode('mobile')}>
							Mobile
						</StyledMobileButton>
						<StyledDesktopButton
							isSelected={mode === 'desktop'}
							onClick={() => setMode('desktop')}>
							Desktop
						</StyledDesktopButton>
					</StypedPreviewHeader>
					<StyledPreviewWrapper
						isMobile={mode === 'mobile'}
						breakpoint="320px"
						bodyWidth="600px">
						<StyledPreview />
					</StyledPreviewWrapper>
				</StyledPreviewContainer>
				<StyledPreviewLabel>Preview</StyledPreviewLabel>
				<StyledError />
			</StyledProvider>
		</TryLiveContainer>
	);
};

export default LiveEdit;
