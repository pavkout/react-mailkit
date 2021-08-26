import React, { FC } from 'react';

import {
  EMail,
  EHead,
  EClass,
  EStyle,
  EAttributes,
  EAll,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EButton,
  useEmail
} from '@react-mailkit/core';

const email = (
  <EMail>
    <EHead>
      <EAttributes>
        <EAll padding='0px'></EAll>
        <EText
          fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
          fontSize='13px'
          padding='0 25px'
        ></EText>
        <ESection backgroundColor='#ffffff' />
        <EClass color='#000000' fontSize='11px' name='preheader'></EClass>
      </EAttributes>
      <EStyle
        inline='inline'
        style={`a { text-decoration: none!important; color: inherit!important; }`}
      />
    </EHead>
    <EBody backgroundColor='#bedae6'>
      <ESection>
        <EColumn width='100%'>
          <EImage
            alt='header image'
            padding='0px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1q9.png'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingBottom='20px' paddingTop='10px'>
        <EColumn>
          <EText
            align='center'
            color='#512d0b'
            fontSize='20px'
            padding='10px 25px'
          >
            <strong>Hey {`{{FirstName}}`}!</strong>
          </EText>
          <EText align='center' fontFamily='Arial' fontSize='18px'>
            Are you enjoying our weekly newsletter?
            <br /> Then why not share it with your friends?
          </EText>
          <EText
            align='center'
            color='#489BDA'
            fontFamily='Arial, sans-serif'
            fontSize='25px'
            fontWeight='bold'
            lineHeight='35px'
            paddingTop='20px'
          >
            You&apos;ll get a 15% discount <br />
            <span style={{ fontSize: '18px' }}>
              on your next order when a friend uses the code {`{{ReferalCode}}`}
              !
            </span>
          </EText>
          <EButton
            backgroundColor='#8bb420'
            color='#FFFFFF'
            fontFamily='Arial, sans-serif'
            fontSize='16px'
            fontWeight='bold'
            href='https://mjml.io'
            padding='20px 0 0 0'
          >
            Refer a friend now
          </EButton>
          <EText
            align='center'
            color='#000000'
            fontFamily='Arial, sans-serif'
            fontSize='14px'
            paddingTop='40px'
          >
            Best, <br /> {`The {{CompanyName}} Team`}
            <p></p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const ReferralEmail: FC<any> = () => {
  const { html } = useEmail(email, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ReferralEmail;
