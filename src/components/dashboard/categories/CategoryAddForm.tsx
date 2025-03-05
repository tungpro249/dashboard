import { Box, Button, Divider, Grid, TextField } from '@mui/material';

import AddOrUpdateForm from '@/components/core/form/AddOrUpdateForm';
import MDDatePicker from '@/components/core/ui/DatePicker';
import UploadFile from '@/components/core/ui/UploadFIle';

const CategoryAddForm = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  return (
    <AddOrUpdateForm open={open} onClose={handleClose}>
      <Box>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Thêm mới Danh mục</h1>
        <Divider />
        <Box sx={{ mt: 4 }}>
          <Grid container >
            <Grid item xs={12} sm={6}>
              <UploadFile onUpload={(file) => console.log(file)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="outlined-basic" label="Tên danh mục" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDDatePicker label="Ngày tạo" date={null} handleChooseDate={() => {}} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDDatePicker label="Ngày tạo" date={null} handleChooseDate={() => {}} />
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Box className="flex justify-end">
          <Button variant="contained" color="error" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={handleClose}>
            Lưu
          </Button>
        </Box>
      </Box>
    </AddOrUpdateForm>
  );
};

export default CategoryAddForm;
