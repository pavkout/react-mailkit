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

const blackFriday = (
  <EMail>
    <EBody backgroundColor='#F4F4F4'>
      <ESection
        backgroundColor='#000000'
        backgroundRepeat='no-repeat'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            border='none'
            padding='10px 25px'
            paddingBottom='30px'
            src='http://5vph.mj.am/img/5vph/b/1g86w/0g67t.png'
            target='_blank'
            title=''
            width='180px'
          ></EImage>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='0px'
            paddingTop='0px'
          >
            <p
              style={{
                margin: '10px 0',
                textAlign: 'center',
                fontSize: '14px',
                color: '#ffffff',
                fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
              }}
            >
              WOMEN&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; MEN&nbsp;
              &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; KIDS
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#000000'
        backgroundRepeat='no-repeat'
        padding='0 0 0 0'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            border='none'
            padding='0px 25px'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            src='http://5vph.mj.am/img/5vph/b/1g86w/0696u.jpeg'
            target='_blank'
            title=''
            width='780px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#000000'
        backgroundRepeat='no-repeat'
        padding='0 0 0 0'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='5px'
            paddingTop='25px'
          >
            <p
              style={{
                lineHeight: '60px',
                textAlign: 'center',
                margin: '10px 0',
                fontSize: '55px',
                color: '#fcfcfc',
                fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
              }}
            >
              <b>Black Friday</b>
            </p>
          </EText>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='20px'
            paddingTop='0px'
          >
            <p
              style={{
                lineHeight: '30px',
                textAlign: 'center',
                margin: '10px 0',
                color: '#f5f5f5',
                fontSize: '25px',
                fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
              }}
            >
              <b>Take an&nbsp; extra 50% off</b>
              <br />
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
                }}
              >
                Use code SALEONSALE* at checkout
              </span>
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#000000'
        backgroundRepeat='no-repeat'
        padding='0 0 0 0'
        paddingBottom='40px'
        textAlign='center'
      >
        <EColumn>
          <EButton
            backgroundColor='#ffffff'
            borderRadius='3px'
            fontFamily='Times New Roman, Helvetica, Arial, sans-serif'
            fontSize='18px'
            fontWeight='normal'
            innerPadding='10px 25px'
            padding='10px 25px'
            paddingBottom='30px'
          >
            <span style={{ color: '#212020' }}>Shop Now</span>
          </EButton>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='0px'
            paddingTop='5px'
          >
            <p
              style={{
                lineHeight: '16px',
                textAlign: 'center',
                margin: '10px 0',
                fontSize: '12px',
                color: '#ffffff',
                fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
              }}
            >
              * Offer valid on Allura purchases on 17/29/11 at 11:59 pm. No
              price adjustments on previous&nbsp;
              <br />
              <span
                style={{
                  color: '#ffffff',
                  fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
                }}
              >
                purchases, offer limited to stock. Cannot be combined with any
                offer or promotion other than free.
              </span>
            </p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const blackFridayMarkup = `
  <EMail>
    <EBody backgroundColor='#F4F4F4'>
      <ESection
        backgroundColor='#000000'
        backgroundRepeat='no-repeat'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            border='none'
            padding='10px 25px'
            paddingBottom='30px'
            src='http://5vph.mj.am/img/5vph/b/1g86w/0g67t.png'
            target='_blank'
            title=''
            width='180px'
          ></EImage>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='0px'
            paddingTop='0px'
          >
            <p
              style={{
                margin: '10px 0',
                textAlign: 'center',
                fontSize: '14px',
                color: '#ffffff',
                fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
              }}
            >
              WOMEN&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; MEN&nbsp;
              &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; KIDS
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#000000'
        backgroundRepeat='no-repeat'
        padding='0 0 0 0'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            border='none'
            padding='0px 25px'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            src='http://5vph.mj.am/img/5vph/b/1g86w/0696u.jpeg'
            target='_blank'
            title=''
            width='780px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#000000'
        backgroundRepeat='no-repeat'
        padding='0 0 0 0'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='5px'
            paddingTop='25px'
          >
            <p
              style={{
                lineHeight: '60px',
                textAlign: 'center',
                margin: '10px 0',
                fontSize: '55px',
                color: '#fcfcfc',
                fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
              }}
            >
              <b>Black Friday</b>
            </p>
          </EText>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='20px'
            paddingTop='0px'
          >
            <p
              style={{
                lineHeight: '30px',
                textAlign: 'center',
                margin: '10px 0',
                color: '#f5f5f5',
                fontSize: '25px',
                fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
              }}
            >
              <b>Take an&nbsp; extra 50% off</b>
              <br />
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
                }}
              >
                Use code SALEONSALE* at checkout
              </span>
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#000000'
        backgroundRepeat='no-repeat'
        padding='0 0 0 0'
        paddingBottom='40px'
        textAlign='center'
      >
        <EColumn>
          <EButton
            backgroundColor='#ffffff'
            borderRadius='3px'
            fontFamily='Times New Roman, Helvetica, Arial, sans-serif'
            fontSize='18px'
            fontWeight='normal'
            innerPadding='10px 25px'
            padding='10px 25px'
            paddingBottom='30px'
          >
            <span style={{ color: '#212020' }}>Shop Now</span>
          </EButton>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='0px'
            paddingTop='5px'
          >
            <p
              style={{
                lineHeight: '16px',
                textAlign: 'center',
                margin: '10px 0',
                fontSize: '12px',
                color: '#ffffff',
                fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
              }}
            >
              * Offer valid on Allura purchases on 17/29/11 at 11:59 pm. No
              price adjustments on previous&nbsp;
              <br />
              <span
                style={{
                  color: '#ffffff',
                  fontFamily: 'Times New Roman,Helvetica,Arial,sans-serif'
                }}
              >
                purchases, offer limited to stock. Cannot be combined with any
                offer or promotion other than free.
              </span>
            </p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
`;

const BlackFriday: FC<any> = () => {
  const { html } = useEmail(blackFriday, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default BlackFriday;
