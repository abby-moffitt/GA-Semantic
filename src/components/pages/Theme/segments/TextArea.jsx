import React from 'react';

// semantic
import { Form, TextArea } from 'semantic-ui-react';

export const TextAreaSegment = () => {
  // vars
  const placeholderText = 'Enter your value here...';

  return (
    <Form>
      <Form.Field
        control={TextArea}
        label='Textarea'
        placeholder={placeholderText}
      />

      <Form.Field
        control={TextArea}
        error
        label='Error'
        placeholder={placeholderText}
      />

      <Form.Field
        control={TextArea}
        disabled
        label='Disabled'
        placeholder={placeholderText}
      />
    </Form>
  );
};
