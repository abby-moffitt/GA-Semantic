import React from 'react';

// semantic
import { Form, Header, Segment, TextArea } from 'semantic-ui-react';

export const TextAreaSegment = () => {
  // vars
  const placeholderText = 'Enter your value here...';

  return (
    <Segment>
      <Header as='h2' dividing>
        Text Area
      </Header>

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
    </Segment>
  );
};
