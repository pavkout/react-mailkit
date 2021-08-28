import React, { FC } from 'react';

import {
  EMail,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EButton,
  EDivider,
  useEmail
} from '@react-mailkit/core';

const onePage = (
  <EMail>
    <EBody backgroundColor='#d7dde5'>
      <ESection fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='66.66666666666666%'>
          <EText
            align='left'
            fontSize='11px'
            paddingBottom='0px'
            paddingTop='0'
          >
            <span style={{ fontSize: '11px' }}>[[HEADLINE]]</span>
          </EText>
        </EColumn>
        <EColumn verticalAlign='middle' width='33.33333333333333%'>
          <EText
            align='right'
            fontSize='11px'
            paddingBottom='0px'
            paddingTop='0'
          >
            <span style={{ fontSize: '11px' }}>
              <a
                href='https://mjml.io'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                [[PERMALINK_LABEL]]
              </a>
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='33.33333333333333%'>
          <EImage
            alt='OnePage'
            paddingBottom='0px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/1t/hx.png'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='middle' width='66.66666666666666%'>
          <EText align='center' paddingBottom='0px' paddingTop='10px'>
            <a
              href='https://mjml.io'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Home
            </a>
            &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
            <a
              href='https://mjml.io'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Features
            </a>
            &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
            <a
              href='https://mjml.io'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Portfolio
            </a>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://191n.mj.am/img/191n/1t/h0.jpg'
        fullWidth='full-width'
      >
        <EColumn verticalAlign='middle' width='100%'>
          <EText
            align='center'
            color='#45474e'
            fontSize='14px'
            paddingBottom='10px'
            paddingTop='45px'
          >
            <span style={{ fontSize: '30px', lineHeight: '30px' }}>
              More than an email template
            </span>
            <br />
            <br />
            Only on <span style={{ color: '#e85034' }}>Mailjet</span> template
            builder
          </EText>
          <EButton
            align='center'
            backgroundColor='#e85034'
            borderRadius='24px'
            color='#fff'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            href='https://mjml.io'
            paddingBottom='45px'
            paddingTop='10px'
          >
            SUBSCRIBE
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' fullWidth='full-width'>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            alt=''
            src='http://191n.mj.am/img/191n/1t/hs.png'
            width='50px'
          ></EImage>
          <EText
            align='center'
            color='#9da3a3'
            fontSize='11px'
            paddingBottom='30px'
          >
            <span style={{ fontSize: '14px', color: '#e85034' }}>
              Best audience
            </span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper
            dignissim.
          </EText>
        </EColumn>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            alt=''
            src='http://191n.mj.am/img/191n/1t/hm.png'
            width='50px'
          ></EImage>
          <EText
            align='center'
            color='#9da3a3'
            fontSize='11px'
            paddingBottom='30px'
          >
            <span style={{ fontSize: '14px', color: '#e85034' }}>
              Higher rates
            </span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper
            dignissim.
          </EText>
        </EColumn>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            alt=''
            src='http://191n.mj.am/img/191n/1t/hl.png'
            width='50px'
          ></EImage>
          <EText
            align='center'
            color='#9da3a3'
            fontSize='11px'
            paddingBottom='30px'
            paddingTop='3px'
          >
            <span style={{ fontSize: '14px', color: '#e85034' }}>
              24/7 Support
            </span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper
            dignissim.
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#e85034' fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='100%'>
          <EText
            align='center'
            color='#ffffff'
            fontSize='18px'
            paddingBottom='10px'
          >
            Why choose us?
          </EText>
          <EDivider
            borderColor='#fff'
            borderStyle='solid'
            borderWidth='1px'
            paddingBottom='20px'
            paddingLeft='100px'
            paddingRight='100px'
            paddingTop='20px'
          ></EDivider>
          <EText
            align='center'
            color='#f8d5d1'
            fontSize='11px'
            paddingBottom='25px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='50%'>
          <EImage
            alt=''
            paddingBottom='20px'
            paddingTop='20px'
            src='http://191n.mj.am/img/191n/1t/h2.jpg'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='middle' width='50%'>
          <EText
            align='left'
            color='#9da3a3'
            fontSize='11px'
            paddingBottom='25px'
            paddingTop='25px'
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '14px',
                color: '#45474e'
              }}
            >
              Great newsletter for the best company out there
            </span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </EText>
          <EButton
            align='left'
            backgroundColor='#e85034'
            borderRadius='24px'
            color='#fff'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='11px'
            href='https://mjml.io'
            paddingBottom='45px'
            paddingTop='10px'
          >
            READ MORE
          </EButton>
        </EColumn>
      </ESection>
      <ESection fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='100%'>
          <EText
            align='center'
            fontSize='11px'
            paddingBottom='0px'
            paddingTop='0px'
          >
            <p style={{ fontSize: '11px' }}>[[DELIVERY_INFO]]</p>
          </EText>
          <EText
            align='center'
            fontSize='11px'
            paddingBottom='0px'
            paddingTop='0px'
          >
            <p style={{ fontSize: '11px' }}>[[POSTAL_ADDRESS]]</p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const onePageMarkup = `
  <EMail>
    <EBody backgroundColor='#d7dde5'>
      <ESection fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='66.66666666666666%'>
          <EText
            align='left'
            fontSize='11px'
            paddingBottom='0px'
            paddingTop='0'
          >
            <span style={{ fontSize: '11px' }}>[[HEADLINE]]</span>
          </EText>
        </EColumn>
        <EColumn verticalAlign='middle' width='33.33333333333333%'>
          <EText
            align='right'
            fontSize='11px'
            paddingBottom='0px'
            paddingTop='0'
          >
            <span style={{ fontSize: '11px' }}>
              <a
                href='https://mjml.io'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                [[PERMALINK_LABEL]]
              </a>
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='33.33333333333333%'>
          <EImage
            alt='OnePage'
            paddingBottom='0px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/1t/hx.png'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='middle' width='66.66666666666666%'>
          <EText align='center' paddingBottom='0px' paddingTop='10px'>
            <a
              href='https://mjml.io'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Home
            </a>
            &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
            <a
              href='https://mjml.io'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Features
            </a>
            &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
            <a
              href='https://mjml.io'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Portfolio
            </a>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundUrl='http://191n.mj.am/img/191n/1t/h0.jpg'
        fullWidth='full-width'
      >
        <EColumn verticalAlign='middle' width='100%'>
          <EText
            align='center'
            color='#45474e'
            fontSize='14px'
            paddingBottom='10px'
            paddingTop='45px'
          >
            <span style={{ fontSize: '30px', lineHeight: '30px' }}>
              More than an email template
            </span>
            <br />
            <br />
            Only on <span style={{ color: '#e85034' }}>Mailjet</span> template
            builder
          </EText>
          <EButton
            align='center'
            backgroundColor='#e85034'
            borderRadius='24px'
            color='#fff'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            href='https://mjml.io'
            paddingBottom='45px'
            paddingTop='10px'
          >
            SUBSCRIBE
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' fullWidth='full-width'>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            alt=''
            src='http://191n.mj.am/img/191n/1t/hs.png'
            width='50px'
          ></EImage>
          <EText
            align='center'
            color='#9da3a3'
            fontSize='11px'
            paddingBottom='30px'
          >
            <span style={{ fontSize: '14px', color: '#e85034' }}>
              Best audience
            </span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper
            dignissim.
          </EText>
        </EColumn>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            alt=''
            src='http://191n.mj.am/img/191n/1t/hm.png'
            width='50px'
          ></EImage>
          <EText
            align='center'
            color='#9da3a3'
            fontSize='11px'
            paddingBottom='30px'
          >
            <span style={{ fontSize: '14px', color: '#e85034' }}>
              Higher rates
            </span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper
            dignissim.
          </EText>
        </EColumn>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            alt=''
            src='http://191n.mj.am/img/191n/1t/hl.png'
            width='50px'
          ></EImage>
          <EText
            align='center'
            color='#9da3a3'
            fontSize='11px'
            paddingBottom='30px'
            paddingTop='3px'
          >
            <span style={{ fontSize: '14px', color: '#e85034' }}>
              24/7 Support
            </span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper
            dignissim.
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#e85034' fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='100%'>
          <EText
            align='center'
            color='#ffffff'
            fontSize='18px'
            paddingBottom='10px'
          >
            Why choose us?
          </EText>
          <EDivider
            borderColor='#fff'
            borderStyle='solid'
            borderWidth='1px'
            paddingBottom='20px'
            paddingLeft='100px'
            paddingRight='100px'
            paddingTop='20px'
          ></EDivider>
          <EText
            align='center'
            color='#f8d5d1'
            fontSize='11px'
            paddingBottom='25px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#ffffff' fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='50%'>
          <EImage
            alt=''
            paddingBottom='20px'
            paddingTop='20px'
            src='http://191n.mj.am/img/191n/1t/h2.jpg'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='middle' width='50%'>
          <EText
            align='left'
            color='#9da3a3'
            fontSize='11px'
            paddingBottom='25px'
            paddingTop='25px'
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '14px',
                color: '#45474e'
              }}
            >
              Great newsletter for the best company out there
            </span>
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </EText>
          <EButton
            align='left'
            backgroundColor='#e85034'
            borderRadius='24px'
            color='#fff'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='11px'
            href='https://mjml.io'
            paddingBottom='45px'
            paddingTop='10px'
          >
            READ MORE
          </EButton>
        </EColumn>
      </ESection>
      <ESection fullWidth='full-width'>
        <EColumn verticalAlign='middle' width='100%'>
          <EText
            align='center'
            fontSize='11px'
            paddingBottom='0px'
            paddingTop='0px'
          >
            <p style={{ fontSize: '11px' }}>[[DELIVERY_INFO]]</p>
          </EText>
          <EText
            align='center'
            fontSize='11px'
            paddingBottom='0px'
            paddingTop='0px'
          >
            <p style={{ fontSize: '11px' }}>[[POSTAL_ADDRESS]]</p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
`;

const OnePage: FC<any> = () => {
  const { html } = useEmail(onePage, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default OnePage;
