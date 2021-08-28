import React, { FC } from 'react';

import {
  EMail,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  useEmail
} from '@react-mailkit/core';

const happyNewYear = (
  <EMail>
    <EBody backgroundColor='#F4F4F4'>
      <ESection
        backgroundColor='#C1272D'
        backgroundRepeat='repeat'
        padding='20px 0'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            src='http://gkq4.mjt.lu/img/gkq4/b/18rxz/1h3k4.png'
            width='128px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        padding='20px 0'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            src='http://gkq4.mjt.lu/img/gkq4/b/18rxz/1h3s5.gif'
            width='600px'
          ></EImage>
          <EImage
            align='center'
            alt='Happy New Year!'
            containerBackgroundColor='#ffffff'
            padding='10px 25px'
            src='http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlvp.png'
            width='399px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        backgroundSize='auto'
        padding='20px 0px 20px 0px'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='center'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='14px'
            lineHeight='28px'
            padding='0px 25px 0px 25px'
          >
            New dreams, new hopes, new experiences and new joys, we wish you all
            the best for this New Year to come in 2018!
          </EText>
          <EImage
            align='center'
            alt='Best wishes from all the Clothes Team!'
            padding='10px 25px'
            src='http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlv8.png'
            width='142px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#C1272D'
        backgroundRepeat='repeat'
        padding='20px 0'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='center'
            color='#ffffff'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
          >
            Simply created&nbsp;on&nbsp;
            <a style={{ color: '#ffffff' }} href='http://www.mailjet.com'>
              <b>Mailjet Passport</b>
            </a>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='repeat'
        backgroundSize='auto'
        padding='20px 0px 20px 0px'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='center'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='11px'
            lineHeight='22px'
            padding='0px 20px'
          >
            [[DELIVERY_INFO]]
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const happyNewYearMarkup = `
  <EMail>
    <EBody backgroundColor='#F4F4F4'>
      <ESection
        backgroundColor='#C1272D'
        backgroundRepeat='repeat'
        padding='20px 0'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            src='http://gkq4.mjt.lu/img/gkq4/b/18rxz/1h3k4.png'
            width='128px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        padding='20px 0'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            src='http://gkq4.mjt.lu/img/gkq4/b/18rxz/1h3s5.gif'
            width='600px'
          ></EImage>
          <EImage
            align='center'
            alt='Happy New Year!'
            containerBackgroundColor='#ffffff'
            padding='10px 25px'
            src='http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlvp.png'
            width='399px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        backgroundSize='auto'
        padding='20px 0px 20px 0px'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='center'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='14px'
            lineHeight='28px'
            padding='0px 25px 0px 25px'
          >
            New dreams, new hopes, new experiences and new joys, we wish you all
            the best for this New Year to come in 2018!
          </EText>
          <EImage
            align='center'
            alt='Best wishes from all the Clothes Team!'
            padding='10px 25px'
            src='http://gkq4.mjt.lu/img/gkq4/b/18rxz/1hlv8.png'
            width='142px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#C1272D'
        backgroundRepeat='repeat'
        padding='20px 0'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='center'
            color='#ffffff'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
          >
            Simply created&nbsp;on&nbsp;
            <a style={{ color: '#ffffff' }} href='http://www.mailjet.com'>
              <b>Mailjet Passport</b>
            </a>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='repeat'
        backgroundSize='auto'
        padding='20px 0px 20px 0px'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='center'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='11px'
            lineHeight='22px'
            padding='0px 20px'
          >
            [[DELIVERY_INFO]]
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
`;

const HappyNewYear: FC<any> = () => {
  const { html } = useEmail(happyNewYear, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HappyNewYear;
