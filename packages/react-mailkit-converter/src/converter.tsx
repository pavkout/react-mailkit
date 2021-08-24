import React from 'react';
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { foreground, red, lightGrey } from './colors';
// import { reactLiveHome } from './theme';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
// import { CodeEditorEditable } from 'react-code-editor-editable';
// import 'highlight.js/styles/nord.css';
import mjml2fastmail from '@react-mailkit/cli';
import { split as SplitEditor } from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-language_tools';
// const LiveWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: stretch;
//   align-items: stretch;
//   @media (max-width: 600px) {
//     flex-direction: column;
//   }
// `;

// const StyledEditor = styled.div`
//   box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
//   box-sizing: border-box;
//   background: var(--white);
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   color: white;
//   width: 485px;
//   height: 600px;

//   background: #1d1f21;
//   box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
//   border-radius: 5px;
//   padding: 1.2rem;
//   overflow: auto;

//   * > textarea:focus {
//     outline: none;
//   }
// `;

// const ActionButtonsContainer = styled.div`
//   padding-bottom: 1rem;
//   display: grid;
//   grid-template-columns: repeat(3, min-content);
//   grid-column-gap: 8px;
// `;

// const ComponentButtons = styled.span`
//   content: "";
//   height: 12px;
//   width: 12px;
//   border-radius: 100%;
//   display: inline-block;
// `;

// const RedButton = styled(ComponentButtons)`
//   background-color: #f85955;
//   border: 1px solid #d74246;
// `;

// const YellowButton = styled(ComponentButtons)`
//   background-color: #fbbe3f;
//   border: 1px solid #d7a32d;
// `;

// const GreenButton = styled(ComponentButtons)`
//   background-color: #45cc4b;
//   border: 1px solid #40ad36;
// `;

// const column = css`
//   flex-basis: 45%;
//   width: 45%;
//   max-width: 45%;
//   @media (max-width: 600px) {
//     flex-basis: auto;
//     width: 100%;
//     max-width: 100%;
//   }
// `;

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

// const StyledCodeEditorEditable = styled(CodeEditorEditable)`
//   borderTopLeftRadius: 10px;
//   borderBottomLeftRadius: 10px;

//   @media (max-width: 600px) {
//     borderRadius: 10px;
//   }
// `;

const StyledPreview = styled(LivePreview)`
  position: relative;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  height: 800px;
  width: 600px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledError = styled(LiveError)`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
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

type Props = {
  noInline?: boolean;
  code: string;
  scope?: object;
  onChange?: (value: string) => void;
};

const LiveEdit = ({ noInline = false, code, scope, onChange }: Props) => {
  return (
    <TryLiveContainer>
      <StyledTryItLiveLabel>Mjml</StyledTryItLiveLabel>
      <StyledProvider code={code} noInline={noInline} scope={scope}>
        <SplitEditor
          mode='html'
          theme='twilight'
          splits={2}
          orientation='beside'
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          onChange={value => onChange(value[0])}
          value={[code, code === '' ? code : mjml2fastmail(code)]}
          name='converter'
          editorProps={{ $blockScrolling: true }}
          style={{
            width: '100%',
            height: '800px',
            borderRadius: '10px'
          }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2
            // readOnly: true
          }}
        />
      </StyledProvider>
      <StyledPreviewLabel>Fast Mail</StyledPreviewLabel>

      {/* <StyledProvider code={code} noInline={noInline} scope={scope}>
        <AceEditor
          placeholder="See the magic"
          mode="html"
          theme="twilight"
          name="blah2"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={code === '' ? code : mjml2fastmail(code)}
          style={{
            width: '600px',
            height: '800px',
            borderRadius: "10px 0 0 10px"
          }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
            readOnly: true
          }} />
        <StyledError />
      </StyledProvider> */}
    </TryLiveContainer>
  );
};

export default LiveEdit;
