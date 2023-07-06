import React, { useState } from 'react';

// semantic
import { Form, Header, Icon, Input } from 'semantic-ui-react';

// styles
import styles from '../Theme.module.css';

export const InputSegment = () => {
  // state
  const [inputValue, setInputValue] = useState('');

  // vars
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
  const placeholderText = 'Enter your value here...';

  // functions
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <>
      <div className={styles.grid}>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholderText}
          icon={
            inputValue.length === 0 ? (
              ''
            ) : (
              <Icon name='times circle outline' onClick={handleClear} link />
            )
          }
        />
      </div>

      <Header size='small' dividing>
        Error
      </Header>
      <Input error placeholder={placeholderText} />

      <Header size='small' dividing>
        Disabled
      </Header>
      <Input disabled placeholder={placeholderText} />

      <Header size='small' dividing>
        Types
      </Header>
      <Form>
        <div className={styles.grid}>
          {inputTypes.map((type, index) => (
            <Form.Field
              className={styles.formLabel}
              control='input'
              key={`input-type-${index}`}
              label={type}
              type={type}
              placeholder={placeholderText}
            />
          ))}
        </div>
      </Form>
    </>
  );
};
