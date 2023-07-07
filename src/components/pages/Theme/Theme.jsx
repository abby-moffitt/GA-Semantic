import React from 'react';

// semantic
import { Header } from 'semantic-ui-react';

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

export const Theme = () => {
  return (
    <div>
      <div className={styles.section}>
        <Header as='h1'>Global Atlantic</Header>
      </div>

      <div className={styles.section}>
        <ButtonSegment />
      </div>

      <div className={styles.section}>
        <CheckboxSegment />
      </div>

      <div className={styles.section}>
        <DividerSegment />
      </div>

      <div className={styles.section}>
        <DropdownSegment />
      </div>

      <div className={styles.section}>
        <FormLabelSegment />
      </div>

      <div className={styles.section}>
        <InputSegment />
      </div>

      <div className={styles.section}>
        <LabelSegment />
      </div>

      <div className={styles.section}>
        <MessageSegment />
      </div>

      <div className={styles.section}>
        <ModalSegment />
      </div>

      <div className={styles.section}>
        <TabSegment />
      </div>

      <div className={styles.section}>
        <TableSegment />
      </div>

      <div className={styles.section}>
        <DatagridSegment />
      </div>

      <div className={styles.section}>
        <TextAreaSegment />
      </div>

      <div className={styles.section}>
        <TypographySegment />
      </div>
    </div>
  );
};
