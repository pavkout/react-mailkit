import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EMap } from '../src/browser';

export default {
  title: 'Email Design System/Custom Body components/eMap',
  component: EMap,
  argTypes: {
    key: {
      table: {
        category: 'Google Map Key',
      },
    },
    mapType: {
      table: {
        category: 'Map Type',
      },
      control: { type: 'select' },
    },
    height: {
      table: {
        category: 'Dimensions',
      },
    },
    width: {
      table: {
        category: 'Dimensions',
      },
    },
    size: {
      table: {
        category: 'Dimensions',
      },
    },
    scale: {
      table: {
        category: 'Image',
      },
      control: { type: 'select' },
    },
    alt: {
      table: {
        category: 'Image',
      },
    },
    format: {
      table: {
        category: 'Image',
      },
      control: { type: 'select' },
    },
    language: {
      table: {
        category: 'Map',
      },
    },
    region: {
      table: {
        category: 'Map',
      },
    },
    center: {
      table: {
        category: 'Map',
      },
    },
    zoom: {
      table: {
        category: 'Map',
      },
    },
    visible: {
      table: {
        category: 'Map',
      },
    },
    style: {
      table: {
        category: 'Map',
      },
    },
    path: {
      table: {
        category: 'Map',
      },
    },
    client: {
      table: {
        category: 'Map',
      },
    },
    signature: {
      table: {
        category: 'Map',
      },
    },
    channel: {
      table: {
        category: 'Map',
      },
    },
    markers: {
      table: {
        category: 'Map',
      },
    },
    markerGroups: {
      table: {
        category: 'Map',
      },
    },
    paths: {
      table: {
        category: 'Map',
      },
    },
    pathGroups: {
      table: {
        category: 'Map',
      },
    },
  },
} as ComponentMeta<typeof EMap>;

const Template: ComponentStory<typeof EMap> = (args) => <EMap {...args} />;

export const Roadmap = Template.bind({});

Roadmap.args = {
  maptype: 'roadmap',
};

export const Satellite = Template.bind({});

Satellite.args = {
  maptype: 'satellite',
};

export const Terrain = Template.bind({});

Terrain.args = {
  maptype: 'terrain',
};

export const Hybrid = Template.bind({});

Hybrid.args = {
  maptype: 'hybrid',
};

export const Scaled = Template.bind({});

Scaled.args = {
  scale: 'four',
  maptype: 'hybrid',
};

export const Marker = Template.bind({});

Marker.args = {
  maptype: 'roadmap',
  markers: [
    {
      location: 'Memphis,TN',
      color: 'red',
    },
  ],
};

export const TinyMarker = Template.bind({});

TinyMarker.args = {
  maptype: 'roadmap',
  markers: [
    {
      location: 'Memphis,TN',
      color: 'purple',
      size: 'tiny',
    },
  ],
};

export const Size = Template.bind({});

Size.args = {
  maptype: 'roadmap',
  width: 300,
  height: 300,
  markers: [
    {
      location: 'Memphis,TN',
      color: 'orange',
    },
  ],
};
