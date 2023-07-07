import React, { useState } from 'react';

// semantic
import { Checkbox, Header, Form, Segment } from 'semantic-ui-react';

// styles
import styles from '../Theme.module.css';

export const CheckboxSegment = () => {
  // state
  const [isChecked, setIsChecked] = useState(false);

  // functions
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Segment>
      <Header as='h2' dividing>
        Checkbox
      </Header>

      <Checkbox label='Default Checkbox' onChange={handleOnChange} />

      <Header size='small' dividing>
        Disabled
      </Header>
      <Checkbox label='Disabled Checkbox' disabled />

      <Header size='small' dividing>
        Form
      </Header>
      <div className={styles.column}>
        <Form.Checkbox label='Form checkbox' />
        <Form.Field control={Checkbox} label='Form field' />
      </div>
    </Segment>
  );
};
