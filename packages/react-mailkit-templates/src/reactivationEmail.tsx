import React, { FC } from 'react';

import {
  EMail,
  EHead,
  EStyle,
  EClass,
  EAttributes,
  EAll,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  useEmail
} from 'react-mailkit';

const reactivationEmail = (
  <EMail>
    <EHead>
      <EAttributes>
        <EAll padding='0px'></EAll>
        <EClass
          color='#000000'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
          fontSize='11px'
          name='preheader'
          padding='0px'
        ></EClass>
      </EAttributes>
      <EStyle
        inline='inline'
        style={`a { text-decoration: none; color: inherit; }`}
      />
    </EHead>
    <EBody backgroundColor='#e0f2ff'>
      <ESection backgroundColor='#2a5cab' padding='10px 0'>
        <EColumn width='33%'>
          <EImage
            alt='logo'
            padding='10px 0'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qg.png'
            width='150px'
          ></EImage>
        </EColumn>
        <EColumn width='66%'>
          <EText
            align='left'
            color='#ffffff'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='18px 0px'
          >
            the only way to travel
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' paddingTop='20px'>
        <EColumn width='100%'>
          <EImage
            alt='tickets'
            padding='10px 25px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qh.png'
            width='192px'
          ></EImage>
          <EText
            align='center'
            color='#FAB701'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='25px'
            padding='10px 25px'
          >
            <strong>
              Hey {`{{ FirstName }}`}
              <br />
              <br />
              It&apos;s been a long time since you last traveled with us.
            </strong>
          </EText>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='18px'
            padding='10px 30px'
          >
            <strong>
              Have a look at some of the top destinations people are booking
              right now!
            </strong>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' padding='20px 0'>
        <EColumn>
          <EImage
            alt='New York'
            padding='0 25px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qy.png'
            width='184px'
          ></EImage>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='20px 25px'
          >
            <strong>New York</strong> <br />
            <p style={{ fontSize: '15px', color: '#000000' }}>$399&#xA0;</p>
          </EText>
        </EColumn>
        <EColumn>
          <EImage
            alt='London'
            padding='0 25px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qr.png'
            width='184px'
          ></EImage>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='20px 25px'
          >
            <strong>London</strong> <br />
            <p style={{ fontSize: '15px', color: '#000000' }}>$399&#xA0;</p>
          </EText>
        </EColumn>
        <EColumn>
          <EImage
            alt='Berlin'
            padding='0 25px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qv.png'
            width='184px'
          ></EImage>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='20px 25px'
          >
            <strong>Berlin</strong> <br />
            <p style={{ fontSize: '15px', color: '#000000' }}>$399&#xA0;</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FAB700' padding='10px'>
        <EColumn verticalAlign='top' width='100%'>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='10px 25px'
          >
            Best, <br />
            <br /> {`The {{Company}} Team`}
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const reactivationEmailMarkup = `
  <EMail>
    <EHead>
      <EAttributes>
        <EAll padding='0px'></EAll>
        <EClass
          color='#000000'
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
          fontSize='11px'
          name='preheader'
          padding='0px'
        ></EClass>
      </EAttributes>
      <EStyle
        inline='inline'
        style={'a { text-decoration: none; color: inherit; }'}
      />
    </EHead>
    <EBody backgroundColor='#e0f2ff'>
      <ESection backgroundColor='#2a5cab' padding='10px 0'>
        <EColumn width='33%'>
          <EImage
            alt='logo'
            padding='10px 0'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qg.png'
            width='150px'
          ></EImage>
        </EColumn>
        <EColumn width='66%'>
          <EText
            align='left'
            color='#ffffff'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='18px 0px'
          >
            the only way to travel
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' paddingTop='20px'>
        <EColumn width='100%'>
          <EImage
            alt='tickets'
            padding='10px 25px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qh.png'
            width='192px'
          ></EImage>
          <EText
            align='center'
            color='#FAB701'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='25px'
            padding='10px 25px'
          >
            <strong>
              Hey {'{{FirstName}}'}
              <br />
              <br />
              It&apos;s been a long time since you last traveled with us.
            </strong>
          </EText>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='18px'
            padding='10px 30px'
          >
            <strong>
              Have a look at some of the top destinations people are booking
              right now!
            </strong>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' padding='20px 0'>
        <EColumn>
          <EImage
            alt='New York'
            padding='0 25px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qy.png'
            width='184px'
          ></EImage>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='20px 25px'
          >
            <strong>New York</strong> <br />
            <p style={{ fontSize: '15px', color: '#000000' }}>$399&#xA0;</p>
          </EText>
        </EColumn>
        <EColumn>
          <EImage
            alt='London'
            padding='0 25px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qr.png'
            width='184px'
          ></EImage>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='20px 25px'
          >
            <strong>London</strong> <br />
            <p style={{ fontSize: '15px', color: '#000000' }}>$399&#xA0;</p>
          </EText>
        </EColumn>
        <EColumn>
          <EImage
            alt='Berlin'
            padding='0 25px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qv.png'
            width='184px'
          ></EImage>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='20px 25px'
          >
            <strong>Berlin</strong> <br />
            <p style={{ fontSize: '15px', color: '#000000' }}>$399&#xA0;</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#FAB700' padding='10px'>
        <EColumn verticalAlign='top' width='100%'>
          <EText
            align='center'
            color='#EC652D'
            fontFamily='Lato, Helvetica, Arial, sans-serif'
            fontSize='20px'
            padding='10px 25px'
          >
            Best, <br />
            <br /> The {'{{Company}}'} Team
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
`;

const ReactivationEmail: FC<any> = () => {
  const { html } = useEmail(reactivationEmail, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ReactivationEmail;
