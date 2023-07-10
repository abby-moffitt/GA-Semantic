import React from 'react';

// semantic
import { Header, Segment, Tab } from 'semantic-ui-react';

export const TabSegment = () => {
  // vars
  const panes = [
    {
      menuItem: {
        key: 'Balances',
        content: 'Balances',
      },
      render: () => <Tab.Pane>Some content for Balances</Tab.Pane>,
    },
    {
      menuItem: {
        key: 'Rates',
        content: 'Rates',
      },
      render: () => <Tab.Pane>Some content for Rates</Tab.Pane>,
    },
    {
      menuItem: {
        key: 'Renewal Rates',
        icon: 'bell',
        content: 'Renewal Rates',
      },
      render: () => <Tab.Pane>Some content for Renewal</Tab.Pane>,
    },
    {
      menuItem: {
        key: 'Performance Lock',
        icon: 'lock',
        content: 'Performance Lock',
      },
      render: () => <Tab.Pane>Some content for Performance</Tab.Pane>,
    },
  ];

  return (
    <Segment>
      <Header as='h2' dividing>
        Tabs
      </Header>

      <Tab panes={panes} />
    </Segment>
  );
};
