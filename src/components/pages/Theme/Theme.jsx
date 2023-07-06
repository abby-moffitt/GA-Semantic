import React from 'react';

// semantic
import { Header, Segment } from 'semantic-ui-react';

// segments
import { ButtonSegment } from './Button/Button';
import { CheckboxSegment } from './Checkbox/Checkbox';
import { DatagridSegment } from './Datagrid/Datagrid';
import { DividerSegment } from './Divider/Divider';
import { DropdownSegment } from './Dropdown/Dropdown';
import { FormLabelSegment } from './FormLabel/FormLabel';
import { InputSegment } from './Input/Input';
import { LabelSegment } from './Label/Label';
import { MessageSegment } from './Message/Message';
import { ModalSegment } from './Modal/Modal';
import { TableSegment } from './Table/Table';
import { TabSegment } from './Tab/Tab';
import { TextAreaSegment } from './TextArea/TextArea';
import { TypographySegment } from './Typography/Typography';

// styles
import styles from './Theme.module.css';

const SectionWrapper = ({ title, children }) => {
  return (
    <div className={styles.section}>
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

      <SectionWrapper title='Tab'>
        <TabSegment />
      </SectionWrapper>

      <SectionWrapper title='Table'>
        <TableSegment />
      </SectionWrapper>

      <SectionWrapper title='Table - Redux Datagrid'>
        <DatagridSegment />
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
