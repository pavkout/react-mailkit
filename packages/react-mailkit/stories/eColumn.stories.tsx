import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ESection, EText, EButton, EImage, EColumn } from '../src/browser';

export default {
  title: 'Email Design System/Standard Body components/eColumn',
  component: EColumn,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    innerBackgroundColor: {
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    borderRadius: {
      table: {
        category: 'Sizes'
      }
    },
    width: {
      table: {
        category: 'Dimensions'
      }
    },
    padding: {
      table: {
        category: 'Sizes'
      }
    },
    paddingTop: {
      table: {
        category: 'Sizes'
      }
    },
    paddingBottom: {
      table: {
        category: 'Sizes'
      }
    },
    paddingRight: {
      table: {
        category: 'Sizes'
      }
    },
    paddingLeft: {
      table: {
        category: 'Sizes'
      }
    },
    border: {
      table: {
        category: 'Sizes'
      }
    },
    borderTop: {
      table: {
        category: 'Sizes'
      }
    },
    borderBottom: {
      table: {
        category: 'Sizes'
      }
    },
    borderRight: {
      table: {
        category: 'Sizes'
      }
    },
    borderLeft: {
      table: {
        category: 'Sizes'
      }
    },
    innerBorder: {
      table: {
        category: 'Sizes'
      }
    },
    innerBorderTop: {
      table: {
        category: 'Sizes'
      }
    },
    innerBorderBottom: {
      table: {
        category: 'Sizes'
      }
    },
    innerBorderRight: {
      table: {
        category: 'Sizes'
      }
    },
    innerBorderLeft: {
      table: {
        category: 'Sizes'
      }
    },
    innerBorderRadius: {
      table: {
        category: 'Sizes'
      }
    },
    verticalAlign: {
      table: {
        category: 'Alignment'
      },
      control: { type: 'select' }
    },
    cssClass: {
      table: {
        category: 'Extra Class'
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof EColumn>;

const Template: ComponentStory<typeof EColumn> = (args) => (
  <ESection backgroundColor="#f0f0f0">
    <EColumn {...args}>
      <EText fontStyle="italic" fontSize="20px" color="#626262">
        Awesome Mail Kit
      </EText>
    </EColumn>
  </ESection>
);

export const CompanyHeader = Template.bind({});

CompanyHeader.args = {};

const TemplateImage: ComponentStory<typeof EColumn> = (args) => (
  <ESection
    backgroundUrl="https://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg"
    backgroundSize="cover"
    backgroundRepeat="no-repeat">
    <EColumn {...args}>
      <EText
        align="center"
        color="#fff"
        fontSize="40px"
        fontFamily="Helvetica Neue">
        Slogan here
      </EText>
      <EButton backgroundColor="#F63A4D" href="#">
        Promotion
      </EButton>
    </EColumn>
  </ESection>
);

export const ImageHeader = TemplateImage.bind({});

ImageHeader.args = {
  width: '600px'
};

const TemplateIntro: ComponentStory<typeof EColumn> = (args) => (
  <ESection backgroundColor="#fafafa">
    <EColumn {...args}>
      <EText
        fontStyle="italic"
        fontSize="20px"
        fontFamily="Helvetica Neue"
        color="#626262">
        My Awesome Text
      </EText>
      <EText color="#525252">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum
        enim eget magna efficitur, eu semper augue semper. Aliquam erat
        volutpat. Cras id dui lectus. Vestibulum sed finibus lectus, sit amet
        suscipit nibh. Proin nec commodo purus. Sed eget nulla elit. Nulla
        aliquet mollis faucibus.
      </EText>
      <EButton backgroundColor="#F45E43" href="#">
        Learn more
      </EButton>
    </EColumn>
  </ESection>
);

export const IntroText = TemplateIntro.bind({});

IntroText.args = {
  width: '400px'
};

const TemplateTwoColumns: ComponentStory<typeof EColumn> = (args) => (
  <ESection backgroundColor="white">
    <EColumn {...args}>
      <EImage
        width="200px"
        src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg"
      />
    </EColumn>
    <EColumn {...args}>
      <EText
        fontStyle="italic"
        fontSize="20px"
        fontFamily="Helvetica Neue"
        color="#626262">
        Find amazing places
      </EText>
      <EText color="#525252">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum
        enim eget magna efficitur, eu semper augue semper. Aliquam erat
        volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.
      </EText>
    </EColumn>
  </ESection>
);

export const TwoColumns = TemplateTwoColumns.bind({});

TwoColumns.args = {};
