import React from 'react';

//redux datagrid
import Datagrid, { PaginationHandler } from 'redux-form-datagrid';

// semantic
import { Header, Segment } from 'semantic-ui-react';

// segments
import {
  ButtonSegment,
  CheckboxSegment,
  DividerSegment,
  DropdownSegment,
  FormLabelSegment,
  InputSegment,
  LabelSegment,
  MessageSegment,
  ModalSegment,
  TableSegment,
  TabSegment,
  TextAreaSegment,
  TypographySegment,
} from './segments';

// styles
import styles from './Theme.module.css';

const SectionWrapper = ({ title, children }) => {
  return (
    <div className='section'>
      <Segment>
        <Header as='h2' dividing>
          {title}
        </Header>
        {children}
      </Segment>
    </div>
  );
};

export const Theme = () => {
<<<<<<< HEAD
  // state
  const [inputValue, setInputValue] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // vars
  const data = [
    {
      name: 'John Doe',
      govtID: '823456789',
      homePhone: '3431231233',
      workPhone: '',
      insuredDate: '09/10/2020',
      amount: '1875.00',
    },
    {
      name: 'John Smith',
      govtID: '72345670',
      homePhone: '3431231237',
      workPhone: '',
      insuredDate: '02/13/2020',
      amount: '1250.00',
    },
    {
      name: 'Darius Carreira',
      govtID: '223456678',
      homePhone: '8674561293',
      workPhone: '8674561245',
      insuredDate: '07/25/2020',
      amount: '150.00',
    },
    {
      name: 'John Smith',
      govtID: '12345678',
      homePhone: '3431231236',
      workPhone: '',
      insuredDate: '01/13/2020',
      amount: '11625.00',
    },
    {
      name: 'Darius Carreira',
      govtID: '523456678',
      homePhone: '8674561297',
      workPhone: '8674561245',
      insuredDate: '03/11/2020',
      amount: '1152.29',
    },
    {
      name: 'John Smith',
      govtID: '32345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '06/22/2020',
      amount: '-1250',
    },
    {
      name: 'Darius Carreira1',
      govtID: '923456678',
      homePhone: '8674561294',
      workPhone: '8674561245',
      insuredDate: '04/28/2020',
      amount: '1875.00',
    },
    {
      name: 'John Smith1',
      govtID: '42345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '08/15/2020',
      amount: '1050',
    },
    {
      name: 'Darius Carreira1',
      govtID: '223456678',
      homePhone: '8674561292',
      workPhone: '8674561245',
      insuredDate: '05/19/2020',
      amount: '1050.00',
    },
    {
      name: 'John Smith',
      govtID: '62345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '09/14/2020',
      amount: '69.95',
    },
    {
      name: 'Darius Carreira1',
      govtID: '823456678',
      homePhone: '8674561294',
      workPhone: '8674561245',
      insuredDate: '03/20/2020',
      amount: '65',
    },
    {
      name: 'John Smith1',
      govtID: '72345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '12/12/2020',
      amount: '34.97',
    },
    {
      name: 'Darius Carreira1',
      govtID: '323456678',
      homePhone: '8674561292',
      workPhone: '8674561245',
      insuredDate: '11/12/2020',
      amount: '34.97',
    },
    {
      name: 'John Smith',
      govtID: '62345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '05/30/2020',
      amount: '34.97',
    },
    {
      name: 'Darius Carreira1',
      govtID: '123456678',
      homePhone: '8674561294',
      workPhone: '8674561245',
      insuredDate: '09/29/2020',
      amount: '34.97',
    },
  ];

  const columnModel = [
    {
      dataIndex: 'name',
      name: 'Name',
      order: 1,
      sortComparator: (first, second) => {
        if (first < second) {
          return true;
        }
        return false;
      },
      sortable: true,
      sortingType: 'string',
    },
    {
      dataIndex: 'govtID',
      name: 'Government ID',
      order: 2,
      sortable: true,
      sortingType: 'number',
      sortComparator: 'default',
      validator: (value) => {
        if (value.length === 9) {
          return true;
        }
        return false;
      },
      formatter: (value) =>
        `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(
          5
        )}`,
    },
    {
      dataIndex: 'homePhone',
      name: 'Home Phone',
      order: 3,
      sortable: true,
      sortingType: 'number',
    },
    {
      dataIndex: 'insuredDate',
      name: 'Insured Date',
      order: 4,
      sortable: true,
      sortingType: 'date',
    },
    {
      dataIndex: 'amount',
      name: 'Amount',
      order: 5,
      sortable: true,
      sortingType: 'number',
      formatter: (value) => <div>${value}</div>,
    },
    {
      dataIndex: 'workPhone',
      name: 'Work Phone',
      sortable: true,
      sortingType: 'number',
      formatter: (value) => (
        <div>
          <Icon name='phone' />
          {value &&
            `(${value.substring(0, 3)})-${value.substring(
              3,
              6
            )}-${value.substring(6)}`}
        </div>
      ),
    },
  ];

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

  const contentText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  const placeholderText = 'Enter your value here...';

  const inputTypes = [
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.section}>
        <Header as='h1'>Global Atlantic</Header>
      </div>

      <SectionWrapper title='Button'>
        <ButtonSegment />
      </SectionWrapper>

      <SectionWrapper title='Checkbox'>
        <CheckboxSegment />
      </SectionWrapper>

      <SectionWrapper title='Divider'>
        <DividerSegment />
      </SectionWrapper>

      <SectionWrapper title='Dropdown'>
        <DropdownSegment />
      </SectionWrapper>

      <SectionWrapper title='Form Label'>
        <FormLabelSegment />
      </SectionWrapper>

      <SectionWrapper title='Input'>
        <InputSegment />
      </SectionWrapper>

      <SectionWrapper title='Label'>
        <LabelSegment />
      </SectionWrapper>

      <SectionWrapper title='Message'>
        <MessageSegment />
      </SectionWrapper>

      <SectionWrapper title='Modal'>
        <ModalSegment />
      </SectionWrapper>

      <SectionWrapper title='Table'>
        <TableSegment />
      </SectionWrapper>

      <SectionWrapper title='Tab'>
        <TabSegment />
      </SectionWrapper>

      <SectionWrapper title='Text Area'>
        <TextAreaSegment />
      </SectionWrapper>

      <SectionWrapper title='Typography'>
        <TypographySegment />
      </SectionWrapper>
    </div>
  );
};
