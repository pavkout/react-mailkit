import React, { FC } from 'react';

import {
  EMail,
  EHead,
  ETitle,
  EPreview,
  EStyle,
  EAttributes,
  EAll,
  EText,
  ESection,
  EBody,
  EColumn,
  EGroup,
  ESocial,
  ESocialElement,
  EImage,
  EButton,
  EDivider,
  EWrapper,
  useEmail
} from '@react-mailkit/core';

const email = (
  <EMail>
    <EHead>
      <ETitle>Discount Light</ETitle>
      <EPreview>Pre-header Text</EPreview>
      <EAttributes>
        <EAll fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"></EAll>
        <EText
          color='#000000'
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontSize='16px'
          fontWeight='400'
          lineHeight='24px'
        ></EText>
      </EAttributes>
      <EStyle
        inline='inline'
        style={`
    .body-section {
      -webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
      box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
      }
    `}
      />
      <EStyle
        inline='inline'
        style={`
          .text-link {
            color: #5e6ebf
            }
    `}
      />
      <EStyle
        inline='inline'
        style={`
        .footer-link {
          color: #888888
    }
        `}
      ></EStyle>
    </EHead>
    <EBody backgroundColor='#E7E7E7' width='600px'>
      <ESection
        backgroundColor='#040B4F'
        fullWidth='full-width'
        paddingBottom='0'
      >
        <EColumn width='100%'>
          <EImage
            align='center'
            alt=''
            src='https://res.cloudinary.com/dheck1ubc/image/upload/v1544153577/Email/Images/AnnouncementOffset/crofts-white.png'
            width='150px'
          ></EImage>
          <EText
            align='center'
            color='#ffffff'
            fontSize='16px'
            fontWeight='bold'
            letterSpacing='1px'
            paddingTop='30px'
            textTransform='uppercase'
          >
            Austin, TX
            <br />
            <span style={{ color: '#979797', fontWeight: 'normal' }}>-</span>
          </EText>
          <EText
            align='center'
            color='#17CBC4'
            fontSize='13px'
            fontWeight='bold'
            letterSpacing='1px'
            lineHeight='20px'
            paddingTop='0'
            textTransform='uppercase'
          >
            Austin Convention Center
            <br />
            123 Main Street, 78701
          </EText>
          <EImage
            alt=''
            href='https://google.com'
            padding='0'
            src='https://res.cloudinary.com/dheck1ubc/image/upload/v1544156968/Email/Images/AnnouncementOffset/header-top.png'
            width='600px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#1f2e78'>
        <EColumn width='100%'>
          <EImage
            alt=''
            href='https://google.com'
            padding='0'
            src='https://res.cloudinary.com/dheck1ubc/image/upload/v1544156968/Email/Images/AnnouncementOffset/header-bottom.png'
            width='600px'
          ></EImage>
        </EColumn>
      </ESection>
      <EWrapper cssClass='body-section' paddingBottom='0' paddingTop='0'>
        <ESection
          backgroundColor='#ffffff'
          paddingLeft='15px'
          paddingRight='15px'
        >
          <EColumn width='100%'>
            <EText color='#212b35' fontSize='20px' fontWeight='bold'>
              Croft's in Austin is opening December 20th
            </EText>
            <EText color='#637381' fontSize='16px'>
              Hi Jane,
            </EText>
            <EText color='#637381' fontSize='16px'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia a
              assumenda nulla in quisquam optio quibusdam fugiat perspiciatis
              nobis, ad tempora culpa porro labore. Repudiandae accusamus
              obcaecati voluptatibus accusantium perspiciatis.
            </EText>
            <EText color='#637381' fontSize='16px'>
              Tempora culpa porro labore. Repudiandae accusamus obcaecati
              voluptatibus accusantium perspiciatis:
            </EText>
            <EText color='#637381' fontSize='16px'>
              <ul>
                <li style={{ paddingBottom: '20px' }}>
                  <strong>Lorem ipsum dolor:</strong> Sit amet consectetur
                  adipisicing elit.
                </li>
                <li style={{ paddingBottom: '20px' }}>
                  <strong>Quia a assumenda nulla:</strong> Repudiandae accusamus
                  obcaecati voluptatibus accusantium perspiciatis.
                </li>
                <li>
                  <strong>Tempora culpa porro labore:</strong> In quisquam optio
                  quibusdam fugiat perspiciatis nobis.
                </li>
              </ul>
            </EText>
            <EText color='#637381' fontSize='16px' paddingBottom='30px'>
              Lorem ipsum dolor{' '}
              <a className='text-link' href='https://google.com'>
                sit amet consectetur
              </a>{' '}
              adipisicing elit. Earum eaque sunt nulla in, id eveniet quae unde
              ad ipsam ut, harum autem porro reiciendis minus libero illo. Vero,
              fugiat reprehenderit.
            </EText>
            <EButton
              align='center'
              backgroundColor='#5e6ebf'
              color='#ffffff'
              fontSize='17px'
              fontWeight='bold'
              href='https://google.com'
              width='300px'
            >
              RSVP Today
            </EButton>
            <EButton
              align='center'
              backgroundColor='#5e6ebf'
              color='#ffffff'
              fontSize='17px'
              fontWeight='bold'
              href='https://google.com'
              width='300px'
            >
              Book an Appointment
            </EButton>
            <EText color='#637381' fontSize='16px' paddingTop='30px'>
              Lorem ipsum dolor{' '}
              <a className='text-link' href='https://google.com'>
                sit amet consectetur
              </a>{' '}
              adipisicing elit. Earum eaque sunt nulla in, id eveniet quae unde
              ad ipsam ut, harum autem porro reiciendis minus libero illo. Vero,
              fugiat reprehenderit.
            </EText>
            <EText color='#637381' fontSize='16px' paddingBottom='0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </EText>
          </EColumn>
        </ESection>
        <ESection
          backgroundColor='#ffffff'
          paddingLeft='15px'
          paddingRight='15px'
          paddingTop='0'
        >
          <EColumn width='50%'>
            <EImage
              align='center'
              alt=''
              src='https://res.cloudinary.com/dheck1ubc/image/upload/v1544153577/Email/Images/AnnouncementOffset/Image_1.png'
            ></EImage>
          </EColumn>
          <EColumn width='50%'>
            <EImage
              align='center'
              alt=''
              src='https://res.cloudinary.com/dheck1ubc/image/upload/v1544153578/Email/Images/AnnouncementOffset/Image_2.png'
            ></EImage>
          </EColumn>
        </ESection>
        <ESection
          backgroundColor='#ffffff'
          paddingLeft='15px'
          paddingRight='15px'
          paddingTop='0'
        >
          <EColumn width='100%'>
            <EDivider borderColor='#DFE3E8' borderWidth='1px'></EDivider>
          </EColumn>
        </ESection>
        <ESection backgroundColor='#ffffff' padding='0 15px 0 15px'>
          <EColumn width='100%'>
            <EText
              color='#212b35'
              fontSize='20px'
              fontWeight='bold'
              paddingBottom='0'
            >
              Come see us!
            </EText>
            <EText color='#637381' fontSize='16px'>
              We're looking forward to meeting you.
            </EText>
          </EColumn>
        </ESection>
        <ESection
          backgroundColor='#ffffff'
          paddingLeft='15px'
          paddingRight='15px'
        >
          <EColumn width='50%'>
            <EText
              color='#212b35'
              fontSize='12px'
              fontWeight='bold'
              paddingBottom='0'
              textTransform='uppercase'
            >
              address
            </EText>
            <EText color='#637381' fontSize='14px' paddingTop='0'>
              Austin Convention Center
              <br />
              123 Main Street, 78701
            </EText>
          </EColumn>
          <EColumn width='50%'>
            <EText
              color='#212b35'
              fontSize='12px'
              fontWeight='bold'
              paddingBottom='0'
              textTransform='uppercase'
            >
              Hours of Operation
            </EText>
            <EText color='#637381' fontSize='14px' paddingTop='0'>
              Monday, December 20th: 8:00AM - 5:00PM
              <br />
              Tuesday, December 21st: 8:00AM - 5:00PM
            </EText>
          </EColumn>
        </ESection>
        <ESection
          backgroundColor='#ffffff'
          paddingLeft='15px'
          paddingRight='15px'
        >
          <EColumn width='100%'>
            <EImage
              alt=''
              src='https://res.cloudinary.com/dheck1ubc/image/upload/v1544153579/Email/Images/AnnouncementOffset/map.jpg'
            ></EImage>
          </EColumn>
        </ESection>
      </EWrapper>
      <EWrapper fullWidth='full-width'>
        <ESection>
          <EColumn padding='0' width='100%'>
            <ESocial
              align='center'
              fontSize='15px'
              iconSize='30px'
              mode='horizontal'
              padding='0'
            >
              <ESocialElement
                backgroundColor='#A1A0A0'
                href='https://mjml.io/'
                name='facebook'
              ></ESocialElement>
              <ESocialElement
                backgroundColor='#A1A0A0'
                href='https://mjml.io/'
                name='google'
              ></ESocialElement>
              <ESocialElement
                backgroundColor='#A1A0A0'
                href='https://mjml.io/'
                name='twitter'
              ></ESocialElement>
              <ESocialElement
                backgroundColor='#A1A0A0'
                href='https://mjml.io/'
                name='linkedin'
              ></ESocialElement>
            </ESocial>
            <EText
              align='center'
              color='#445566'
              fontSize='11px'
              fontWeight='bold'
            >
              View this email in your browser
            </EText>
            <EText
              align='center'
              color='#445566'
              fontSize='11px'
              lineHeight='16px'
            >
              You are receiving this email advertisement because you registered
              with Croft's Accountants. (123 Main Street, Austin, TX 78701) and
              agreed to receive emails from us regarding new features, events
              and special offers.
            </EText>
            <EText
              align='center'
              color='#445566'
              fontSize='11px'
              lineHeight='16px'
            >
              &copy; Croft's Accountants Inc., All Rights Reserved.
            </EText>
          </EColumn>
        </ESection>
        <ESection paddingTop='0'>
          <EGroup>
            <EColumn paddingRight='0' width='100%'>
              <EText
                align='center'
                color='#445566'
                fontSize='11px'
                fontWeight='bold'
                lineHeight='16px'
              >
                <a className='footer-link' href='https://www.google.com'>
                  Privacy
                </a>
                &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
                <a className='footer-link' href='https://www.google.com'>
                  Unsubscribe
                </a>
              </EText>
            </EColumn>
          </EGroup>
        </ESection>
      </EWrapper>
    </EBody>
  </EMail>
);

export const Austin: FC<any> = () => {
  const { html } = useEmail(email, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Austin;
