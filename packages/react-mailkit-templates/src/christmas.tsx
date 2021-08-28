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

export const christmasMarkup = (
  <EMail>
    <EBody backgroundColor='#F4F4F4'>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        padding='20px 0'
        paddingBottom='0px'
        paddingTop='30px'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            src='http://5vph.mj.am/img/5vph/b/1g8pi/0gztq.png'
            target='_blank'
            width='214px'
          ></EImage>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='15px'
            paddingTop='0px'
          >
            <p
              style={{
                textAlign: 'center',
                margin: '10px 0',
                color: '#151e23',
                fontSize: '14px',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              Product | Concept | Contact
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundRepeat='repeat'
        padding='20px 0'
        paddingBottom='0px'
        paddingTop='0px'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='http://5vph.mj.am/img/5vph/b/1g8pi/068ys.png'
            target='_blank'
            width='600px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        backgroundSize='auto'
        padding='20px 0'
        paddingBottom='0px'
        paddingTop='30px'
        textAlign='center'
      >
        <EColumn>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='30px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='10px'
            paddingTop='10px'
          >
            <p
              style={{
                lineHeight: '30px',
                margin: '10px 0',
                textAlign: 'center',
                color: '#151e23',
                fontSize: '30p',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              - Our Holiday Recipes -
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        padding='20px 0'
        paddingBottom='0px'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            paddingBottom='20px'
            paddingLeft='30px'
            paddingRight='30px'
            paddingTop='0px'
            src='http://5vph.mj.am/img/5vph/b/1g8pi/0gzvp.jpeg'
            target='_blank'
            width='1200px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='0px'
            paddingLeft='40px'
            paddingRight='40px'
            paddingTop='0px'
          >
            <p
              style={{
                margin: '10px 0',
                color: '#151e23',
                fontSize: '16px',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              <b>Cake Title</b>
            </p>
            <p
              style={{
                lineHeight: '16px',
                margin: '10px 0',
                fontSize: '14px',
                color: '#354552',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p
              style={{
                lineHeight: '16px',
                margin: '10px 0',
                color: '#354552',
                fontSize: '14px',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              <u>Choose me</u> &gt;
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        direction='rtl'
        padding='20px 0'
        paddingBottom='0px'
        paddingTop='0px'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            paddingBottom='20px'
            paddingLeft='30px'
            paddingRight='30px'
            paddingTop='20px'
            src='http://5vph.mj.am/img/5vph/b/1g8pi/0gzv6.jpeg'
            target='_blank'
            width='1200px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='0px'
            paddingLeft='40px'
            paddingRight='40px'
            paddingTop='0px'
          >
            <p
              style={{
                margin: '10px 0',
                color: '#151e23',
                fontSize: '16px',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              <b>Cake Title</b>
            </p>
            <p
              style={{
                lineHeight: '16px',
                margin: '10px 0',
                fontSize: '14px',
                color: '#354552',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p
              style={{
                lineHeight: '16px',
                margin: '10px 0',
                color: '#354552',
                fontSize: '14px',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              <u>Choose me</u> &gt;
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        padding='20px 0'
        paddingBottom='0px'
        paddingTop='0px'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            paddingBottom='20px'
            paddingLeft='30px'
            paddingRight='30px'
            paddingTop='20px'
            src='http://5vph.mj.am/img/5vph/b/1g8pi/0gzvh.jpeg'
            target='_blank'
            width='1200px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EText
            align='left'
            color='#55575d'
            fontFamily='Arial, sans-serif'
            fontSize='13px'
            lineHeight='22px'
            padding='10px 25px'
            paddingBottom='0px'
            paddingLeft='40px'
            paddingRight='40px'
            paddingTop='0px'
          >
            <p
              style={{
                margin: '10px 0',
                color: '#151e23',
                fontSize: '16px',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              <b>Cake Title</b>
            </p>
            <p
              style={{
                lineHeight: '16px',
                margin: '10px 0',
                fontSize: '14px',
                color: '#354552',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p
              style={{
                lineHeight: '16px',
                margin: '10px 0',
                color: '#354552',
                fontSize: '14px',
                fontFamily: 'Georgia,Helvetica,Arial,sans-serif'
              }}
            >
              <u>Choose me</u> &gt;
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        padding='20px 0'
        paddingTop='0px'
        textAlign='center'
      >
        <EColumn>
          <EButton
            align='center'
            backgroundColor='#354552'
            borderRadius='3px'
            color='#ffffff'
            fontFamily='Georgia, Helvetica, Arial, sans-serif'
            fontSize='14px'
            fontWeight='normal'
            innerPadding='10px 25px'
            padding='10px 25px'
            textDecoration='none'
            textTransform='none'
            verticalAlign='middle'
          >
            Discover all desserts
          </EButton>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#ffffff'
        backgroundRepeat='repeat'
        padding='20px 0'
        paddingBottom='0px'
        paddingTop='0px'
        textAlign='center'
      >
        <EColumn>
          <EImage
            align='center'
            padding='10px 25px'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0px'
            src='http://5vph.mj.am/img/5vph/b/1g8pi/068y3.jpeg'
            target='_blank'
            width='600px'
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
            src='http://5vph.mj.am/img/5vph/b/1g8pi/0gzjm.png'
            target='_blank'
            width='202px'
          ></EImage>
          <ESocial align='center'>
            <ESocialElement name='facebook'></ESocialElement>
            <ESocialElement name='pinterest'></ESocialElement>
            <ESocialElement name='instagram'></ESocialElement>
          </ESocial>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

const Christmas: FC<any> = () => {
  const { html } = useEmail(christmasMarkup, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Christmas;
