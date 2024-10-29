import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalProp{
    openModal: Boolean | any,
    setOpenModal : React.Dispatch<React.SetStateAction<boolean>>,
    children : React.ReactNode
}

export default function TransitionsModal({openModal,setOpenModal,children}:ModalProp) {
  // const [open, setOpen] = React.useState(openModal);
  // console.log(open,'modal open')
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <div >
          {children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
