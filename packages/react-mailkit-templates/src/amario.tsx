import React, { FC } from 'react';

import {
  EMail,
  EText,
  ESection,
  EBody,
  EColumn,
  ESocial,
  ESocialElement,
  EImage,
  EButton,
  useEmail
} from '@react-mailkit/core';

export const amarioMarkup = (
  <EMail>
    <EBody backgroundColor='#d6dde5'>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EColumn verticalAlign='middle' width='66.66666666666666%'>
          <EText
            align='left'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='11px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <span style={{ fontSize: '11px' }}>[[HEADLINE]]</span>
          </EText>
        </EColumn>
        <EColumn verticalAlign='middle' width='33.33333333333333%'>
          <EText
            align='right'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='11px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
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
      <ESection
        backgroundColor='#ffffff'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn verticalAlign='top' width='100%'>
          <EImage
            align='center'
            alt='Amario logo'
            border='none'
            href='https://mjml.io'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/xxr.png'
            width='182px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundUrl='http://191n.mj.am/img/191n/3s/xm6.jpg'
        paddingBottom='27px'
        paddingTop='0'
      >
        <EColumn verticalAlign='top' width='100%'>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>
              <span style={{ fontSize: '16px' }}>
                <a
                  href='https://mjml.io'
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span style={{ fontWeight: 'bold' }}>
                    <span style={{ color: 'rgb(255, 255, 255)' }}>Home</span>
                  </span>
                </a>
                <span style={{ fontWeight: 'bold' }}>
                  <span style={{ color: 'rgb(255, 255, 255)' }}> / </span>
                </span>
                <a
                  href='https://mjml.io'
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span style={{ fontWeight: 'bold' }}>
                    <span style={{ color: 'rgb(255, 255, 255)' }}>blog</span>
                  </span>
                </a>
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>
                <span style={{ color: 'rgb(255, 255, 255)' }}>
                  <span style={{ fontSize: '16px' }}>
                    <br />
                  </span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontSize: '27px' }}>
                <a
                  href='https://mjml.io'
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span style={{ fontWeight: 'bold' }}>
                    <span style={{ color: 'rgb(255, 255, 255)' }}>
                      AMARIO.COM
                    </span>
                  </span>
                </a>
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>
                <span style={{ color: 'rgb(255, 255, 255)' }}>
                  <span style={{ fontSize: '27px' }}>YOUR CRUISES EXPERT</span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>
                <span style={{ color: 'rgb(255, 255, 255)' }}>
                  <span style={{ fontSize: '27px' }}>FROM EUROPE TO ASIA</span>
                </span>
              </span>
            </p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#414141'
            border='none'
            borderRadius='3px'
            color='#FFFFFF'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='15px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='70px'
            verticalAlign='middle'
          >
            CHECK OUT OUR PROMOTIONS !
          </EButton>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn verticalAlign='top' width='25%' />
        <EColumn verticalAlign='top' width='50%'>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>
              <span style={{ color: 'rgb(106, 138, 162)' }}>
                <span style={{ fontWeight: 'bold' }}>
                  <span style={{ fontSize: '16px' }}>
                    WHY SAILING WITH US ?
                  </span>
                </span>
              </span>
            </p>
          </EText>
          <EText
            align='justify'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>
              <span style={{ color: 'rgb(57, 63, 76)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                rutrum enim eget{' '}
              </span>
              <span style={{ fontWeight: 'bold' }}>
                <span style={{ color: 'rgb(57, 63, 76)' }}>
                  magna efficitur
                </span>
              </span>
              <span style={{ color: 'rgb(57, 63, 76)' }}>
                , eu semper augue semper. Aliquam erat volutpat. Cras id dui
                lectus. Vestibulum sed finibus lectus, sit amet{' '}
              </span>
              <span style={{ fontWeight: 'bold' }}>
                <span style={{ color: 'rgb(57, 63, 76)' }}>suscipit nibh</span>
              </span>
              <span style={{ color: 'rgb(57, 63, 76)' }}>
                . Proin nec commodo purus. Sed eget nulla elit. Nulla aliquet
                mollis faucibus.
              </span>
            </p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#c7896f'
            border='none'
            borderRadius='3px'
            color='#FFFFFF'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            verticalAlign='middle'
          >
            LEARN MORE
          </EButton>
        </EColumn>
        <EColumn verticalAlign='top' width='25%' />
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn verticalAlign='top' width='50%'>
          <EImage
            align='center'
            alt='Step 1 - Choose a destination'
            border='none'
            href='https://mjml.io'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/xx9.png'
            width='250px'
          ></EImage>
          <EImage
            align='center'
            alt='Step 2 - Select a type of boat'
            border='none'
            href='https://mjml.io'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/x0w.png'
            width='250px'
          ></EImage>
          <EImage
            align='center'
            alt='Step 3 - Book and enjoy your trip'
            border='none'
            href='https://mjml.io'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/x0x.png'
            width='250px'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='top' width='50%'>
          <EImage
            align='center'
            alt='Boat'
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/xmh.jpg'
            width='250px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            align='center'
            alt='A wide range of cruises'
            border='none'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x0s.png'
            width='125px'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            align='center'
            alt='Eco friendly sailing'
            border='none'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x01.png'
            width='125px'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            align='center'
            alt='Insurances included'
            border='none'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x0l.png'
            width='125px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn verticalAlign='top' width='100%'>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p>
              <span style={{ color: 'rgb(59, 70, 82)' }}>
                <span style={{ fontSize: '24px' }}>
                  Cruise of the month : Corse, preserved beauty
                </span>
              </span>
            </p>
          </EText>
          <EImage
            align='center'
            alt='Cruise of the month : Corse'
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/xmi.jpg'
            width='500px'
          ></EImage>
          <EButton
            align='center'
            backgroundColor='#464e5e'
            border='none'
            borderRadius='3px'
            color='#FFFFFF'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            verticalAlign='middle'
          >
            BOOK A CORSICAN TOUR NOW
          </EButton>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
          >
            <p>
              <span style={{ color: 'rgb(59, 70, 82)' }}>
                <span style={{ fontSize: '18px' }}>22 places available</span>
              </span>
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn verticalAlign='top' width='50%'>
          <EImage
            align='center'
            alt='Sailing'
            border='none'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/xmj.jpg'
            width='250px'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='top' width='50%'>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p>
              <span style={{ color: 'rgb(59, 70, 82)' }}>
                <span style={{ fontSize: '15px' }}>
                  <span style={{ fontWeight: 'bold' }}>RENT A SAILING</span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ color: 'rgb(59, 70, 82)' }}>
                <span style={{ fontSize: '15px' }}>
                  <span style={{ fontWeight: 'bold' }}>BOAT</span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ color: 'rgb(59, 70, 82)' }}>
                <span style={{ fontSize: '15px' }}>
                  <span style={{ fontWeight: 'bold' }}>AND ORGANIZE</span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ color: 'rgb(59, 70, 82)' }}>
                <span style={{ fontSize: '15px' }}>
                  <span style={{ fontWeight: 'bold' }}>YOUR OWN</span>
                </span>
              </span>
            </p>
            <p>
              <span style={{ color: 'rgb(59, 70, 82)' }}>
                <span style={{ fontSize: '15px' }}>
                  <span style={{ fontWeight: 'bold' }}>CRUISE</span>
                </span>
              </span>
            </p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#c7896f'
            border='none'
            borderRadius='3px'
            color='#FFFFFF'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='15px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            verticalAlign='middle'
          >
            SEE CONDITIONS
          </EButton>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn verticalAlign='top' width='100%'>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p>Any questions, comments, concerns?</p>
            <p>
              Contact our support staff at{' '}
              <a
                href='https://mjml.io'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span style={{ fontWeight: 'bold' }}>support@amario.com</span>
              </a>
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#8bafad' paddingBottom='0px' paddingTop='0'>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EImage
            align='center'
            alt='Amario logo'
            border='none'
            href='https://mjml.io'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x0p.png'
            width='77px'
          ></EImage>
        </EColumn>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p>
              <a
                href='https://mjml.io'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span style={{ color: 'rgb(255, 255, 255)' }}>
                  Privacy policy
                </span>
              </a>
            </p>
          </EText>
        </EColumn>
        <EColumn verticalAlign='top' width='33.33333333333333%'>
          <ESocial paddingTop='20px'>
            <ESocialElement
              href='[[SHORT_PERMALINK]]'
              name='facebook'
            ></ESocialElement>
            <ESocialElement
              href='[[SHORT_PERMALINK]]'
              name='twitter'
            ></ESocialElement>
            <ESocialElement
              href='[[SHORT_PERMALINK]]'
              name='google'
            ></ESocialElement>
          </ESocial>
        </EColumn>
      </ESection>
      <ESection paddingBottom='20px' paddingTop='20px'>
        <EColumn verticalAlign='middle' width='100%'>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='11px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '11px' }}>[[DELIVERY_INFO]]</p>
          </EText>
          <EText
            align='center'
            color='#000000'
            fontFamily='Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif'
            fontSize='11px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '11px' }}>[[POSTAL_ADDRESS]]</p>
          </EText>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

const Amario: FC<any> = () => {
  const { html } = useEmail(amarioMarkup, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Amario;
