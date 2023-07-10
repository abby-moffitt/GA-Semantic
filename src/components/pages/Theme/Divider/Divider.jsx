import React from 'react';

// semantic
import { Divider, Header, Segment } from 'semantic-ui-react';

// styles
import styles from '../Theme.module.css';

export const DividerSegment = () => {
  return (
    <Segment>
      <Header as='h2' dividing>
        Divider
      </Header>
      
      <div className={styles.column}>
        <div>
          <p>
            Some text <strong>above</strong> the divider consectetur adipiscing
            elit.. Cras a risus metus. Morbi sed augue in lorem lobortis tempor.
            Proin arcu nisl, elementum sit amet odio finibus, porta accumsan
            tellus. Sed a vestibulum lectus.
          </p>
        </div>
        <Divider />
        <div>
          <p>
            Different text <strong>below</strong> the divider, consectetur
            adipiscing elit. Cras a risus metus. Morbi sed augue in lorem
            lobortis tempor. Proin arcu nisl, elementum sit amet odio finibus,
            porta accumsan tellus. Sed a vestibulum lectus.
          </p>
        </div>
      </div>
    </Segment>
  );
};
