import React, { useState } from 'react';

// semantic
import {
  Checkbox,
  Button,
  Dropdown,
  Form,
  Header,
  Icon,
  Input,
  Segment,
  Tab,
} from 'semantic-ui-react';

// styles
import './Theme.css';
import '../../../styles/input.css';

export const Theme = () => {
  // state
  const [dropdownValue, setDropdownValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // vars
  const dropdownOptions = [
    {
      text: 'January',
      value: 'january',
    },
    {
      text: 'February',
      value: 'february',
    },
    {
      text: 'March',
      value: 'march',
    },
    {
      text: 'April',
      value: 'april',
    },
    {
      text: 'May',
      value: 'may',
    },
    {
      text: 'June',
      value: 'june',
    },
    {
      text: 'July',
      value: 'july',
    },
  ];

  // handlers
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleCheckboxOnChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleDropdownChange = (e, data) => {
    alert(data.value);
    setDropdownValue(data.value);
  };

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
    <div>
      <div className='section'>
        <Header as='h1'>Global Atlantic</Header>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Button
          </Header>

          <div className='row'>
            <Button>Primary</Button>
            <Button secondary>Secondary</Button>
          </div>
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Checkbox
          </Header>

          <Checkbox
            label='Default Checkbox'
            onChange={handleCheckboxOnChange}
          />

          <Header size='small' dividing>
            Disabled
          </Header>
          <Checkbox label='Disabled Checkbox' disabled />
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Dropdown
          </Header>

          <Dropdown
            className='dropdownMenu'
            onChange={handleDropdownChange}
            options={dropdownOptions}
            placeholder='Select'
            selection
            value={dropdownValue}
          />
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Input
          </Header>

          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Text input'
            icon={
              inputValue.length === 0 ? (
                ''
              ) : (
                <Icon name='times circle outline' onClick={handleClear} link />
              )
            }
          />
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Label
          </Header>

          <Form>
            <Form.Field>
              <label for='input-default'>Label</label>
              <Input id='input-default' placeholder='Input' />
            </Form.Field>

            <Form.Field className='error'>
              <label for='input-error'>Error</label>
              <Input id='input-error' placeholder='Input' />
            </Form.Field>

            <Form.Field className='success'>
              <label for='input-success'>Success</label>
              <Input id='input-success' placeholder='Input' />
            </Form.Field>

            <Form.Field className='disabled'>
              <label for='input-disabled'>Disabled</label>
              <Input id='input-disabled' placeholder='Input' />
            </Form.Field>
          </Form>
        </Segment>
      </div>

      <div className='section'>
        <Segment padded>
          <Header as='h2' dividing>
            Tab
          </Header>
          <Tab panes={panes} />
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Typography
          </Header>

          <Header size='huge'>Huge</Header>
          <Header size='large'>Large</Header>
          <Header as='h1'>Heading 1</Header>
          <Header as='h2'>Heading 2</Header>
          <Header as='h3'>Heading 3</Header>
          <Header as='h4'>Heading 4</Header>
          <Header as='h5'>Heading 5</Header>
          <Header as='h5'>Heading 5</Header>
          <Header size='medium'>Medium</Header>
          <Header size='small'>Small</Header>
          <Header size='tiny'>Tiny</Header>
        </Segment>
      </div>
    </div>
  );
};
