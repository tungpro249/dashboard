import { Box, IconButton, Modal } from '@mui/material';
import { X as CloseIcon } from '@phosphor-icons/react/dist/ssr/X';

const AddOrUpdateForm = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box
        sx={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          // height: '50%',
          bgcolor: 'white',
          boxShadow: 24,
          px: 2,
          py: 4,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon size={24} weight="bold" />
        </IconButton>

        {children}
      </Box>
    </Modal>
  );
};

export default AddOrUpdateForm;
