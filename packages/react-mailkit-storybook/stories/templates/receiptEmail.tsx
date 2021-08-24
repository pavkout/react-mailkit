import React, { FC } from 'react';

import {
  EMail,
  EText,
  ESection,
  EBody,
  EColumn,
  EDivider,
  EImage,
  EButton,
  useEmail
} from '@react-mailkit/core';

const email = (
  <EMail>
    <EBody backgroundColor='#fce7b4'>
      <ESection backgroundColor='#fff' paddingBottom='20px' paddingTop='20px'>
        <EColumn width='100%'>
          <EImage
            align='center'
            alt=''
            border='none'
            paddingBottom='10px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='10px'
            src='http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qi.png'
            width='150px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' paddingBottom='0px' paddingTop='0'>
        <EColumn width='100%'>
          <EImage
            align='center'
            alt=''
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src=''
            width='600px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#356cc7' paddingBottom='0px' paddingTop='0'>
        <EColumn width='100%'>
          <EText
            align='center'
            color='#ABCDEA'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            HELLO{' '}
            <p style={{ fontSize: '16px', color: 'white' }}>[[FirstName]]</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#356cc7' paddingBottom='5px' paddingTop='0'>
        <EColumn width='100%'>
          <EDivider
            borderColor='#ffffff'
            borderStyle='solid'
            borderWidth='2px'
            paddingBottom='0px'
            paddingLeft='20px'
            paddingRight='20px'
            paddingTop='0'
          ></EDivider>
          <EText
            align='center'
            color='#FFF'
            fontFamily='Helvetica'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Thank you very much for your purchase.
            </span>
            <br />
            <span style={{ fontSize: '15px' }}>
              Please find the receipt below.
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#568feb'
        paddingBottom='15px'
        paddingTop='15px'
      >
        <EColumn>
          <EText
            align='center'
            color='#FFF'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
            fontSize='15px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='20px'
          >
            <strong>Order Number</strong>
          </EText>
          <EText
            align='center'
            color='#FFF'
            fontFamily='Helvetica'
            fontSize='13px'
            paddingBottom='20px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            [[OrderNumber]]
          </EText>
        </EColumn>
        <EColumn>
          <EText
            align='center'
            color='#FFF'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
            fontSize='15px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='20px'
          >
            <strong>Order Date</strong>
          </EText>
          <EText
            align='center'
            color='#FFF'
            fontFamily='Helvetica'
            fontSize='13px'
            paddingBottom='20px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            [[OrderDate]]
          </EText>
        </EColumn>
        <EColumn>
          <EText
            align='center'
            color='#FFF'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif'
            fontSize='15px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='20px'
          >
            <strong>Total Price</strong>
          </EText>
          <EText
            align='center'
            color='#FFF'
            fontFamily='Helvetica'
            fontSize='13px'
            paddingBottom='20px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            [[TotalPrice]]
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#356CC7'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn width='50%'>
          <EButton
            align='center'
            backgroundColor='#ffae00'
            border='none'
            borderRadius='10px'
            color='#FFF'
            fontFamily='Helvetica'
            fontSize='14px'
            fontWeight='bold'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            Download Receipt
          </EButton>
        </EColumn>
        <EColumn width='50%'>
          <EButton
            align='center'
            backgroundColor='#ffae00'
            border='none'
            borderRadius='10px'
            color='#FFF'
            fontFamily='Helvetica'
            fontSize='14px'
            fontWeight='bold'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            Track My Order
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#356cc7' paddingBottom='5px' paddingTop='0'>
        <EColumn width='100%'>
          <EDivider
            borderColor='#ffffff'
            borderStyle='solid'
            borderWidth='2px'
            paddingBottom='0px'
            paddingLeft='20px'
            paddingRight='20px'
            paddingTop='0'
          ></EDivider>
          <EText
            align='center'
            color='#FFF'
            fontFamily='Helvetica'
            fontSize='15px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            Best,
            <br />
            <span style={{ fontSize: '15px' }}>The [[CompanyName]] Team</span>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const ReceiptEmail: FC<any> = () => {
  const { html } = useEmail(email, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ReceiptEmail;
