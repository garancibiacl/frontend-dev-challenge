import { useState } from 'react';
import { SlButton, SlDrawer } from '@shoelace-style/shoelace/dist/react';

export const  App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDrawer label="Drawer" placement="start" open={open} onSlAfterHide={() => setOpen(false)}>
        This drawer slides in from the start.
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDrawer>

      <SlButton onClick={() => setOpen(true)}>Open Drawer</SlButton>
    </>
  );
};