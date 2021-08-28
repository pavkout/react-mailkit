import React, { FC } from 'react';

import {
  EMail,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EButton,
  useEmail
} from '@react-mailkit/core';

export const welcomeEmailMarkup = (
  <EMail>
    <EBody backgroundColor='#ffffff'>
      <ESection backgroundColor='#ffffff' paddingBottom='0px' paddingTop='0'>
        <EColumn verticalAlign='top' width='100%'>
          <EImage
            align='center'
            alt=''
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1rw.png'
            width='600px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#009FE3' paddingBottom='0px' paddingTop='0'>
        <EColumn verticalAlign='top' width='100%'>
          <EText
            align='left'
            color='#ffffff'
            fontFamily='open Sans Helvetica, Arial, sans-serif'
            fontSize='45px'
            fontWeight='bold'
            paddingBottom='30px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='50px'
          >
            Welcome aboard
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#009fe3'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn verticalAlign='middle' width='100%'>
          <EText
            align='left'
            color='#ffffff'
            fontFamily='open Sans Helvetica, Arial, sans-serif'
            fontSize='22px'
            paddingLeft='25px'
            paddingRight='25px'
          >
            <span style={{ color: '#FEEB35' }}>Dear [[FirstName]]</span>
            <br />
            <br /> Welcome to [[CompanyName]].
          </EText>
          <EText
            align='left'
            color='#ffffff'
            fontFamily='open Sans Helvetica, Arial, sans-serif'
            fontSize='15px'
            paddingLeft='25px'
            paddingRight='25px'
          >
            We&apos;re really excited you&apos;ve decided to give us a try. In
            case you have any questions, feel free to reach out to us at
            [[ContactEmail]]. You can login to your account with your username
            [[UserName]]
          </EText>
          <EButton
            align='left'
            backgroundColor='#ffffff'
            borderRadius='10px'
            color='#1AA0E1'
            fontFamily='open Sans Helvetica, Arial, sans-serif'
            fontSize='22px'
            fontWeight='bold'
          >
            Login
          </EButton>
          <EText
            align='left'
            color='#ffffff'
            fontFamily='open Sans Helvetica, Arial, sans-serif'
            fontSize='15px'
            paddingLeft='25px'
            paddingRight='25px'
          >
            Thanks, <br /> The [[CompanyName]] Team
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

const WelcomeEmail: FC<any> = () => {
  const { html } = useEmail(welcomeEmailMarkup, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default WelcomeEmail;
