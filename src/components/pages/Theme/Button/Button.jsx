import React from 'react';

// semantic
import { Button, Header, Segment } from 'semantic-ui-react';

// styles
import styles from '../Theme.module.css';

export const ButtonSegment = () => {
  return (
    <Segment>
      <Header as='h2' dividing>
        Button
      </Header>

      <div className={styles.column}>
        <div className={styles.row}>
          <Button size='small'>Small Primary</Button>
          <Button size='medium'>Medium Primary</Button>
          <Button size='large'>Large Primary</Button>
        </div>
        <div className={styles.row}>
          <Button secondary size='small'>
            Small Secondary
          </Button>
          <Button secondary size='medium'>
            Medium Secondary
          </Button>
          <Button secondary size='large'>
            Large Secondary
          </Button>
        </div>
      </div>
    </Segment>
  );
};
