import React, { FC } from 'react';

import {
  EMail,
  EText,
  ESection,
  EBody,
  EColumn,
  ESocial,
  ESocialElement,
  ENavbar,
  ENavbarLink,
  EImage,
  EButton,
  useEmail
} from 'react-mailkit';

const racoon = (
  <EMail>
    <EBody backgroundColor='#d6dde5'>
      <ESection backgroundColor='#ffffff'>
        <EColumn width='50%'>
          <EImage
            align='center'
            alt='Racoon logo'
            href='https://mjml.io'
            padding='10px'
            src='http://191n.mj.am/img/191n/3s/x4u.png'
          ></EImage>
        </EColumn>
        <EColumn width='50%'>
          <ENavbar
            baseUrl='https://mjml.io'
            hamburger='hamburger'
            icoColor='#fa8739'
          >
            <ENavbarLink color='#000000' href='https://mjml.io'>
              home
            </ENavbarLink>
            <ENavbarLink color='#000000' href='https://mjml.io'>
              blog
            </ENavbarLink>
            <ENavbarLink color='#000000' href='https://mjml.io'>
              store
            </ENavbarLink>
          </ENavbar>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fa8739' paddingBottom='0px' paddingTop='0'>
        <EColumn width='200px'>
          <EText
            align='left'
            color='#fff'
            fontSize='40px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p style={{ fontSize: '17px' }}>SPRING PROMO</p>
            <p>50%</p>
            <p>OFFER</p>
            <p style={{ fontSize: '13px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
            </p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fff'
            borderRadius='3px'
            color='#fa8739'
            fontSize='16px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
          >
            SHOP NOW
          </EButton>
        </EColumn>
        <EColumn width='400px'>
          <EImage
            align='center'
            alt='Clothes set'
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/xjg.jpg'
            width='400px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#2f323b' paddingBottom='0px' paddingTop='0'>
        <EColumn width='25%'>
          <EImage
            align='center'
            alt='Box free shipping'
            border='none'
            paddingBottom='10px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x4t.png'
            width='42px'
          ></EImage>
        </EColumn>
        <EColumn width='75%'>
          <EText
            align='left'
            color='#fff'
            fontSize='18px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p>
              FREE SHIPPING ON ORDER{' '}
              <span style={{ fontWeight: 'bold', color: 'rgb(250, 135, 57)' }}>
                OVER 55&#x20AC;
              </span>
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fff' paddingBottom='20px'>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Chesterk tank'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='30px'
            src='http://191n.mj.am/img/191n/3s/x4v.jpg'
            width='209px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>CHESTERK TANK</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>15&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Beyond backpack'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            src='http://191n.mj.am/img/191n/3s/x4g.jpg'
            width='178px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>BEYOND BACKPACK</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>20&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Jensen shorts'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='30px'
            src='http://191n.mj.am/img/191n/3s/x46.jpg'
            width='182px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0px'
          >
            <p>JENSEN SHORTS</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>28&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fff' paddingBottom='20px'>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Verdant cap'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='20px'
            src='http://191n.mj.am/img/191n/3s/x4h.jpg'
            width='129px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>VERDANT CAP</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>20&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            border='none'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Blake polo shirt'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='20px'
            src='http://191n.mj.am/img/191n/3s/x4i.jpg'
            width='208px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>BLAKE POLO SHIRT</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>25&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Sketch floral'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='20px'
            src='http://191n.mj.am/img/191n/3s/x4j.jpg'
            width='72px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>SKETCH FLORAL</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>23&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fa8739' paddingBottom='0px' paddingTop='0'>
        <EColumn>
          <EImage
            alt='Man 1'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/x4k.jpg'
            width='301px'
          ></EImage>
        </EColumn>
        <EColumn width='50%'>
          <EText
            align='left'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '19px' }}>ANDERSON SWEATER</p>
            <p style={{ fontSize: '36px' }}>75&#x20AC;</p>
            <p>
              The Anderson Sweater features a floral all-over print with
              contrast colour.
            </p>
          </EText>
          <EButton
            backgroundColor='#fff'
            borderRadius='3px'
            color='#fa8739'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#2f323b' paddingBottom='0px' paddingTop='0'>
        <EColumn>
          <EText
            align='left'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '19px' }}>ALDER TWO JONES JACKET</p>
            <p style={{ fontSize: '36px' }}>100&#x20AC;</p>
            <p>
              Colour-block design, zip entry, oxford hood lining, side pockets
              &amp; TC lining.
            </p>
          </EText>
          <EButton
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn>
          <EImage
            align='center'
            alt='Man 2'
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/xj6.jpg'
            width='302px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fa8739' paddingBottom='0px' paddingTop='0'>
        <EColumn>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p style={{ fontSize: '14px' }}>DISCOVER OUR</p>
            <p style={{ fontSize: '27px' }}>SUMMER COLLECTION</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fff' paddingBottom='20px' paddingTop='20px'>
        <EColumn>
          <EImage
            alt='Topaz C3 shoes'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/x4q.jpg'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>TOPAZ C3 SHOES</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>70&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn>
          <EImage
            align='center'
            alt='Camden backpack'
            border='none'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/x4r.jpg'
            width='199px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>CAMDEN BACKPACK</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>50&#x20AC;</p>
          </EText>
          <EButton
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#2f323b'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn>
          <EImage
            alt='Cards'
            src='http://191n.mj.am/img/191n/3s/x47.png'
            width='72px'
          ></EImage>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
              PAYMENT METHODS
            </p>
            <p>We accept all majors payments options</p>
          </EText>
        </EColumn>
        <EColumn>
          <EImage
            align='center'
            alt='Currencies'
            border='none'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x48.png'
            width='70px'
          ></EImage>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
              CURRENCIES CHOICE
            </p>
            <p>You have the choice to pay with your own currencies</p>
          </EText>
        </EColumn>
        <EColumn>
          <EImage
            align='center'
            alt='Express'
            border='none'
            paddingBottom='8px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x4y.png'
            width='82px'
          ></EImage>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
              EXPRESS SHIPPING
            </p>
            <p>Delivered tomorrow before noon</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fa8739' paddingBottom='20px' paddingTop='0'>
        <EColumn>
          <EImage
            align='center'
            alt='Racoon logo'
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x49.png'
            width='180px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>
              <a
                href='https://mjml.io'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Privacy policy
              </a>
            </p>
          </EText>
        </EColumn>
        <EColumn>
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
      <ESection paddingBottom='20px' paddingTop='0px' />
    </EBody>
  </EMail>
);

export const racoonMarkup = `
  <EMail>
    <EBody backgroundColor='#d6dde5'>
      <ESection backgroundColor='#ffffff'>
        <EColumn width='50%'>
          <EImage
            align='center'
            alt='Racoon logo'
            href='https://mjml.io'
            padding='10px'
            src='http://191n.mj.am/img/191n/3s/x4u.png'
          ></EImage>
        </EColumn>
        <EColumn width='50%'>
          <ENavbar
            baseUrl='https://mjml.io'
            hamburger='hamburger'
            icoColor='#fa8739'
          >
            <ENavbarLink color='#000000' href='https://mjml.io'>
              home
            </ENavbarLink>
            <ENavbarLink color='#000000' href='https://mjml.io'>
              blog
            </ENavbarLink>
            <ENavbarLink color='#000000' href='https://mjml.io'>
              store
            </ENavbarLink>
          </ENavbar>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fa8739' paddingBottom='0px' paddingTop='0'>
        <EColumn width='200px'>
          <EText
            align='left'
            color='#fff'
            fontSize='40px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p style={{ fontSize: '17px' }}>SPRING PROMO</p>
            <p>50%</p>
            <p>OFFER</p>
            <p style={{ fontSize: '13px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
            </p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fff'
            borderRadius='3px'
            color='#fa8739'
            fontSize='16px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
          >
            SHOP NOW
          </EButton>
        </EColumn>
        <EColumn width='400px'>
          <EImage
            align='center'
            alt='Clothes set'
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/xjg.jpg'
            width='400px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#2f323b' paddingBottom='0px' paddingTop='0'>
        <EColumn width='25%'>
          <EImage
            align='center'
            alt='Box free shipping'
            border='none'
            paddingBottom='10px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x4t.png'
            width='42px'
          ></EImage>
        </EColumn>
        <EColumn width='75%'>
          <EText
            align='left'
            color='#fff'
            fontSize='18px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p>
              FREE SHIPPING ON ORDER{' '}
              <span style={{ fontWeight: 'bold', color: 'rgb(250, 135, 57)' }}>
                OVER 55&#x20AC;
              </span>
            </p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fff' paddingBottom='20px'>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Chesterk tank'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='30px'
            src='http://191n.mj.am/img/191n/3s/x4v.jpg'
            width='209px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>CHESTERK TANK</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>15&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Beyond backpack'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            src='http://191n.mj.am/img/191n/3s/x4g.jpg'
            width='178px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>BEYOND BACKPACK</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>20&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Jensen shorts'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='30px'
            src='http://191n.mj.am/img/191n/3s/x46.jpg'
            width='182px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0px'
          >
            <p>JENSEN SHORTS</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>28&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fff' paddingBottom='20px'>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Verdant cap'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='20px'
            src='http://191n.mj.am/img/191n/3s/x4h.jpg'
            width='129px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>VERDANT CAP</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>20&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            border='none'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Blake polo shirt'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='20px'
            src='http://191n.mj.am/img/191n/3s/x4i.jpg'
            width='208px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>BLAKE POLO SHIRT</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>25&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn verticalAlign='bottom'>
          <EImage
            align='center'
            alt='Sketch floral'
            border='none'
            paddingBottom='20px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='20px'
            src='http://191n.mj.am/img/191n/3s/x4j.jpg'
            width='72px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>SKETCH FLORAL</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>23&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fa8739' paddingBottom='0px' paddingTop='0'>
        <EColumn>
          <EImage
            alt='Man 1'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/x4k.jpg'
            width='301px'
          ></EImage>
        </EColumn>
        <EColumn width='50%'>
          <EText
            align='left'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '19px' }}>ANDERSON SWEATER</p>
            <p style={{ fontSize: '36px' }}>75&#x20AC;</p>
            <p>
              The Anderson Sweater features a floral all-over print with
              contrast colour.
            </p>
          </EText>
          <EButton
            backgroundColor='#fff'
            borderRadius='3px'
            color='#fa8739'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#2f323b' paddingBottom='0px' paddingTop='0'>
        <EColumn>
          <EText
            align='left'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '19px' }}>ALDER TWO JONES JACKET</p>
            <p style={{ fontSize: '36px' }}>100&#x20AC;</p>
            <p>
              Colour-block design, zip entry, oxford hood lining, side pockets
              &amp; TC lining.
            </p>
          </EText>
          <EButton
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn>
          <EImage
            align='center'
            alt='Man 2'
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/xj6.jpg'
            width='302px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fa8739' paddingBottom='0px' paddingTop='0'>
        <EColumn>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='10px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
          >
            <p style={{ fontSize: '14px' }}>DISCOVER OUR</p>
            <p style={{ fontSize: '27px' }}>SUMMER COLLECTION</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fff' paddingBottom='20px' paddingTop='20px'>
        <EColumn>
          <EImage
            alt='Topaz C3 shoes'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/x4q.jpg'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>TOPAZ C3 SHOES</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>70&#x20AC;</p>
          </EText>
          <EButton
            align='center'
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            fontSize='13px'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
        <EColumn>
          <EImage
            align='center'
            alt='Camden backpack'
            border='none'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
            src='http://191n.mj.am/img/191n/3s/x4r.jpg'
            width='199px'
          ></EImage>
          <EText
            align='center'
            color='#000'
            fontSize='15px'
            fontWeight='bold'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>CAMDEN BACKPACK</p>
            <p style={{ color: 'rgb(250, 135, 57)' }}>50&#x20AC;</p>
          </EText>
          <EButton
            backgroundColor='#fa8739'
            borderRadius='3px'
            color='#fff'
            href='https://mjml.io'
            padding='15px 30px'
            paddingBottom='10px'
            paddingTop='0'
          >
            BUY NOW
          </EButton>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='#2f323b'
        paddingBottom='20px'
        paddingTop='20px'
      >
        <EColumn>
          <EImage
            alt='Cards'
            src='http://191n.mj.am/img/191n/3s/x47.png'
            width='72px'
          ></EImage>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
              PAYMENT METHODS
            </p>
            <p>We accept all majors payments options</p>
          </EText>
        </EColumn>
        <EColumn>
          <EImage
            align='center'
            alt='Currencies'
            border='none'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x48.png'
            width='70px'
          ></EImage>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
              CURRENCIES CHOICE
            </p>
            <p>You have the choice to pay with your own currencies</p>
          </EText>
        </EColumn>
        <EColumn>
          <EImage
            align='center'
            alt='Express'
            border='none'
            paddingBottom='8px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x4y.png'
            width='82px'
          ></EImage>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
              EXPRESS SHIPPING
            </p>
            <p>Delivered tomorrow before noon</p>
          </EText>
        </EColumn>
      </ESection>
      <ESection backgroundColor='#fa8739' paddingBottom='20px' paddingTop='0'>
        <EColumn>
          <EImage
            align='center'
            alt='Racoon logo'
            border='none'
            paddingBottom='0px'
            paddingLeft='0px'
            paddingRight='0px'
            paddingTop='10px'
            src='http://191n.mj.am/img/191n/3s/x49.png'
            width='180px'
          ></EImage>
        </EColumn>
        <EColumn>
          <EText
            align='center'
            color='#fff'
            fontSize='13px'
            paddingBottom='0px'
            paddingLeft='25px'
            paddingRight='25px'
            paddingTop='0'
          >
            <p>
              <a
                href='https://mjml.io'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Privacy policy
              </a>
            </p>
          </EText>
        </EColumn>
        <EColumn>
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
      <ESection paddingBottom='20px' paddingTop='0px' />
    </EBody>
  </EMail>
`;

const Racoon: FC<any> = () => {
  const { html } = useEmail(racoon, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Racoon;
