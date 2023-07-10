import React, { useState } from 'react';

// semantic
import { Button, Header, Modal, Segment } from 'semantic-ui-react';

export const ModalSegment = () => {
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // vars
  const contentText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  // functions
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Segment>
      <Header as='h2' dividing>
        Modal
      </Header>

      <Button onClick={handleOpenModal}>Open Modal</Button>

      <Header size='small' dividing>
        Modal trigger
      </Header>
      <Modal
        onClose={handleCloseModal}
        onOpen={handleOpenModal}
        open={isModalOpen}
        trigger={<Button>Open Modal (trigger)</Button>}
        closeIcon
      >
        <Modal.Header>
          <Header as='h2'>Heading 2</Header>
        </Modal.Header>

        <Modal.Content>
          <Modal.Description>
            <p>{contentText}</p>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button secondary size='small' onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button size='small' onClick={handleCloseModal}>
            Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    </Segment>
  );
};
