import React, { FC } from 'react';

import {
  EMail,
  EHead,
  EStyle,
  EClass,
  ETitle,
  EAttributes,
  EAll,
  EGroup,
  EText,
  ESection,
  EBody,
  EColumn,
  EImage,
  EButton,
  EDivider,
  useEmail
} from 'react-mailkit';

const hAndM = (
  <EMail>
    <EHead>
      <ETitle>H&M Home- A stylish holiday at home</ETitle>
      <EStyle
        style={`
          .shop-now {
            font - family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            mso-line-height-rule: single;
            color: #000000;
            letter-spacing: 1px;
          }
          a {
            text - decoration:none; color:#000000;
          }
        `}
      />
      <EAttributes>
        <EAll padding='0'></EAll>
        <ESection backgroundColor='#fff' />
        <EClass
          color='#939393'
          fontFamily='Arial, Verdana, sans-serif'
          fontSize='11px'
          name='preheader'
        ></EClass>
        <EClass
          align='center'
          color='#000000'
          fontFamily='Arial, Helvetica, sans-serif'
          fontSize='12px'
          fontWeight='bold'
          lineHeight='20px'
          name='menu'
          textTransform='uppercase'
        ></EClass>
      </EAttributes>
    </EHead>
    <EBody>
      <ESection padding='10px 5px 0 5px'>
        <EColumn width='70%'>
          <EText mjClass='preheader'>
            New decor, classic design and ornaments for every room and space.
          </EText>
        </EColumn>
        <EColumn width='30%'>
          <EText align='right' mjClass='preheader'>
            View online
          </EText>
        </EColumn>
      </ESection>
      <ESection paddingTop='50px'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://customers.anpdm.com/hm/1311_rknd/header-logo.png'
            width='76px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection padding='20px 20px'>
        <EGroup width='75%'>
          <EColumn>
            <EText mjClass='menu'>
              <a href='http://www.hm.com/'>SHOP NOW</a>
            </EText>
          </EColumn>
          <EColumn>
            <EText mjClass='menu'>
              <a href='http://www.hm.com/'>NEW ARRIVALS</a>
            </EText>
          </EColumn>
          <EColumn>
            <EText mjClass='menu'>
              <a href='http://www.hm.com/'>SALE</a>
            </EText>
          </EColumn>
        </EGroup>
        <EColumn width='25%'>
          <EText mjClass='menu'>
            <a href='http://www.hm.com/'>STORE LOCATOR</a>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        borderBottom='1px solid #bbbbbb'
        borderTop='1px solid #bbbbbb'
        padding='20px 0'
      >
        <EColumn>
          <EText
            align='center'
            color='#080808'
            fontFamily='Helvetica, sans-serif'
            fontSize='18px'
            lineHeight='20px'
          >
            <a href='http://www.hm.com/'>
              Enjoy <b>free shipping</b> over $50 with code 3181!*
            </a>
          </EText>
        </EColumn>
      </ESection>
      <ESection paddingTop='40px'>
        <EColumn>
          <EImage src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_01.jpg'></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='480px'>
          <EText align='center' paddingTop='20px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '11px',
                color: '#000000',
                fontWeight: 'bold',
                letterSpacing: '2px'
              }}
            >
              HOME
            </span>
            <br />
            <br />
            <span
              style={{
                fontFamily: 'Didot, Garamond, Georgia',
                fontSize: '52px',
                lineHeight: '43px',
                color: '#000000',
                fontWeight: 'bold'
              }}
            >
              HOLIDAY
              <br />
              CLASSICS
            </span>
          </EText>
          <EText align='center' lineHeight='14px' paddingTop='5px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '13px',
                color: '#080808',
                fontWeight: 'normal',
                lineHeight: '14px!important',
                padding: 0
              }}
            >
              Red remains the ruling color of the holiday season. Invest in new
              classics to get into a festive mood.
            </span>
          </EText>
          <EText align='center' paddingTop='20px'>
            <span className='shop-now'>
              <a href='http://www.hm.com/'>
                <img
                  width='3'
                  height='11'
                  src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                />{' '}
                SHOP NOW
              </a>
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection paddingTop='30px'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_02.gif'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EGroup>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0320436003.gif'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Metal Storage Box
              <br />
              $ 14.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0320455002.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Metal Candlestick
              <br />
              $ 9.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
        </EGroup>
        <EGroup>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0324033001.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Christmas-gift Bag
              <br />
              $ 17.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0325941001.gif'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Cotton Cushion Cover
              <br />
              $ 5.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_03.jpg'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_04.jpg'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingTop='10px'>
        <EGroup>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0323943001.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Small Porcelain Plate
              <br />
              $ 5.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0318204001.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Metal Tea Light Holder
              <br />
              $ 5.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
        </EGroup>
        <EGroup>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10 20 10'
              src='http://img2.anpdm.com/HM_Huvudkonto/0324075001.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10 20 10'
              textTransform='none'
            >
              Cotton Tablecloth
              <br />
              $ 19.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0321185002.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10 20 10'
              textTransform='none'
            >
              Tea Towel
              <br />
              $ 5.99
              <br />
            </EText>
            <EText align='center' padding='0 10 10 10'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px 10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_05.jpg'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px 10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_06_US.jpg'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EDivider
            borderColor='#bbbbbb'
            borderWidth='1px'
            padding='20px 10px'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection padding='10px'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5SL_07.jpg'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingTop='5px'>
        <EColumn width='480px'>
          <EText align='center' paddingTop='10px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '11px',
                color: '#000000',
                fontWeight: 'bold',
                letterSpacing: '2px'
              }}
            >
              KIDS
            </span>
            <br />
            <br />
            <span
              style={{
                fontFamily: 'Didot, Garamond, Georgia',
                fontSize: '52px',
                lineHeight: '43px',
                color: '#000000',
                fontWeight: 'bold'
              }}
            >
              HOLIDAY
              <br />
              SNUGS
            </span>
          </EText>
          <EText align='center' lineHeight='14px' paddingTop='5px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#080808',
                fontWeight: 'normal',
                lineHeight: '14px!important',
                padding: 0
              }}
            >
              The wait is half the fun – set expectations high with seasonal
              decorations, snuggly cushions and holiday-appropriate accessories.
            </span>
          </EText>
          <EText align='center' paddingTop='20px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#000000',
                letterSpacing: '1px'
              }}
            >
              <a href='http://www.hm.com/'>
                <img
                  width='3'
                  height='11'
                  src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                />{' '}
                SHOP NOW
              </a>
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection padding='20px 0'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px 10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5SL_08.jpg'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px 10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5SL_09.jpg'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://img2.anpdm.com/HM_Huvudkonto/0174818015_US.gif'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingTop='20px'>
        <EColumn>
          <EDivider
            borderColor='#bbbbbb'
            borderWidth='1px'
            padding='10px 10px 20px 10px'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection padding='10px 10px 30px 10px'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_Instagram_11_US.gif'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='rgb(7,9,10)'
        fullWidth='full-width'
        paddingTop='45px'
      >
        <EGroup width='40%'>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-facebook.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-twitter.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-instagram.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-youtube.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-googleplus.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-pinterest.png'
              width='20px'
            ></EImage>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection
        backgroundColor='rgb(7,9,10)'
        fullWidth='full-width'
        padding='10px 10px 100px 10px'
      >
        <EColumn>
          <EText
            align='center'
            color='#ffffff'
            fontFamily='Arial, Helvetica, sans-serif'
            fontSize='10px'
            lineHeight='11px'
          >
            <p style={{ fontSize: '11px', fontWeight: 'bold' }}>
              DOWNLOAD OUR APP &nbsp{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                iOS
              </a>{' '}
              |{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                ANDROID
              </a>
            </p>
            <p>
              *Offer valid 10/26/2015 - 11/4/2015 on{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                hm.com
              </a>{' '}
              on orders of $ 50 or more before taxes. Valid in US only.
            </p>

            <p>
              May be subject to printing errors, changes, price changes,
              delivery delays and limited availability of stock.
              <br />
              To ensure you continue to receive news from us, please add{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                no-reply@hm.com
              </a>{' '}
              to your address book.
            </p>

            <p>
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                Contact us
              </a>
              <br />
              You are receiving this email because you are signed up to receive
              H&M promotional communications. This message was sent by H & M
              Hennes & Mauritz GBC AB, Mäster Samuelsgatan 46, 106 38 Stockholm,
              Sweden.{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                www.hm.com
              </a>
              <br />
              If you would prefer not to receive our fashion news and offers,{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                simply click here to unsubscribe
              </a>
            </p>
          </EText>
          <EImage
            href='http://www.hm.com/'
            src='http://customers.anpdm.com/hm/1311_rknd/footer-logo.png'
            width='58px'
          ></EImage>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
);

export const hAndMMarkup = `
  <EMail>
    <EHead>
      <ETitle>H&M Home- A stylish holiday at home</ETitle>
      <EStyle
        style={
          \`.shop-now {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            font-weight: bold;
            mso-line-height-rule: single;
            color: #000000;
            letter-spacing: 1px;
          }
          a {
            text-decoration:none; color:#000000;
          }\`
        }
      />
      <EAttributes>
        <EAll padding='0'></EAll>
        <ESection backgroundColor='#fff' />
        <EClass
          color='#939393'
          fontFamily='Arial, Verdana, sans-serif'
          fontSize='11px'
          name='preheader'
        ></EClass>
        <EClass
          align='center'
          color='#000000'
          fontFamily='Arial, Helvetica, sans-serif'
          fontSize='12px'
          fontWeight='bold'
          lineHeight='20px'
          name='menu'
          textTransform='uppercase'
        ></EClass>
      </EAttributes>
    </EHead>
    <EBody>
      <ESection padding='10px 5px 0 5px'>
        <EColumn width='70%'>
          <EText mjClass='preheader'>
            New decor, classic design and ornaments for every room and space.
          </EText>
        </EColumn>
        <EColumn width='30%'>
          <EText align='right' mjClass='preheader'>
            View online
          </EText>
        </EColumn>
      </ESection>
      <ESection paddingTop='50px'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://customers.anpdm.com/hm/1311_rknd/header-logo.png'
            width='76px'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection padding='20px 20px'>
        <EGroup width='75%'>
          <EColumn>
            <EText mjClass='menu'>
              <a href='http://www.hm.com/'>SHOP NOW</a>
            </EText>
          </EColumn>
          <EColumn>
            <EText mjClass='menu'>
              <a href='http://www.hm.com/'>NEW ARRIVALS</a>
            </EText>
          </EColumn>
          <EColumn>
            <EText mjClass='menu'>
              <a href='http://www.hm.com/'>SALE</a>
            </EText>
          </EColumn>
        </EGroup>
        <EColumn width='25%'>
          <EText mjClass='menu'>
            <a href='http://www.hm.com/'>STORE LOCATOR</a>
          </EText>
        </EColumn>
      </ESection>
      <ESection
        borderBottom='1px solid #bbbbbb'
        borderTop='1px solid #bbbbbb'
        padding='20px 0'
      >
        <EColumn>
          <EText
            align='center'
            color='#080808'
            fontFamily='Helvetica, sans-serif'
            fontSize='18px'
            lineHeight='20px'
          >
            <a href='http://www.hm.com/'>
              Enjoy <b>free shipping</b> over $50 with code 3181!*
            </a>
          </EText>
        </EColumn>
      </ESection>
      <ESection paddingTop='40px'>
        <EColumn>
          <EImage src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_01.jpg'></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn width='480px'>
          <EText align='center' paddingTop='20px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '11px',
                color: '#000000',
                fontWeight: 'bold',
                letterSpacing: '2px'
              }}
            >
              HOME
            </span>
            <br />
            <br />
            <span
              style={{
                fontFamily: 'Didot, Garamond, Georgia',
                fontSize: '52px',
                lineHeight: '43px',
                color: '#000000',
                fontWeight: 'bold'
              }}
            >
              HOLIDAY
              <br />
              CLASSICS
            </span>
          </EText>
          <EText align='center' lineHeight='14px' paddingTop='5px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '13px',
                color: '#080808',
                fontWeight: 'normal',
                lineHeight: '14px!important',
                padding: 0
              }}
            >
              Red remains the ruling color of the holiday season. Invest in new
              classics to get into a festive mood.
            </span>
          </EText>
          <EText align='center' paddingTop='20px'>
            <span className='shop-now'>
              <a href='http://www.hm.com/'>
                <img
                  width='3'
                  height='11'
                  src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                />{' '}
                SHOP NOW
              </a>
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection paddingTop='30px'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_02.gif'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EGroup>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0320436003.gif'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Metal Storage Box
              <br />
              $ 14.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0320455002.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Metal Candlestick
              <br />
              $ 9.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
        </EGroup>
        <EGroup>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0324033001.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Christmas-gift Bag
              <br />
              $ 17.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0325941001.gif'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Cotton Cushion Cover
              <br />
              $ 5.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_03.jpg'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_04.jpg'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingTop='10px'>
        <EGroup>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0323943001.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Small Porcelain Plate
              <br />
              $ 5.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0318204001.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10px 20px 10px'
              textTransform='none'
            >
              Metal Tea Light Holder
              <br />
              $ 5.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
        </EGroup>
        <EGroup>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10 20 10'
              src='http://img2.anpdm.com/HM_Huvudkonto/0324075001.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10 20 10'
              textTransform='none'
            >
              Cotton Tablecloth
              <br />
              $ 19.99
              <br />
            </EText>
            <EText align='center' padding='0 10px 10px 10px'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              padding='0 10px 20px 10px'
              src='http://img2.anpdm.com/HM_Huvudkonto/0321185002.jpg'
            ></EImage>
            <EText
              lineHeight='18px'
              mjClass='menu'
              padding='0 10 20 10'
              textTransform='none'
            >
              Tea Towel
              <br />
              $ 5.99
              <br />
            </EText>
            <EText align='center' padding='0 10 10 10'>
              <span className='shop-now'>
                <a href='http://www.hm.com/'>
                  <img
                    width='3'
                    height='11'
                    src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                  />{' '}
                  SHOP NOW
                </a>
              </span>
            </EText>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px 10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_05.jpg'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px 10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5RQ_06_US.jpg'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EDivider
            borderColor='#bbbbbb'
            borderWidth='1px'
            padding='20px 10px'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection padding='10px'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5SL_07.jpg'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingTop='5px'>
        <EColumn width='480px'>
          <EText align='center' paddingTop='10px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '11px',
                color: '#000000',
                fontWeight: 'bold',
                letterSpacing: '2px'
              }}
            >
              KIDS
            </span>
            <br />
            <br />
            <span
              style={{
                fontFamily: 'Didot, Garamond, Georgia',
                fontSize: '52px',
                lineHeight: '43px',
                color: '#000000',
                fontWeight: 'bold'
              }}
            >
              HOLIDAY
              <br />
              SNUGS
            </span>
          </EText>
          <EText align='center' lineHeight='14px' paddingTop='5px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                color: '#080808',
                fontWeight: 'normal',
                lineHeight: '14px!important',
                padding: 0
              }}
            >
              The wait is half the fun – set expectations high with seasonal
              decorations, snuggly cushions and holiday-appropriate accessories.
            </span>
          </EText>
          <EText align='center' paddingTop='20px'>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#000000',
                letterSpacing: '1px'
              }}
            >
              <a href='http://www.hm.com/'>
                <img
                  width='3'
                  height='11'
                  src='http://customers.anpdm.com/hm/1311_rknd/link-darkarrow.png'
                />{' '}
                SHOP NOW
              </a>
            </span>
          </EText>
        </EColumn>
      </ESection>
      <ESection padding='20px 0'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px 10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5SL_08.jpg'
          ></EImage>
        </EColumn>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            padding='10px 10px'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_5SL_09.jpg'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://img2.anpdm.com/HM_Huvudkonto/0174818015_US.gif'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection paddingTop='20px'>
        <EColumn>
          <EDivider
            borderColor='#bbbbbb'
            borderWidth='1px'
            padding='10px 10px 20px 10px'
          ></EDivider>
        </EColumn>
      </ESection>
      <ESection padding='10px 10px 30px 10px'>
        <EColumn>
          <EImage
            href='http://www.hm.com/'
            src='http://img2.anpdm.com/HM_Huvudkonto/w44_151029_Instagram_11_US.gif'
          ></EImage>
        </EColumn>
      </ESection>
      <ESection
        backgroundColor='rgb(7,9,10)'
        fullWidth='full-width'
        paddingTop='45px'
      >
        <EGroup width='40%'>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-facebook.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-twitter.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-instagram.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-youtube.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-googleplus.png'
              width='20px'
            ></EImage>
          </EColumn>
          <EColumn>
            <EImage
              href='http://www.hm.com/'
              src='http://customers.anpdm.com/hm/1311_rknd/icon-pinterest.png'
              width='20px'
            ></EImage>
          </EColumn>
        </EGroup>
      </ESection>
      <ESection
        backgroundColor='rgb(7,9,10)'
        fullWidth='full-width'
        padding='10px 10px 100px 10px'
      >
        <EColumn>
          <EText
            align='center'
            color='#ffffff'
            fontFamily='Arial, Helvetica, sans-serif'
            fontSize='10px'
            lineHeight='11px'
          >
            <p style={{ fontSize: '11px', fontWeight: 'bold' }}>
              DOWNLOAD OUR APP &nbsp{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                iOS
              </a>{' '}
              |{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                ANDROID
              </a>
            </p>
            <p>
              *Offer valid 10/26/2015 - 11/4/2015 on{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                hm.com
              </a>{' '}
              on orders of $ 50 or more before taxes. Valid in US only.
            </p>

            <p>
              May be subject to printing errors, changes, price changes,
              delivery delays and limited availability of stock.
              <br />
              To ensure you continue to receive news from us, please add{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                no-reply@hm.com
              </a>{' '}
              to your address book.
            </p>

            <p>
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                Contact us
              </a>
              <br />
              You are receiving this email because you are signed up to receive
              H&M promotional communications. This message was sent by H & M
              Hennes & Mauritz GBC AB, Mäster Samuelsgatan 46, 106 38 Stockholm,
              Sweden.{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                www.hm.com
              </a>
              <br />
              If you would prefer not to receive our fashion news and offers,{' '}
              <a
                style={{ textDecoration: 'underline', color: '#ffffff' }}
                href='http://www.hm.com/'
              >
                simply click here to unsubscribe
              </a>
            </p>
          </EText>
          <EImage
            href='http://www.hm.com/'
            src='http://customers.anpdm.com/hm/1311_rknd/footer-logo.png'
            width='58px'
          ></EImage>
        </EColumn>
      </ESection>
    </EBody>
  </EMail>
`;

const HAndM: FC<any> = () => {
  const { html } = useEmail(hAndM, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HAndM;
